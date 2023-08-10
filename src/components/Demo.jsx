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
      <button className="mb-2" aria-label="Book Yoga Session Now">Book Now</button>
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
      <h2 className="mb-2">Yoga Demo Session</h2>
      <div className="demo-container">

        <div className="demo-session-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
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
