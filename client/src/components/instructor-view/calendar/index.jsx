import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
Modal.setAppElement('#root'); // Needed for accessibility (replace '#root' if different)

function InstructorCalendar() {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: 'Class Introduction',
      start: moment().toDate(),
      end: moment().add(1, 'hour').toDate(),
      allDay: false,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("view"); // 'view' or 'add'
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventData, setNewEventData] = useState({
    title: '',
    start: '',
    end: '',
    allDay: false,
  });

  const handleSelectEvent = (event) => {
    setModalType("view");
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleSelectSlot = ({ start, end }) => {
    setModalType("add");
    setNewEventData({
      title: '',
      start,
      end,
      allDay: false,
    });
    setModalOpen(true);
  };

  const handleAddEvent = () => {
    if (!newEventData.title) return alert("Title is required");
    setEvents((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newEventData,
        start: new Date(newEventData.start),
        end: new Date(newEventData.end),
      },
    ]);
    setModalOpen(false);
    setNewEventData({ title: '', start: '', end: '', allDay: false });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">📆 Instructor Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        popup
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        className="rounded"
      />

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Event Modal"
        className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white w-[90%] max-w-md rounded-lg p-6 shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 z-40"
      >
        {modalType === "view" ? (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedEvent?.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Start:</strong> {moment(selectedEvent?.start).format('MMMM Do YYYY, h:mm A')}
            </p>
            <p className="text-sm text-gray-600">
              <strong>End:</strong> {moment(selectedEvent?.end).format('MMMM Do YYYY, h:mm A')}
            </p>
            {selectedEvent?.allDay && (
              <p className="text-blue-500 font-medium mt-2">All Day Event</p>
            )}
            <div className="mt-6 text-right">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">📌 Add New Event</h3>
            <div className="space-y-3">
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Event Title"
                value={newEventData.title}
                onChange={(e) => setNewEventData({ ...newEventData, title: e.target.value })}
              />
              <div className="flex gap-2">
                <label className="text-sm w-1/2">
                  Start:
                  <input
                    type="datetime-local"
                    className="w-full mt-1 border rounded px-2 py-1"
                    value={moment(newEventData.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) =>
                      setNewEventData({ ...newEventData, start: new Date(e.target.value) })
                    }
                  />
                </label>
                <label className="text-sm w-1/2">
                  End:
                  <input
                    type="datetime-local"
                    className="w-full mt-1 border rounded px-2 py-1"
                    value={moment(newEventData.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) =>
                      setNewEventData({ ...newEventData, end: new Date(e.target.value) })
                    }
                  />
                </label>
              </div>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newEventData.allDay}
                  onChange={(e) =>
                    setNewEventData({ ...newEventData, allDay: e.target.checked })
                  }
                />
                <span className="text-sm">All Day Event</span>
              </label>
            </div>
            <div className="mt-5 text-right space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleAddEvent}
              >
                Save Event
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default InstructorCalendar;
