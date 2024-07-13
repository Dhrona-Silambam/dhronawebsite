import React,{useEffect,useState} from "react";
const ImageShower = () => {
    const [images, setImages] = useState(null);
  
    useEffect(() => {
      // Fetch all image data from the backend when the component mounts
      fetchImages();
    }, []); // Empty dependency array ensures that the effect runs only once
  
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  


    return (
      <div>
        <h1>Images</h1>
        <div className="image-container">
          {images ? (
            images.length > 0 ? (
              images.map((image, index) => (
                <div key={index}>
                    <img src={require(`../../../components/imageshowers/${image.filename}`)}/>
                  <p>Name: {image.name}</p>
                  <p>College: {image.college}</p>
                  <p>Type: {image.type}</p>
                  <p>Department: {image.department}</p>
                  <p>Batch: {image.batch}</p>
                </div>
              ))
            ) : (
              <p>No images found</p>
            )
          ) : (
            <p>Loading...</p>
          )}
          
        </div>
      </div>
    );
  };
  

  export default ImageShower;