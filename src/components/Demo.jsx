function BookingInfo({ availability, time, timezone, duration }) {
  return (
    <div className="booking-info-container">
      <h6 className="mb-2">Availability</h6>
      <ul>
        {availability.map((day) => (
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

  return (
    <div className="demo">
      <h2 className="mb-2 demo-heading">Yoga Demo Session</h2>
      <div className="demo-container">
        <div className="demo-session-description">
          <p>
            This yoga demo session is designed to give you a taste of what a typical yoga class might be like. The session will begin with a short warm-up to prepare your body for the practice. We will then move through a series of basic yoga poses, with modifications offered as needed. The session will end with a short relaxation pose.
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
