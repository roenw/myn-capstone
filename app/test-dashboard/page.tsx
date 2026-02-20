'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestDashboard() {
  const [sampleIds, setSampleIds] = useState({
    patients: [] as any[],
    practitioners: [] as any[],
    bookings: [] as any[]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSampleData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch patients
      console.log('Fetching patients...');
      const patientsRes = await fetch('/api/patients');
      if (!patientsRes.ok) {
        throw new Error(`Failed to fetch patients: ${patientsRes.status} ${patientsRes.statusText}`);
      }
      const patientsText = await patientsRes.text();
      const patients = JSON.parse(patientsText);
      console.log('patients:', patients);
      
      // Fetch practitioners
      console.log('Fetching practitioners...');
      const practitionersRes = await fetch('/api/practitioners');
      if (!practitionersRes.ok) {
        throw new Error(`Failed to fetch practitioners: ${practitionersRes.status}`);
      }
      const practitionersText = await practitionersRes.text();
      const practitioners = JSON.parse(practitionersText);
      console.log('Practitioners:', practitioners);
      
      // Fetch all bookings
      console.log('Fetching bookings...');
      const bookingsRes = await fetch('/api/bookings');
      if (!bookingsRes.ok) {
        throw new Error(`Failed to fetch bookings: ${bookingsRes.status}`);
      }
      const bookingsText = await bookingsRes.text();
      const bookings = JSON.parse(bookingsText);
      console.log('Bookings:', bookings);
      
      setSampleIds({ patients, practitioners, bookings });
    } catch (error) {
      console.error('Error fetching sample data:', error);
      setError(error instanceof Error ? error.message : 'Failed to load sample data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Test Dashboard</h1>

        <button
          onClick={fetchSampleData}
          disabled={loading}
          className="mb-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading' : 'Load Sample Data'}
        </button>

        {sampleIds.patients.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Client Calendar Tests */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Patient Calendar Views</h2>
              <div className="space-y-3">
                {sampleIds.patients.slice(0, 3).map((patient) => (
                  <Link
                    key={patient._id}
                    href={`/test-dashboard/patient/${patient._id}`}
                    className="block p-4 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
                  >
                    <p className="font-semibold text-green-900">{patient.name}</p>
                    <p className="text-sm text-green-700">{patient.email}</p>
                    <p className="text-xs text-gray-600 mt-1">ID: {patient._id}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Practitioner Schedule Tests */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Practitioner Schedules</h2>
              <div className="space-y-3">
                {sampleIds.practitioners.map((practitioner) => (
                  <Link
                    key={practitioner._id}
                    href={`/test-dashboard/practitioner/${practitioner._id}`}
                    className="block p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition"
                  >
                    <p className="font-semibold text-blue-900">{practitioner.name}</p>
                    <p className="text-sm text-blue-700">{practitioner.email}</p>
                    <p className="text-xs text-gray-600 mt-1">ID: {practitioner._id}</p>
                  </Link>
                ))}
              </div>
            </div>


            {/* Bookings List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {sampleIds.bookings.slice(0, 10).map((booking) => (
                  <div
                    key={booking._id}
                    className="p-3 bg-gray-50 border border-gray-200 rounded text-sm"
                  >
                    <p className="font-semibold">
                      {new Date(booking.startTime).toLocaleString()}
                    </p>
                    <p className="text-gray-600">
                      Status: <span className={booking.status === 'confirmed' ? 'text-green-600' : 'text-red-600'}>{booking.status}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!sampleIds.patients.length && !loading && !error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-800">Click "Load Sample Data" to view test options</p>
          </div>
        )}
      </div>
    </div>
  );
}
