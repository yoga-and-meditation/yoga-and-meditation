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


function Gallery() {
  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18
  ]

  return (
    <div className='gallery-container'>
      <h2>My Gallery</h2>
      <div className='gallery-images-container'>
      {galleryImages.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
      </div>
    </div>
  );
}

export default Gallery;
