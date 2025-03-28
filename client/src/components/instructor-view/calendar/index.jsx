import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function InstructorCalendar() {
    const [events, setEvents] = useState([
        {
            id: 0,
            title: 'Class Introduction',
            start: moment().toDate(),
            end: moment().add(1, 'hours').toDate(),
            allDay: false
        },
        {
            id: 1,
            title: 'Exam: Algebra',
            start: moment().add(2, 'days').toDate(),
            end: moment().add(2, 'days').add(2, 'hours').toDate(),
            allDay: false
        },
        {
            id: 2,
            title: 'Assignment Deadline: Biology',
            start: moment().add(4, 'days').toDate(),
            end: moment().add(4, 'days').toDate(),
            allDay: true
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleSelectEvent(event) {
        setSelectedEvent(event);
        setModalOpen(true);
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={event => handleSelectEvent(event)}
                popup
            />
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                contentLabel="Event Details"
                className="absolute top-20 left-1/4 right-1/4 bottom-1/4 bg-white rounded-lg p-6 shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            >
                <div>
                    <h2 className="text-lg font-bold">{selectedEvent ? selectedEvent.title : 'Add Event'}</h2>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default InstructorCalendar;
