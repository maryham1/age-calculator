import { useState } from "react";
import DisplayAge from "./DisplayAge";
import AgeInput from "./AgeInput";

const defaultAges = { day: "- -", month: "- -", year: "- -" };
function App() {
  const [calcAge, setCalcAge] = useState(defaultAges);

  function handleCalcAge(inputItem) {
    setCalcAge(inputItem);
  }

  return (
    <div className="calculator-body">
      <AgeInput onCalcAge={handleCalcAge} />
      <DisplayAge ages={defaultAges} calcAge={calcAge} />
    </div>
  );
}
export default App;
