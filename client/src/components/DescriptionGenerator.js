import myImage from '../imgs/img1.png';
import '../stylesheets/DescriptionGenerator.css';
import axios from 'axios';
import React, { useState } from 'react';



const DescriptionGenerator = () => {
  
  const [metadata, setMetadata] = useState({
    material: '',
    brand: '',
    type: '',
    gem: '',
    id: ''
  });
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Save the image URL
      setCover(URL.createObjectURL(file))
    }
  };
  const handleMetadataChange = (e) => {
    setMetadata(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
  };

  const handleClick = () => {
    document.getElementById('fileInput').click(); // Trigger file input click
  };


  const ImageUploadButton = () => {
    return (
      <div>
      {/* The clickable div element for the image */}
      <div
        onClick={handleClick}
        style={{
          ...styles.cover,
          backgroundImage: cover ? `url(${cover})` : `url(${myImage})`, 
          backgroundSize: cover ?  'cover': styles.cover.backgroundSize ,
          backgroundPosition: cover ?  'center' : styles.cover.backgroundPosition,
        }}
      >
        {/* Hidden file input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the file input element
        />
      </div>
    </div>
    );
  }
      

  const Pictures = () => {
    return (
        
        <div className="picturesGrid">
          {/* Empty boxes */}
        
          {/* File input inside the first box */}
          
          {/*<input
            style={styles.cover}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            
          />
          */}
          <ImageUploadButton />
       
          <div style={styles.pictureBox}></div>
          <div style={styles.pictureBox}></div>
          <div style={styles.pictureBox}></div>
          <div style={styles.pictureBox}></div>
          <div style={styles.pictureBox}></div>
        </div>
        
    );
  };

  const handleGenerateDescription = async () => {
    setLoading(true);
    
    const formData = new FormData();
    formData.append('image', image);
    
    const metadata_ = JSON.stringify({
      material: metadata['material'],
      type: metadata['type'],
      id: metadata['id'],
      brand: metadata['brand'],
      gem: metadata['gem']
    });
   
    formData.append('metadata', metadata_);
    try {
      const response = await axios.post('http://localhost:5000/description/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setGeneratedDescription(response.data.description);
    } catch (error) {
      console.error("Error generating description:", error);
    }finally {
      setLoading(false);
    }
  };


  
  return(
    <div style={styles.conteiner}>
      <div style={styles.conteinerFirst}>
      <Pictures />
      <div style={styles.description}>
        <div style={styles.descriptionFields}>
          <input
            type="text"
            name="material"
            placeholder="Material"
            style={styles.inputField}
            value={metadata.material}
            onChange={handleMetadataChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            style={styles.inputField}
            value={metadata.type}
            onChange={handleMetadataChange}
          />
          <input
            type="text"
            name="id"
            placeholder="ID"
            style={styles.inputField}
            value={metadata.id}
            onChange={handleMetadataChange}
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            style={styles.inputField}
            value={metadata.brand}
            onChange={handleMetadataChange}
          />
          <input
            type="text"
            name="gem"
            placeholder="Gem Stone"
            style={styles.inputField}
            value={metadata.gem}
            onChange={handleMetadataChange}
          />
         {loading ? <Spinner /> : (
            <button style={styles.generateButton} onClick={handleGenerateDescription}>
              Generate AI Description
            </button>
          )}
        </div>   
          <textarea
            value={generatedDescription}
            placeholder="Enter a description here..."
            style={styles.textareaField}
            //readOnly
          />
      </div>  
      </div>   
    </div>
  );
};

const Spinner = () => (
  <>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}></div>
    </div>
  </>
);
const styles={
  spinner: {
    border: '4px solid #f3f3f3', 
    borderTop: '4px solid #609CC7', 
    borderRadius: '50%', 
    width: '30px', 
    height: '30px', 
    animation: 'spin 2s linear infinite',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: '0',
    marginTop: '0'
  },
  saveButton: {
    padding: '12px 20px',
    background:' #E3D384',
    color: 'white',
    borderRadius: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '66%',
    marginBottom: '1%',
    margin: '0 auto',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',  
    border: '0px solid #AE249E',
  },
  conteinerFirst:{
    height: '95%',
    width: '100%',
    display: 'flex', // Flexbox to center content
    justifyContent: 'space-between', // Center horizontally
    alignItems: 'flex-start', // Center vertically
    flexDirection: 'row', // Optional: stack elements vertically
  },
  textareaField: {
    padding:'3%',
    height: '51.5%',
    //padding: '10px',
    borderRadius: '15px',
    //border: '1px solid #ccc',
    fontSize: '14px',
    overflow: 'auto',
    resize: 'none', // Prevent resizing
  },
  description: {
    //background: '#2E4662',
    //boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    width: '52%',
    height: '100%', 
    margin: '0.5%',
    paddingTop: '1.5%',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
  }, 
  descriptionFields:{
    //paddingBottom:'5%',
    height: '46%',
    display: 'flex',
    flexDirection: 'column',
    //gap: '10px', // Space between fields
    //marginBottom: '20px', // Space between fields and button
  },
  inputField: {
    //padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '76%',
    height: '10%',
    margin: '0 auto',
    padding: '0 2%', 
    marginBottom: '10px',
  },
  generateButton: {
    padding: '12px 20px',
    backgroundColor: '#4F889E',
    color: 'white',
    borderRadius: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '66%',
    margin: '0 auto',
    marginBottom: '0',
    border: '1px solid #AE249E',
    background: '#FFB4F9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  descriptionText:{},
  conteiner:{
    width: '80%', // 80% width of the parent
    //marginTop: '5%',
    //marginBottom: '5%', 
    margin: '3% auto', // TODO: Do smt about this 
    display: 'flex', // Flexbox to center content
    justifyContent: 'space-between', // Center horizontally
    alignItems: 'flex-start', // Center vertically
    flexDirection: 'column', // Optional: stack elements vertically
    height: '90%', // Optional: take up full viewport height
    borderRadius: '15px',
    background: '#4F889E',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    pictureBox: {
      position: 'relative',
      width: '100%', 
      paddingTop: '100%', // 1:1 aspect ratio
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      background: '#1375A6',
      backgroundImage: `url(${myImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',  
      backgroundSize: '50%',
    },
    cover: {
      border: '8px solid #609CC7',
      position: 'relative', // This allows us to use padding-top for the square
      width: '100%', // Take up full width of the container
      paddingTop: '100%', // This forces the height to be the same as the width (1:1 ratio)
      backgroundColor: '#ccc', // Placeholder background color
      //border: '1px solid #ddd', // Optional: border to define box
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      background: '#1375A6',
      
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',  
      backgroundSize: '50%',
      cursor: 'pointer',
    },
  };

export default DescriptionGenerator;
