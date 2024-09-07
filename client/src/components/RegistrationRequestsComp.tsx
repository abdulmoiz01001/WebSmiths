import { useEffect, useState } from 'react';

// Define the interface for Registration Request data
interface RegistrationRequest {
  _id: string;
  doctorId: {
    _id: string;
    userId: {
      name: string;
    };
  };
  status: 'pending' | 'approved' | 'rejected';
  message?: string;
  appliedAt: string; // ISO Date string
}

const RegistrationRequestsComp = () => {
  const [requests, setRequests] = useState<RegistrationRequest[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Mocking API response with dummy data
        const response = {
          data: [
            {
              _id: '1',
              doctorId: {
                _id: 'doc1',
                userId: {
                  name: 'Dr. John Doe',
                },
              },
              status: 'pending',
              message: 'Awaiting verification',
              appliedAt: new Date().toISOString(),
            },
            {
              _id: '2',
              doctorId: {
                _id: 'doc2',
                userId: {
                  name: 'Dr. Jane Smith',
                },
              },
              status: 'approved',
              message: 'Approved by admin',
              appliedAt: new Date().toISOString(),
            },
            {
              _id: '3',
              doctorId: {
                _id: 'doc3',
                userId: {
                  name: 'Dr. Emily Johnson',
                },
              },
              status: 'rejected',
              message: 'Incomplete application',
              appliedAt: new Date().toISOString(),
            },
          ],
        };
        setRequests(response.data as any);
      } catch (error) {
        console.error('Error fetching registration requests:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Registration Requests</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Doctor Name</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Applied At</th>
              <th className="px-4 py-2 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request._id}>
                <td className="px-4 py-2 border-b">{request.doctorId?.userId?.name || 'N/A'}</td>
                <td className={`px-4 py-2 border-b capitalize ${request.status === 'approved' ? 'text-green-600' : request.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {request.status}
                </td>
                <td className="px-4 py-2 border-b">{new Date(request.appliedAt).toLocaleDateString()}</td>
                <td className="px-4 py-2 border-b">{request.message || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationRequestsComp;
