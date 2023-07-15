import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

class Gallery extends React.Component {
  state = {
    imagesLoaded: false,
    galleryImages: [],
  };

  async componentDidMount() {
    const importedImages = [];

    for (let i = 1; i <= 18; i++) {
      const imagePath = `../assets/images/gallery/${i}.jpg`;
      const importedImage = await import(imagePath);

      importedImages.push({
        id: i,
        src: importedImage.default,
        alt: `Image ${i}`,
      });
    }

    setTimeout(() => {
      this.setState({
        imagesLoaded: true,
        galleryImages: importedImages,
      });
    }, 1000);
  }

  loadMoreImages = () => {
    // Implement the logic to load more images here
  };

  render() {
    const { imagesLoaded, galleryImages } = this.state;

    return (
      <div className="gallery-container">
        <h2>My Gallery</h2>
        {imagesLoaded && (
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

export default Gallery;