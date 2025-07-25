const InputBox = ({ placeholder, label, value, name, handleChange }) => {
  return (
    <div>
      <div>{label}</div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export { InputBox };
