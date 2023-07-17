import image from '../assets/images/demosession/pexels-marta.jpg'

function Demo() {
    return (
        <div>
            <div>
                <h2>Yoga Demo Session</h2>
                <img src={image} alt="demo session" />
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ratione magnam iusto, explicabo cum aut. Ducimus eaque, porro commodi vitae officiis totam earum enim est blanditiis ratione? Eos, iure ipsam?</p>
                <div>
                    <h6>Availability</h6>
                    <p>Monday - Friday</p>
                    <p>9:00am - 5:00pm</p>
                    <p>Eastern Time</p>
                    <p>Duration 1 hour</p>
                    <button>Book a Demo Session</button>
                </div>
            </div>
        </div>
    )
}

export default Demo