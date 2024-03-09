import React from "react";
import house5 from "../assets/img/houses/house5.png";
import house6 from "../assets/img/houses/house6.png";
import a4 from "../assets/img/apartments/a4.png";
import Sidebar from "./Dashboard";


function AdminProperty() {
  return (
    <div className="flex h-screen overflow-hidden">
   <Sidebar />



      {/* Main Content Area */}
      <main className="w-full px-4 overflow-y-auto">
        <div className="container mx-auto mt-8">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-0 rounded focus:outline-none focus:shadow-outline">
              <i className="fas fa-edit mr-2"></i>Add New
            </button>
          </div>
          <h5 className="text-lg font-bold">Properties</h5>
        </div>
        <div className="container mx-auto mt-4">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400">#</th>
                <th className="border border-gray-400">PropertyTypes</th>
                <th className="border border-gray-400">Address</th>
                <th className="border border-gray-400">Bedroom</th>
                <th className="border border-gray-400">Bathroom</th>
                <th className="border border-gray-400">Area</th>
                <th className="border border-gray-400">Price</th>
                <th className="border border-gray-400">Images</th>
                <th className="border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400">1</td>
                <td className="border border-gray-400">House</td>
                <td className="border border-gray-400">Gondal road,Rajkot</td>
                <td className="border border-gray-400">6</td>
                <td className="border border-gray-400">3</td>
                <td className="border border-gray-400">4200 sq ft</td>
                <td className="border border-gray-400">19500000</td>
                <td className="border border-gray-400">
                  <img src={house5} alt="Login Icon" className="w-6 h-6" />
                </td>
                <td className="border border-gray-400 flex items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Additional rows go here */}
              <tr>
                <td className="border border-gray-400">2</td>
                <td className="border border-gray-400">Appartment</td>
                <td className="border border-gray-400">Laxminagar,Surat-Gujarat</td>
                <td className="border border-gray-400">8</td>
                <td className="border border-gray-400">6</td>
                <td className="border border-gray-400">8200 sq ft</td>
                <td className="border border-gray-400">20700000</td>
                <td className="border border-gray-400">
                  <img src={a4} alt="Login Icon" className="w-6 h-6" />
                </td>
                <td className="border border-gray-400 flex items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400">3</td>
                <td className="border border-gray-400">House</td>
                <td className="border border-gray-400"> Bhawnagar,Rajkot-Gujarat</td>
                <td className="border border-gray-400">7</td>
                <td className="border border-gray-400">4</td>
                <td className="border border-gray-400">4600 sq ft</td>
                <td className="border border-gray-400">1950000</td>
                <td className="border border-gray-400">
                  <img src={house6} alt="Login Icon" className="w-6 h-6" />
                </td>
                <td className="border border-gray-400 flex items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                    Delete
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminProperty;