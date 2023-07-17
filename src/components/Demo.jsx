import image from '../assets/images/demosession/pexels-marta.jpg'

function Demo() {
    return (
        <div className='demo'>
            <div className='hero mb-2'>
                <h2 className='mb-2'>Yoga Demo Session</h2>
                <img src={image} alt="Yoga demo session" className='mb-2' />
            </div>
            <div className='info'>
                <div className='info-p mb-2'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis nobis neque id quam laboriosam, saepe, eaque labore repellat ex dignissimos numquam qui. Eligendi blanditiis quas obcaecati officiis recusandae doloremque!</p>
                    <div className='circle'></div>
                </div>
                <div className='book-info'>
                    <h6 className='mb-2'>Availability</h6>
                    <p>Monday - Friday</p>
                    <p>9:00am - 5:00pm</p>
                    <p>Eastern Time</p>
                    <p>Duration 1 hour</p>
                    <button className='mb-2'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Demo
