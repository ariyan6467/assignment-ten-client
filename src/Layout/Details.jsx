import React, { useContext } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import { Navigate, NavLink } from 'react-router';

const Details = () => {
     const {details,setDetails} = useContext(AunthContext);
     console.log(details)
     if(details == null){
        return <Navigate to="/"></Navigate>
     }
;    const model = {
    name: "BERT",
    framework: "TensorFlow",
    useCase: "NLP",
    dataset: "Wikipedia",
    description:
      "A transformer-based model for natural language processing tasks like text classification and question answering.",
    image: "https://svgstack.com/media/img/gemini-ai-logo-L3Hj165214.webp",
    purchased: 10,
  };
    return (
          <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl overflow-hidden my-10">
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
             <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-5 py-2 rounded-xl shadow transition">
              🛒 Purchase
            </button>
           </NavLink>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-xl shadow transition">
              ✏️ Edit
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-xl shadow transition">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Details;