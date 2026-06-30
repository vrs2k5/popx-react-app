import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "./CreateAccount.css";

function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate("/account", {
      state: { name: form.fullName, email: form.email },
    });
  };

  return (
    <div className="page-padding create-account-screen">
      <h1 className="heading-xl">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          required
          name="fullName"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
        />
        <FormInput
          label="Phone number"
          required
          name="phone"
          placeholder="Marry Doe"
          value={form.phone}
          onChange={handleChange}
        />
        <FormInput
          label="Email address"
          required
          name="email"
          type="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          name="password"
          type="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={handleChange}
        />
        <FormInput
          label="Company name"
          name="company"
          placeholder="Marry Doe"
          value={form.company}
          onChange={handleChange}
        />

        <div className="agency-group">
          <p className="form-label">
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-row">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange}
              />
              <span className="radio-custom" />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange}
              />
              <span className="radio-custom" />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={!isValid}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
