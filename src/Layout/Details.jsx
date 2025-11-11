import React, { useContext } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import { Navigate, NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Details = () => {
  const { user } = useContext(AunthContext);
  const details = useLoaderData();
  console.log(details);
  // console.log(details._id, user);
 const navigation = useNavigate();
  if (details == null) {
    return <Navigate to="/" />;
  }

  const userDetails = user.email === details.createdBy;
  console.log(userDetails);

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
        // Only proceed to delete if confirmed
        fetch(`http://localhost:3000/models/${id}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            if (data.message) {
              Swal.fire("Deleted!", "", "success");
              console.log(data.message); 
              navigation("/models");
            } else {
              Swal.fire("Item not found", "", "error");
            }
          })
          .catch(error => {
            Swal.fire("Error", "Something went wrong!", "error");
            console.error('Error:', error);
          });
      } else if (result.isDenied) {
        Swal.fire("Item not deleted", "", "info");
      }
    });
  }

const handlePurchase = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/purchase/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    if (data.message === 'Purchase successful') {
      Swal.fire('Purchased successfully!', '', 'success');
      // setDetails((details) => ({
      //   ...details,
      //   purchased: details.purchased + 1, // Update purchased count locally
      // }));
    // details = {...details,purchased:details.purchased+1};
    } else {
      Swal.fire('Already Purchased', '', 'error');
    }
  } catch (error) {
    console.error(error);
    Swal.fire('Error', 'Something went wrong!', 'error');
  }
};





  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl overflow-hidden my-10 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-stretch">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full p-6 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <img
            src={details.image}
            alt={details.name}
            className="w-72 h-72 object-contain rounded-2xl shadow-lg hover:scale-[1.05] transition-transform duration-300"
          />
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">{details.name}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-semibold text-white/90">Framework:</span>{" "}
              {details.framework}
            </p>
            <p>
              <span className="font-semibold text-white/90">Use Case:</span>{" "}
              {details.useCase}
            </p>
            <p>
              <span className="font-semibold text-white/90">Dataset:</span>{" "}
              {details.dataset}
            </p>
            <p>
              <span className="font-semibold text-white/90">Purchased:</span>{" "}
              {details.purchased} times
            </p>
          </div>

          <p className="text-white/90 text-sm leading-relaxed mt-2 border-t border-white/20 pt-3">
            {details.description}
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <NavLink to="/purchase">
              <button 
              onClick={()=>handlePurchase(details._id)}
              className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-5 py-2 rounded-xl shadow transition">
                🛒 Purchase
              </button>
            </NavLink>

            {userDetails && (
              <div className="space-x-5">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-xl shadow transition">
                  ✏️ Edit
                </button>
                <button
                  onClick={() => deleteData(details._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-xl shadow transition"
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
