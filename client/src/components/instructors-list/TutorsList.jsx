import React, { useState } from 'react';

const tutors = [
  {
    name: 'Anita Sharma',
    qualification: 'M.Sc., B.Ed.',
    rating: 4.8,
    about: 'Anita has 10+ years of teaching Physics and makes learning interactive and fun.',
    speciality: 'Physics',
  },
  {
    name: 'Rajesh Kumar',
    qualification: 'M.A. English, NET',
    rating: 4.6,
    about: 'Rajesh focuses on improving spoken and written English through modern methods.',
    speciality: 'English Literature',
  },
  {
    name: 'Divya Suresh',
    qualification: 'MCA, PGDCA',
    rating: 4.9,
    about: 'Divya is a coding enthusiast and has mentored over 300 students in web development.',
    speciality: 'Web Development',
  },
];

const TutorCard = ({ tutor }) => (
  <div className="bg-white shadow-md rounded-2xl p-5 m-4 w-full md:w-[300px] hover:shadow-xl transition duration-300">
    <h2 className="text-xl font-bold text-gray-800">{tutor.name}</h2>
    <p className="text-sm text-gray-600">{tutor.qualification}</p>
    <div className="text-yellow-500 font-semibold mt-2">⭐ {tutor.rating}</div>
    <p className="mt-2 text-gray-700 text-sm">{tutor.about}</p>
    <div className="mt-3 text-sm text-blue-600 font-medium">Speciality: {tutor.speciality}</div>
  </div>
);

const TutorsList = () => {
  const [search, setSearch] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  const specialities = [...new Set(tutors.map((tutor) => tutor.speciality))];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      `${tutor.name} ${tutor.qualification} ${tutor.speciality}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSpeciality =
      selectedSpeciality === '' || tutor.speciality === selectedSpeciality;

    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Tutors</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, qualification or speciality..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[300px] px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedSpeciality}
          onChange={(e) => setSelectedSpeciality(e.target.value)}
          className="w-full md:w-[200px] px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Specialities</option>
          {specialities.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor, index) => <TutorCard key={index} tutor={tutor} />)
        ) : (
          <p className="text-gray-600 text-center">No tutors found.</p>
        )}
      </div>
    </div>
  );
};

export default TutorsList;
