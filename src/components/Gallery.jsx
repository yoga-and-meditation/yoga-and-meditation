// React and ResponsiveMasonry libraries are imported
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Importing all the images individually
import image1 from '../assets/images/gallery/1.jpg'
import image2 from '../assets/images/gallery/2.jpg'
import image3 from '../assets/images/gallery/3.jpg'
import image4 from '../assets/images/gallery/4.jpg'
import image5 from '../assets/images/gallery/5.jpg'
import image6 from '../assets/images/gallery/6.jpg'
import image7 from '../assets/images/gallery/7.jpg'
import image8 from '../assets/images/gallery/8.jpg'
import image9 from '../assets/images/gallery/9.jpg'
import image10 from '../assets/images/gallery/10.jpg'
import image11 from '../assets/images/gallery/11.jpg'
import image12 from '../assets/images/gallery/12.jpg'
import image13 from '../assets/images/gallery/13.jpg'
import image14 from '../assets/images/gallery/14.jpg'
import image15 from '../assets/images/gallery/15.jpg'
import image16 from '../assets/images/gallery/16.jpg'
import image17 from '../assets/images/gallery/17.jpg'
import image18 from '../assets/images/gallery/18.jpg'

// Creating an array of objects, each containing details of an image
const galleryImages = [
  { id: 1, src: image1, alt: 'Image 1' },
  { id: 2, src: image2, alt: 'Image 2' },
  { id: 3, src: image3, alt: 'Image 3' },
  { id: 4, src: image4, alt: 'Image 4' },
  { id: 5, src: image5, alt: 'Image 5' },
  { id: 6, src: image6, alt: 'Image 6' },
  { id: 7, src: image7, alt: 'Image 7' },
  { id: 8, src: image8, alt: 'Image 8' },
  { id: 9, src: image9, alt: 'Image 9' },
  { id: 10, src: image10, alt: 'Image 10' },
  { id: 11, src: image11, alt: 'Image 11' },
  { id: 12, src: image12, alt: 'Image 12' },
  { id: 13, src: image13, alt: 'Image 13' },
  { id: 14, src: image14, alt: 'Image 14' },
  { id: 15, src: image15, alt: 'Image 15' },
  { id: 16, src: image16, alt: 'Image 16' },
  { id: 17, src: image17, alt: 'Image 17' },
  { id: 18, src: image18, alt: 'Image 18' },
];


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false,
    };
  }

  loadMoreImages = () => {
    // Load more images...
  };

  componentDidMount() {
    // Load the initial images...
    setTimeout(() => {
      this.setState({
        imagesLoaded: true,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="gallery-container">
        <h2>My Gallery</h2>
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
      </div>
    );
  }
}

export default Gallery;

