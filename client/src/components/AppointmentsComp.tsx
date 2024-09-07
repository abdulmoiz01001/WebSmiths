import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the interface for Appointment data
interface Appointment {
  _id: string;
  patientId: {
    _id: string;
    userId: {
      name: string;
    };
  };
  doctorId: {
    _id: string;
    userId: {
      name: string;
    };
  };
  dateTime: string; // ISO Date string
  status: 'scheduled' | 'completed' | 'cancelled';
  payment: {
    amount: number;
    currency: string;
    method: 'credit card' | 'cash' | 'insurance' | 'debit card' | 'mobile payment';
    status: 'pending' | 'paid' | 'failed';
    transactionId?: string;
    paymentDate?: string; // ISO Date string
    paymentGateway: 'Stripe' | 'PayPal' | 'Cash' | 'Insurance';
  };
}

const AppointmentsComp = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Dummy data for testing purposes (You can replace this with an API call)
    const dummyAppointments: Appointment[] = [
      {
        _id: '1',
        patientId: {
          _id: 'patient1',
          userId: {
            name: 'John Doe',
          },
        },
        doctorId: {
          _id: 'doctor1',
          userId: {
            name: 'Dr. Smith',
          },
        },
        dateTime: '2024-09-01T10:00:00Z',
        status: 'scheduled',
        payment: {
          amount: 150,
          currency: 'USD',
          method: 'credit card',
          status: 'paid',
          paymentGateway: 'Stripe',
        },
      },
      {
        _id: '2',
        patientId: {
          _id: 'patient2',
          userId: {
            name: 'Jane Smith',
          },
        },
        doctorId: {
          _id: 'doctor2',
          userId: {
            name: 'Dr. Adams',
          },
        },
        dateTime: '2024-09-02T11:00:00Z',
        status: 'completed',
        payment: {
          amount: 200,
          currency: 'USD',
          method: 'cash',
          status: 'paid',
          paymentGateway: 'Cash',
        },
      },
    ];

    setAppointments(dummyAppointments); // Set dummy data for testing
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Appointments List</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Patient Name</th>
              <th className="px-4 py-2 border-b">Doctor Name</th>
              <th className="px-4 py-2 border-b">Date & Time</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Payment Method</th>
              <th className="px-4 py-2 border-b">Amount</th>
              <th className="px-4 py-2 border-b">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td className="px-4 py-2 border-b">{appointment.patientId?.userId?.name || 'N/A'}</td>
                <td className="px-4 py-2 border-b">{appointment.doctorId?.userId?.name || 'N/A'}</td>
                <td className="px-4 py-2 border-b">{new Date(appointment.dateTime).toLocaleString()}</td>
                <td className="px-4 py-2 border-b capitalize">{appointment.status}</td>
                <td className="px-4 py-2 border-b capitalize">{appointment.payment.method}</td>
                <td className="px-4 py-2 border-b">
                  {appointment.payment.amount} {appointment.payment.currency}
                </td>
                <td className={`px-4 py-2 border-b ${appointment.payment.status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                  {appointment.payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsComp;
