import Navbar from "../components/Navbar";
import CardsLinks from "../components/CardsLinks"; // Importar sin llaves

function AdminLinks() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Manage Links
        </h1>

        {/* Filtros */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              placeholder="Alias"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <select
              name="type of advertising"
              id="type-of-advertising"
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="advertising 1">Advertising 1</option>
              <option value="advertising 2">Advertising 2</option>
              <option value="advertising 3">Advertising 3</option>
            </select>
            <input
              placeholder="Title, Unknown, URL"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardsLinks />
          <CardsLinks />
          <CardsLinks />
          <CardsLinks />
          <CardsLinks />
          <CardsLinks />
          <CardsLinks />
        </div>
      </div>
    </div>
  );
}

export default AdminLinks;