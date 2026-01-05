import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: "dswngnvnl",
    api_key: "529346893948471",
    api_secret: "W3xO9U13xTBPfZJKR3kInp84_-I",
  });

  console.log("Cloudinary connected");
};

export default connectCloudinary;
