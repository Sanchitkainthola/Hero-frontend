import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CloudinaryUploadWidget from "../../Components/CloudinaryUploadWidget";

const Addnew = () => {
    const {id}=useParams();
    const [a,setA]=useState({
        title:"",
        tag1:"",
        tag2:"",
        tag3:"",
        image:"",
    });
    const navigate=useNavigate();
    async function getdata()
    {
    const {data}=await axios.get(`http://localhost:8080/Hero/id/${id}`);
    console.log(data);
    setA(data);
    }
    useEffect(()=>{
        getdata();
    },[])
    console.log(id);
  const [showWarning, setShowWarning] = useState(false);

  const handleUploadedImage = (imageUrl, thnl) => {
    setA({ ...a, image: imageUrl })
  };

  const addNewHero = async() => {
    console.log(a);
    const apiURL = `http://localhost:8080/Hero/update/${id}`;
    axios
      .put(apiURL, a)
      .then((response) => {
      navigate('/');
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            Update SuperHero
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label For="Title" className="block text-base mb-2">
              Title
            </label>
            <input
              type="text"
              id="Title"
              value={a?.title}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Title For Superhero"
              onChange={(e) => setA({ ...a, title: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label For="#Tag1" className="block text-base mb-2">
              #Tag1
            </label>
            <input
              type="text"
              id="#Tag1"
              value={a?.tag1}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag1 For Superhero"
              onChange={(e) => setA({ ...a, tag1: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label For="#Tag2" className="block text-base mb-2">
              #Tag2
            </label>
            <input
              type="text"
              id="#Tag2"
              value={a?.tag2}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag2 For Superhero"
              
              onChange={(e) => setA({ ...a, tag2: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label For="#Tag3" className="block text-base mb-2">
              #Tag3
            </label>
            <input
              type="text"
              id="#Tag3"
              value={a?.tag3}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag3 For Superhero"
              onChange={(e) => setA({ ...a, tag3: e.target.value })}
            />
          </div>

          <div className="mt-3 flex flex-col-2 justify-around ">
            <div>
              <label For="Image" className="block text-base mb-2 text font-bold">
                UPLOAD IMAGE
              </label>

              <div className="flex flex-col items-center justify-center">
                <CloudinaryUploadWidget onImageUpload={handleUploadedImage} />
              </div>
            </div>
            <div className="w-20 h-20" >
              <img src={a?.image}   className="w-20 h-20" alt="" />
            </div>
          </div>

          {showWarning && (
            <span className="text-red-600">* All fields are necessary</span>
          )}

          <div className="mt-2">
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() => {
                    addNewHero();
                }}
              >
                UPDATE
              </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Addnew;
