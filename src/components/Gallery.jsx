import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// This is the state of the component.
// It contains a boolean flag that indicates whether the images have been loaded,
// and an array of objects that represent the images.
class Gallery extends React.Component {
  state = {
    imagesLoaded: false,
    galleryImages: [],
  };

  // This function is called when the component mounts.
  // It imports the images and sets the state of the component.
  async componentDidMount() {
    const importedImages = [];

    for (let i = 1; i <= 18; i++) {
      // This code imports the image file.
      const imagePath = `../assets/images/gallery/${i}.jpg`;
      const importedImage = await import(imagePath);

      // This code creates an object that represents the image.
      importedImages.push({
        id: i,
        src: importedImage.default,
        alt: `Image ${i}`,
      });
    }

    // This code sets the state of the component.
    setTimeout(() => {
      this.setState({
        imagesLoaded: true,
        galleryImages: importedImages,
      });
    }, 1000);
  }

  // This function renders the component.
  render() {
    const { imagesLoaded, galleryImages } = this.state;

    return (
      <div className="gallery-container">
        <h2>My Gallery</h2>
        {imagesLoaded && (
          // This code renders the ResponsiveMasonry component.
          <ResponsiveMasonry
            className="gallery-masonry"
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              900: 3,
            }}
            loadMore={this.loadMoreImages}
          >
            <Masonry className="gallery-images-container">
              {galleryImages.map((image) => (
                // This code renders an image.
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
  }
}

// This exports the component.
export default Gallery;
