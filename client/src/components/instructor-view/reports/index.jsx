import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Course Completion Rates' }
  },
};

const months = [
  { label: 'January', value: '2025-01' },
  { label: 'February', value: '2025-02' },
  { label: 'March', value: '2025-03' },
  // Add other months as needed
];

function InstructorReports() {
  const [selectedMonth, setSelectedMonth] = useState('2025-01');
  const [reportData, setReportData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const data = {
      labels: ['Course 1', 'Course 2', 'Course 3'],
      datasets: [{
        label: 'Completion',
        data: [65, 59, 80], // Random data; change as needed
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }, {
        label: 'Enrollment',
        data: [85, 90, 75],
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }]
    };
    setReportData(data);
  }, [selectedMonth]);

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <select
          className="form-select block w-1/4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map(month => (
            <option key={month.value} value={month.value}>{month.label}</option>
          ))}
        </select>
      </div>
      <Bar options={options} data={reportData} />
    </div>
  );
}

export default InstructorReports;
