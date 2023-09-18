import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  console.log(`In user ${params.name}`);

  return (
    <div className=" user-profile  p-5  max-w-xl   ">
      <h1 className="card-title text-left">Welcome!</h1>
      <p className="max-w-xl mt-4">
        Welcome <span className="user">{params.name}</span>, You are now logged in to your page. You will receive a
        confirmation email soon!
      </p>
      <button className="user-btn mt-10 flex items-center">
        <a href="/home" className="btn">
          Go Home
        </a>
      </button>
    </div>
  );
}

export default User;
