import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="heading-xl">Welcome to PopX</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="welcome-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
