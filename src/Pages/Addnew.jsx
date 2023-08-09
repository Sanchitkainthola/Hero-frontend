import { useState } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";
import CloudinaryUploadWidget from "../../Components/CloudinaryUploadWidget";

const Addnew = () => {
  const [title, setTitle] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState(
    "https://ionicframework.com/docs/img/demos/thumbnail.svg"
  );
  const [showWarning, setShowWarning] = useState(false);

  const handleUploadedImage = (imageUrl, thnl) => {
    setImage(imageUrl);
    setThumbnail(thnl);
  };

  const addNewHero = () => {
    const apiURL = "https://herobackend.onrender.com/Hero/";

    const postData = {
      title: title,
      tag1: tag1,
      tag2: tag2,
      tag3: tag3,
      image: image,
    };

    axios
      .post(apiURL, postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   useEffect(() => {
  //     console.log("title=====", title);
  //     console.log("tag1=====", tag1);
  //     console.log("tag2=====", tag2);
  //     console.log("tag3=====", tag3);
  //     console.log("image=====", image);
  //   }, [image, title, tag1, tag2, tag3]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            Add New Picture
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="Title" className="block text-base mb-2">
              Title
            </label>
            <input
              type="text"
              id="Title"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Title For Picture"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="#Tag1" className="block text-base mb-2">
              #Tag1
            </label>
            <input
              type="text"
              id="#Tag1"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag1 For Picture"
              onChange={(e) => {
                setTag1(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="#Tag2" className="block text-base mb-2">
              #Tag2
            </label>
            <input
              type="text"
              id="#Tag2"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag2 For Picture"
              onChange={(e) => {
                setTag2(e.target.value);
              }}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="#Tag3" className="block text-base mb-2">
              #Tag3
            </label>
            <input
              type="text"
              id="#Tag3"
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter #Tag3 For Picture"
              onChange={(e) => {
                setTag3(e.target.value);
              }}
            />
          </div>

          <div className="mt-3 flex flex-col-2 justify-around ">
            <div>
              <label htmlFor="Image" className="block text-base mb-2 text font-bold">
                UPLOAD IMAGE
              </label>

              <div className="flex flex-col items-center justify-center">
                <CloudinaryUploadWidget onImageUpload={handleUploadedImage} />
              </div>
            </div>
            <div className="w-20 h-20" >
              {/* {" "} */}
              <img src={thumbnail}  className="w-20 h-20" alt="" />
              {/* {" "} */}
            </div>
          </div>

          {showWarning && (
            <span className="text-red-600">* All fields are necessary</span>
          )}

          <div className="mt-2">
            <Link
              to={
                title != "" &&
                tag1 != "" &&
                tag2 != "" &&
                tag3 != "" &&
                image != ""
                  ? "/Home"
                  : "/Addnew"
              }
            >
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() => {
                  if (
                    title != "" &&
                    tag1 != "" &&
                    tag2 != "" &&
                    tag3 != "" &&
                    image != ""
                  )
                    addNewHero();
                  else setShowWarning(true);
                }}
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addnew;
