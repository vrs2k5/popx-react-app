function FormInput({ label, required, ...props }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input className="form-input" {...props} />
    </div>
  );
}

export default FormInput;
