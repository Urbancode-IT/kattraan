import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

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
    title: {
      display: true,
      text: '📈 Course Completion vs Enrollment',
      font: { size: 18 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 10 },
    },
  },
};

const months = [
  { label: 'January', value: '2025-01' },
  { label: 'February', value: '2025-02' },
  { label: 'March', value: '2025-03' },
  { label: 'April', value: '2025-04' },
];

function InstructorReports() {
  const [selectedMonth, setSelectedMonth] = useState('2025-01');
  const [reportData, setReportData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Dynamic mock data (could vary per month if needed)
    const getRandomData = () => [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];

    const data = {
      labels: ['Course A', 'Course B', 'Course C'],
      datasets: [
        {
          label: 'Completion',
          data: getRandomData(),
          backgroundColor: 'rgba(16, 185, 129, 0.6)', // green
        },
        {
          label: 'Enrollment',
          data: getRandomData(),
          backgroundColor: 'rgba(59, 130, 246, 0.6)', // blue
        },
      ],
    };

    setReportData(data);
  }, [selectedMonth]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-800">📊 Monthly Reports</h2>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full overflow-x-auto">
        <Bar options={options} data={reportData} />
      </div>
    </div>
  );
}

export default InstructorReports;
