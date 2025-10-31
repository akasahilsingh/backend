import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const updloadOnCloudinary = async (localFilePath) => {
    try { 
        if(!localFilePath) return null
        //upload file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file has heen uploaded successfull
        console.log(response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // this is will remove the locally saved temporary file if upload on cloudinary failed
        return null;
    }
    
}

export default updloadOnCloudinary;

