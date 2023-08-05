import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  const DeleteHero = (id) => {
    const Deleteurl = `http://localhost:8080/Hero/delete/${id}`;
    axios
      .delete(Deleteurl)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8080/Hero`);
    const data = await res.json();

    // console.log(data);

    // if (data && data) {
    setData(data);
        console.log(data);
    // }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-start sticky top-0 z-50 bg-slate-400 mb-5">
        <h1 className="text-center capitalize text-4xl mt-8">
          Super Heroes
        </h1>
        <hr className="w-1/5 mx-auto mt-2" />
        
        <Link to="/Addnew" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mb-3 rounded "> ADD NEW SUPERHERO </Link>
         
        </div>

        {/* <!-- Parent Div --> */}
        <div
          className="
        grid grid-cols-1 
        lg:grid-cols-3 lg:gap-3 
        justify-items-center 
        mt-20 scroll-smooth"
        >
          {data.map((hero, index) => {
            return (
              <div className="py-10" key={index}>
                <div className="rounded overflow-hidden shadow-lg max-w-sm ">
                  <a href={hero?.image} target="_blank">
                    <img
                      src={hero?.image}
                      alt="iron-man"
                      className="w-full hover:scale-110"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{hero?.title}</div>
                    <p className="text-gray-600">
                      Click the image to see HD wallpaper
                    </p>
                  </div>
                  <div className="grid grid-flow-col gap-5 pb-2 px-6">
                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2 text-sm">
                      {"#"+hero?.tag1}
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2 text-sm">
                      {"#"+hero?.tag2}
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2 text-sm">
                      {"#"+hero?.tag3}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button
                    className="bg-red-500 text-white rounded-full mt-2 font-bold py-2 px-4 hover:bg-red-700 "
                    onClick={() => {
                      DeleteHero(hero?._id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/UpdateHero/${hero?._id}`}
                    className="bg-blue-500 text-white rounded-full mt-2 font-bold py-2 px-4 hover:bg-red-700 "
                   >
                    Update
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
