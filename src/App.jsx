import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "K7ybUmXM76Ebl8Lqvopn0AvC9Bt24dX7UCuNT58nSrdaxbJDETKhzrqc";

const options = {
  headers: { Authorization: API_KEY },
};

const App = () => {
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("people");   
  
  const fetchApi = async (pageNumber = 1, searchQuery = query) => {
    let { data } = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchQuery}&page=${pageNumber}&per_page=12`,
      options
    );
    setImageData((prev) =>
      pageNumber === 1 ? data.photos : [...prev, ...data.photos]
    );
  };
  useEffect(() => {
    fetchApi(page);
  }, [page]);

  const handleSearch = () => {
    setPage(1);         
    fetchApi(1, query);   
  };
  const loadMoreImages = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="min-h-screen bg-amber-100">
      <h1 className="text-center text-5xl text-indigo-600 font-bold">
        📷 Image Gallery Nature
      </h1>
      <div className="text-center mt-8">
        <input
          type="text"
          placeholder="Image search here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}  
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
          className="p-3 bg-white rounded-l-2xl focus:outline-indigo-600"
        />

        <button
          onClick={handleSearch}   
          className="p-3 rounded-r-2xl text-white font-semibold
          bg-linear-to-r from-fuchsia-600 via-purple-600 to-indigo-600
          hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]
          hover:scale-110 transition-all duration-300"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 p-8">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="h-40 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img src={item.src.medium} alt="img" className="w-full h-full" />
          </div>
        ))}

        <div className="col-span-4 flex justify-center mt-5">
          <button
            onClick={loadMoreImages}
            className="py-2 px-16 bg-rose-800 rounded-2xl text-white"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
