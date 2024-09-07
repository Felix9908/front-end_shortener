function CardsLinks() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <p className="text-lg font-medium">Texto del acortador</p>
            </div>
            <div className="flex space-x-2 mb-4">
              <input className="p-2 border border-gray-300 rounded-lg flex-grow" />
              <button className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600">
                Paste
              </button>
            </div>
            <div className="mb-4">
              <h2 className="text-green-500 font-semibold">Active</h2>
              <h3 className="text-gray-600">Visits: --</h3>
              <h3 className="text-gray-600">Earnings: --</h3>
            </div>
            <div className="flex justify-between space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                Edit
              </button>
              <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">
                Disguise
              </button>
              <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                Approve
              </button>
            </div>
          </div>
  );
}

export default CardsLinks;
