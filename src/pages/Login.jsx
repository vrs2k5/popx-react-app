import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = form.email.trim() && form.password.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate("/account", { state: { email: form.email } });
  };

  return (
    <div className="page-padding login-screen">
      <h1 className="heading-xl">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="subtext login-subtext">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn-primary login-btn"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
