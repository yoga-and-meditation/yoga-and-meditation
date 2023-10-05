import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = [];

      try {
        for (let i = 1; i <= 9; i++) {
          // This code imports the image file.
          const imagePath = `/gallery/${i}.jpg`;

          // This code creates an object that represents the image.
          importedImages.push({
            id: i,
            src: imagePath, // Use imagePath directly without import statement
            alt: `Image ${i}`,
          });
        }

        // This code sets the state of the component.
        setImagesLoaded(true);
        setGalleryImages(importedImages);
      } catch (error) {
        console.error("Error importing images:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="gallery-container">
      <h2>My Gallery</h2>
      {imagesLoaded && (
        <ResponsiveMasonry
          className="gallery-masonry"
          columnsCountBreakPoints={{
            350: 3,
            750: 3,
            900: 3,
          }}
        >
          <Masonry className="gallery-images-container">
            {galleryImages.map((image) => (
              <img
                className="gallery-image"
                key={image.id}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default Gallery;
