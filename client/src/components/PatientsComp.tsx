import { useEffect, useState } from 'react';

// Define the interface for Patient data
interface Patient {
  _id: string;
  userId: {
    name: string;
  };
  dob: string; // Date as string (ISO format)
  gender: 'male' | 'female' | 'other';
  contactInfo: {
    phone: string;
    address?: string;
  };
  medicalRecords: string[]; // Array of medical record IDs
  appointments: string[];   // Array of appointment IDs
}

const PatientsComp = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // Dummy data for testing purposes (You can replace this with an API call)
    const dummyPatients: Patient[] = [
      {
        _id: '1',
        userId: { name: 'John Doe' },
        dob: '1990-01-01T00:00:00.000Z',
        gender: 'male',
        contactInfo: { phone: '123-456-7890', address: '123 Main St' },
        medicalRecords: ['record1', 'record2'],
        appointments: ['appointment1', 'appointment2']
      },
      {
        _id: '2',
        userId: { name: 'Jane Smith' },
        dob: '1985-05-12T00:00:00.000Z',
        gender: 'female',
        contactInfo: { phone: '987-654-3210', address: '456 Park Ave' },
        medicalRecords: ['record3'],
        appointments: ['appointment3']
      }
    ];

    setPatients(dummyPatients); // Set the dummy data for testing
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Patients List</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Patient Name</th>
              <th className="px-4 py-2 border-b">DOB</th>
              <th className="px-4 py-2 border-b">Gender</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Number of Medical Records</th>
              <th className="px-4 py-2 border-b">Number of Appointments</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient._id}>
                <td className="px-4 py-2 border-b">{patient.userId?.name || 'No Name Available'}</td>
                <td className="px-4 py-2 border-b">{new Date(patient.dob).toLocaleDateString()}</td>
                <td className="px-4 py-2 border-b capitalize">{patient.gender}</td>
                <td className="px-4 py-2 border-b">{patient.contactInfo.phone}</td>
                <td className="px-4 py-2 border-b">{patient.medicalRecords.length}</td>
                <td className="px-4 py-2 border-b">{patient.appointments.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsComp;
