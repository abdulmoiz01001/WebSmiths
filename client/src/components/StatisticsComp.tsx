
const StatisticsComp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      
      {/* Doctors Block */}
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Doctors</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-500">Total:</p>
          <p className="text-2xl font-bold text-gray-800">25</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-gray-500">Pending:</p>
          <p className="text-sm font-bold text-yellow-500">3</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-gray-500">Done:</p>
          <p className="text-sm font-bold text-green-500">22</p>
        </div>
      </div>

      {/* Patients Block */}
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Patients</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-500">Total:</p>
          <p className="text-2xl font-bold text-gray-800">120</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-gray-500">Pending:</p>
          <p className="text-sm font-bold text-yellow-500">5</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-gray-500">Done:</p>
          <p className="text-sm font-bold text-green-500">115</p>
        </div>
      </div>

      {/* Appointments Block */}
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Appointments</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-500">Total:</p>
          <p className="text-2xl font-bold text-gray-800">45</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-gray-500">Pending:</p>
          <p className="text-sm font-bold text-yellow-500">10</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-gray-500">Done:</p>
          <p className="text-sm font-bold text-green-500">35</p>
        </div>
      </div>

      {/* Medical Reports Block */}
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Medical Reports</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-500">Total:</p>
          <p className="text-2xl font-bold text-gray-800">60</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-gray-500">Pending:</p>
          <p className="text-sm font-bold text-yellow-500">8</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-gray-500">Done:</p>
          <p className="text-sm font-bold text-green-500">52</p>
        </div>
      </div>

    </div>
  );
};

export default StatisticsComp;
