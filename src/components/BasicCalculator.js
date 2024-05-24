import Calculator from "./Calculator";

const BasicCalculator = () => {
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "/",
    "=",
  ];

  return (
    <div>
      <Calculator numPadVals={buttons} />
    </div>
  );
};

export default BasicCalculator;
