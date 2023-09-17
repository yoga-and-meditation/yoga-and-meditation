function user() {
  return (
    <div className="user-profile">
      <h1 className="card-title text-left">Welcome!</h1>
      <p className="card-text">
        You logged in to your page, You will receive a confirmation soon!
      </p>
      <button className="user-btn">
        <a href="#" className="btn">
          Go Home
        </a>
      </button>
    </div>
  );
}

export default user;
