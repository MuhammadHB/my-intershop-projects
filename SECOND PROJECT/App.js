///////// CODE TITLE : Yes, the code provided is correct. It allows users to select an image file, displays a preview of the selected image, resizes the image, and uploads the resized image to a server using Axios. Additionally, it displays the original and resized image sizes below the image preview /////////
import React, { useState } from 'react'; // Importing React and useState hook
import axios from 'axios'; // Importing Axios for making HTTP requests
import { saveAs } from 'file-saver'; // Importing saveAs from file-saver library
import './App.css'; // Importing CSS file

function ImageUploader() {
  // State variables to store image data and sizes
  const [selectedImage, setSelectedImage] = useState(null); // State variable for the selected image
  const [imagePreview, setImagePreview] = useState(null); // State variable for image preview
  const [imageSize, setImageSize] = useState(null); // State variable for original image size
  const [resizedImageSize, setResizedImageSize] = useState(null); // State variable for resized image size

  // Function to handle image selection from file input
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input

    const reader = new FileReader(); // Create a new FileReader object
    reader.onload = () => {
      setImagePreview(reader.result); // Set the image preview to the base64 URL of the selected image
    };
    reader.readAsDataURL(file); // Read the selected file as a data URL

    setSelectedImage(file); // Set the selected image file
    setImageSize(file.size); // Set the size of the selected image
  };

  // Function to resize the selected image
  const resizeImage = (image, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const img = new Image(); // Create a new Image object
      img.onload = () => {
        const canvas = document.createElement('canvas'); // Create a new canvas element
        let width = img.width; // Get the width of the image
        let height = img.height; // Get the height of the image

        // Resize the image while maintaining aspect ratio if necessary
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width; // Set the width of the canvas
        canvas.height = height; // Set the height of the canvas

        const ctx = canvas.getContext('2d'); // Get the 2D drawing context of the canvas
        ctx.drawImage(img, 0, 0, width, height); // Draw the image on the canvas with the resized dimensions

        canvas.toBlob((blob) => {
          resolve({ blob, size: blob.size }); // Resolve the promise with the resized image blob and its size
        }, 'image/jpeg', 0.9); // Convert the canvas to a JPEG blob with 90% quality
      };
      img.src = URL.createObjectURL(image); // Set the source of the image to the selected image
    });
  };

  // Function to handle image upload
  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image'); // Display an alert if no image is selected
      return;
    }

    try {
      let resizedImage = selectedImage;
      if (selectedImage.size > 500 * 1024) { // Check if the size of the selected image exceeds 500KB
        const result = await resizeImage(selectedImage, 500, 500); // Resize the image
        resizedImage = result.blob; // Get the resized image blob
        setResizedImageSize(result.size); // Update the resized image size
      }

      const formData = new FormData(); // Create a new FormData object
      formData.append('image', resizedImage); // Append the resized image to the FormData

      // Send a POST request to upload the image to the server
      const response = await axios.post('http://localhost:8888/api/dbb.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type header for the request
        }
      });

      console.log('Image uploaded successfully:', response.data); // Log the successful upload response
      setResizedImageSize(resizedImage.size); // Update the resized image size

      saveAs(resizedImage, 'resized_image.jpg'); // Save the resized image as a file

      // Save to database
      const dbFormData = new FormData(); // Create a new FormData object for database upload
      dbFormData.append('image', resizedImage); // Append the resized image to the FormData
      const dbResponse = await axios.post('http://localhost:8888/api/DBDconn.php', dbFormData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type header for the request
        }
      });

      console.log('Image saved to database successfully:', dbResponse.data); // Log the successful database save response
    } catch (error) {
      console.error('Error uploading image:', error); // Log any errors that occur during the upload process
    }
  };

  // JSX to render the component
  return (
    <div className="container">
      <div className="input-container">
        <input type="file" onChange={handleImageChange} /> {/* File input for selecting the image */}
      </div>
      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Selected" className="image-preview" /> {/* Image preview */}
        </div>
      )}
      {imageSize && (
        <div className='sizes'>
          <p>Original Images Size : {imageSize / 1024} KB</p> {/* Display the original image size */}
        </div>
      )}
      {resizedImageSize && (
        <div className='sizess'>
          <p>Resized Images Size: {resizedImageSize / 1024} KB</p> {/* Display the resized image size */}
        </div>
      )}
      <button onClick={handleImageUpload} className="upload-button">Upload Image</button> {/* Button to upload the image */}
    </div>
  );
}

export default ImageUploader; // Export the ImageUploader component











///////// CODE TITLE : same code to show the images and save images in database without show the size and resize if the images size more than 500 kb /////////
//import React, { useState } from 'react'; // the code  work to show the images and save the images to the database GGEZ.....!
//import axios from 'axios'; // to make conection between database and the front-end
//import './App.css'; // Import CSS file

//function ImageUploader() {
  //const [selectedImage, setSelectedImage] = useState(null);
 // const [imagePreview, setImagePreview] = useState(null);

  //const handleImageChange = (event) => {
    //const file = event.target.files[0];

    ///////// Show image preview
    //const reader = new FileReader();
    //reader.onload = () => {
      //setImagePreview(reader.result);
    //};
    //reader.readAsDataURL(file);

    //setSelectedImage(file);
  //};

  //const handleImageUpload = async () => {
    //if (!selectedImage) {
      //alert('Please select an image');
      //return;
   // }

    //try {
      //const formData = new FormData();
      //formData.append('image', selectedImage);

      ///////// Send image data to the backend
      //const response = await axios.post('http://localhost:8888/api/DBDconn.php', formData, {
        //headers: {
          //'Content-Type': 'multipart/form-data'
        //}
      //});

      ///////// Handle the response from the backend (e.g., display a success message)
      //console.log('Image uploaded successfully:', response.data);
    //} catch (error) {
      //console.error('Error uploading image:', error);
    //}
  //};

  //return (
    //<div className="container">
      //<div className="input-container">
       // <input type="file" onChange={handleImageChange} />
      //</div>
      //{imagePreview && (
       // <div>
         // <img src={imagePreview} alt="Selected" className="image-preview" />
       // </div>
     // )}
      //<button onClick={handleImageUpload} className="upload-button">Upload Image</button>

    //</div>
 // );
//}

// export default ImageUploader;






