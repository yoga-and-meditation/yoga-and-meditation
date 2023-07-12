function Feedback() {
  return (
    <div className="feedback">
      <h2>Customer Feedback</h2>
      <div className="feedback-card">
        <div className="feedback-rating">
          <span className="rating">4.5</span>
          <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
        <p className="feedback-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vestibulum condimentum mauris nec ultricies.
        </p>
        <p className="feedback-author">- John Doe</p>
      </div>
    </div>
  );
}

export default Feedback;
