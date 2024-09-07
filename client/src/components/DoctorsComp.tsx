import { useEffect, useState } from 'react';

interface Doctor {
  _id: string;
  userId: {
    name: string;
  };
  specialization: string;
  contactInfo: {
    phone: string;
  };
  clinicName?: string;
  appointments: string[]; // Assuming appointments is an array of strings
}

const DoctorsComp = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Dummy data for testing
    const dummyDoctors: Doctor[] = [
      {
        _id: '1',
        userId: { name: 'Dr. John Doe' },
        specialization: 'Cardiology',
        contactInfo: { phone: '123-456-7890' },
        clinicName: 'Heart Care Clinic',
        appointments: ['appointment1', 'appointment2', 'appointment3']
      },
      {
        _id: '2',
        userId: { name: 'Dr. Jane Smith' },
        specialization: 'Dermatology',
        contactInfo: { phone: '987-654-3210' },
        clinicName: 'Skin Clinic',
        appointments: ['appointment1', 'appointment2']
      },
      {
        _id: '3',
        userId: { name: 'Dr. Emily Brown' },
        specialization: 'Neurology',
        contactInfo: { phone: '456-789-1230' },
        clinicName: 'Brain Health Clinic',
        appointments: []
      }
    ];

    setDoctors(dummyDoctors);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Doctors List</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Doctor Name</th>
              <th className="px-4 py-2 border-b">Specialization</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Clinic Name</th>
              <th className="px-4 py-2 border-b">Number of Appointments</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor._id}>
                <td className="px-4 py-2 border-b">{doctor.userId?.name || 'No Name Available'}</td>
                <td className="px-4 py-2 border-b">{doctor.specialization}</td>
                <td className="px-4 py-2 border-b">{doctor.contactInfo.phone}</td>
                <td className="px-4 py-2 border-b">{doctor.clinicName || 'N/A'}</td>
                <td className="px-4 py-2 border-b">{doctor.appointments.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsComp;
