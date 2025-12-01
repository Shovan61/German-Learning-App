

import cloudinary from 'cloudinary';
import formidable from 'formidable'; // For handling file uploads

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,      
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET
});

export const config = {
  api: {
    bodyParser: false, // Disabling body parser for file uploads
  },
};

const uploadAudio = (req, res) => {
  const form = new formidable.IncomingForm();

  // Parse the form and handle the file upload
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error during file upload' });
    }

    const audioFile = files.audio[0]; // Access the uploaded file

    try {
      // Upload to Cloudinary
      const result = await cloudinary.v2.uploader.upload(audioFile.filepath, {
        resource_type: 'auto', // Automatically detects file type (audio, image, etc.)
      });

      // Return the secure URL of the uploaded file
      const audioUrl = result.secure_url;

      res.status(200).json({ audioUrl });
    } catch (uploadError) {
      res.status(500).json({ error: 'Error uploading to Cloudinary' });
    }
  });
};

export default uploadAudio;
