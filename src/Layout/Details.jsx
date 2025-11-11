import React, { useContext } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import { Navigate, NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Details = () => {
  const { user } = useContext(AunthContext);
  console.log(user);
  const details = useLoaderData();
  const navigation = useNavigate();

  if (details == null) {
    return <Navigate to="/" />;
  }

  const userDetails = user.email === details.createdBy;

  // Function to delete data
  function deleteData(id) {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${id}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            if (data.message) {
              Swal.fire("Deleted!", "", "success");
              navigation("/models");
            } else {
              Swal.fire("Item not found", "", "error");
            }
          })
          .catch(error => {
            Swal.fire("Error", "Something went wrong!", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Item not deleted", "", "info");
      }
    });
  }

  const handlePurchase = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/purchase?id=${id}&&email=${user?.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (data.message === 'Purchase successful') {
        Swal.fire('Purchased successfully!', '', 'success');
        navigation("/purchase")
      } else {
        Swal.fire('Already Purchased', '', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong!', 'error');
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-3xl shadow-2xl overflow-hidden my-10 max-w-7xl mx-auto p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center md:items-stretch space-y-8 md:space-y-0">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full p-6 flex items-center justify-center bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-lg hover:scale-[1.05] transition-transform duration-300">
          <img
            src={details.image}
            alt={details.name}
            className="w-72 h-72 object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-white text-center md:text-left">{details.name}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
            <p>
              <span className="font-semibold">Framework:</span> {details.framework}
            </p>
            <p>
              <span className="font-semibold">Use Case:</span> {details.useCase}
            </p>
            <p>
              <span className="font-semibold">Dataset:</span> {details.dataset}
            </p>
            <p>
              <span className="font-semibold">Purchased:</span> {details.purchased} times
            </p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-4 border-t border-gray-600 pt-3">
            {details.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-start mt-6">
            <button 
              onClick={() => handlePurchase(details._id)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              🛒 Purchase
            </button>


            <NavLink to="/updataModal">
               <button 
             
              className="bg-pink-400 hover:bg-red-300 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
             Update Modal
            </button>
            </NavLink>

            {userDetails && (
              <div className="flex gap-5">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  ✏️ Edit
                </button>
                <button
                  onClick={() => deleteData(details._id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
