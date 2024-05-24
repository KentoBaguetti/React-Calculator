const CalcButton = ({ value, onClick }) => {
  return (
    <div className="button">
      <button type="button" value={value} onClick={() => onClick(value)}>
        {value}
      </button>
    </div>
  );
};

export default CalcButton;
