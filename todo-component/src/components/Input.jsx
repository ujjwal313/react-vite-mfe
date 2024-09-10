const Input = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
