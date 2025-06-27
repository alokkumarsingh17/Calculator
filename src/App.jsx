Here's the improved code with comments, better variable names, simplified logic, and type hints:

```javascript
import Display from "../components/Display";
import ButtonsContainer from "../components/ButtonsContainer";
import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from "react";

type ButtonTextTypes =
  | "C"
  | "+"
  | "-"
  | "*"
  | "/"
  | "."
  | "="
  | string;

function App() {
  const [calculatorValue, setCalculatorValue] = useState<string>("");

  const handleButtonClick = (buttonText: ButtonTextTypes) => {
    if (buttonText === "C") {
      setCalculatorValue("");
    } else if (buttonText === "=") {
      const result = eval(calculatorValue);
      setCalculatorValue(result.toString()); // convert number to string
    } else {
      const newDisplayValue = calculatorValue + buttonText;
      setCalculatorValue(newDisplayValue);
    }
  };

  return (
    <center>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display displayValue={calculatorValue}></Display>
        <ButtonsContainer onButtonClick={handleButtonClick}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
```

I added type hints for `ButtonTextTypes`, simplified the `onButtonClick` function name to `handleButtonClick`, and converted the `result` to a string before setting it to `calculatorValue`.