require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "dismlnnta",
    api_key: "152679562721785",
    api_secret: "9NsCjRFNM7pWit9Uqx3v5JHkVns",
});
console.log(process.env.CLOUDINARY_API_KEY)
module.exports = { cloudinary };