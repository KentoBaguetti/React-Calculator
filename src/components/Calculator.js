import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";
import { useEffect, useState } from "react";

const Calculator = ({ numPadVals }) => {
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (button) => {
    if (button === "C") setDisplayValue("");
    else if (button === "=") {
      try {
        // biome-ignore lint/security/noGlobalEval: <explanation>
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue(displayValue + button);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <CalcDisplay displayValue={displayValue} />
      </div>

      <div className="buttons">
        {numPadVals.map((button, index) => (
          <CalcButton
            key={button}
            value={button}
            onClick={() => handleClick(button)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
