import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

  cloudinary.config({
  cloud_name: "dswngnvnl",
  api_key: "529346893948471",
  api_secret: "W3xO9U13xTBPfZJKR3kInp84_-I",
});


}
console.log(
  "CLOUDINARY CHECK:",
  process.env.CLOUDINARY_NAME,
  process.env.CLOUDINARY_API_KEY ? "KEY_OK" : "KEY_MISSING",
  process.env.CLOUDINARY_API_SECRET ? "SECRET_OK" : "SECRET_MISSING"
);

export default connectCloudinary;