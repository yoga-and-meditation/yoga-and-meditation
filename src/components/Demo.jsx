import { useInView } from 'react-intersection-observer';

function BookingInfo({ availability, time, timezone, duration }) {
  return (
    <div className="booking-info-container">
      <h6 className="mb-2">Availability</h6>
      <ul>
        {availability.map(day => (
          <li key={day}>{day}</li>
        ))}
        <li>{time}</li>
        <li>{timezone}</li>
        <li>Duration {duration}</li>
      </ul>
      <button className="mb-2" aria-label="Book Yoga Session Now">
        Book Now
      </button>
    </div>
  );
}

function Demo() {
  const availability = ["Monday - Friday"];
  const time = "9:00am - 5:00pm";
  const timezone = "Eastern Time";
  const duration = "1 hour";

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const animationStyle = inView
    ? {
        animation: "fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      }
    : {};

  console.log("InView:", inView); // Check the inView status in the console.

  return (
    <div className="demo">
      <h2 className="mb-2">Yoga Demo Session</h2>
      <div className="demo-container">
        <div className="demo-session-description" ref={inViewRef} style={animationStyle}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
          </p>
          <BookingInfo
            availability={availability}
            time={time}
            timezone={timezone}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
}

export default Demo;
