import React, { useEffect, useState } from "react";

const HomeAi = () => {
  const [aiS, setAi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allai")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAi(data);
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl bg-gray-200 w-fit mx-auto p-3 rounded-2xl text-gray-500 font-serif">
        FEATURED RECENT AI TOOLS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {aiS.map((ai) => (
          <div className="max-w-sm mx-auto bg-[#FFFFF0]  text-black my-15  shadow-lg rounded-2xl overflow-hidden border border-zinc-200  hover:scale-[1.02] transition-transform">
            <img
              src={ai.image}
              alt={ai.name}
              className="w-full h-56 object-contain mx-auto  m-4 "
            />
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-indigo-600">{ai.name}</h2>
                <span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded-full">
                  {ai.framework}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Use Case:{" "}
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {ai.useCase}
                </span>
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Dataset:{" "}
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {ai.dataset}
                </span>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3">
                {ai.description}
              </p>
              <div className="flex items-center justify-between mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                <span>By: {ai.createdBy}</span>
                <span>{ai.purchased} Purchases</span>
              </div>
              <p className="text-xs text-zinc-400">
                Added on {new Date(ai.createdAt).toLocaleDateString()}
              </p>
              <button className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-xl transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAi;









































