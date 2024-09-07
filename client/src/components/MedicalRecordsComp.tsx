import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the interface for Medical Record data
interface MedicalRecord {
  _id: string;
  patientId: {
    _id: string;
    userId: {
      name: string;
    };
  };
  records: {
    date: string; // ISO Date string
    description: string;
    diagnosis?: string;
    treatment?: string;
  }[];
}

const MedicalRecordsComp = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Mocking API response with dummy data
        const response = {
          data: [
            {
              _id: '1',
              patientId: {
                _id: 'pat1',
                userId: {
                  name: 'John Doe',
                },
              },
              records: [
                {
                  date: new Date().toISOString(),
                  description: 'Initial consultation',
                  diagnosis: 'Flu',
                  treatment: 'Rest and hydration',
                },
                {
                  date: new Date().toISOString(),
                  description: 'Follow-up visit',
                  diagnosis: 'Recovered',
                  treatment: 'None',
                },
              ],
            },
            {
              _id: '2',
              patientId: {
                _id: 'pat2',
                userId: {
                  name: 'Jane Smith',
                },
              },
              records: [
                {
                  date: new Date().toISOString(),
                  description: 'Check-up',
                  diagnosis: 'High blood pressure',
                  treatment: 'Medication',
                },
              ],
            },
          ],
        };
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching medical records:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Medical Records</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Patient Name</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Diagnosis</th>
              <th className="px-4 py-2 border-b">Treatment</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record =>
              record.records.map((rec, index) => (
                <tr key={`${record._id}-${index}`}>
                  <td className="px-4 py-2 border-b">{record.patientId?.userId?.name || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{new Date(rec.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border-b">{rec.description}</td>
                  <td className="px-4 py-2 border-b">{rec.diagnosis || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{rec.treatment || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalRecordsComp;
