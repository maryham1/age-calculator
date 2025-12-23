import { useState } from "react";

export default function AgeInput({ onCalcAge }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();

  const exactDay = Math.abs(todayDay - day);
  const exactMonth = Math.abs(todayMonth - month);
  const exactYear = Math.abs(todayYear - year);

  const validDay = day > 31;
  const validMonth = month > 12;
  const validYear = year > todayYear;

  const newAge = {
    day: exactDay,
    month: exactMonth,
    year: exactYear,
    id: new Date(),
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!day || !month || !year) {
      setError("This field is required");
      return;
    }
    if (validDay || validMonth || validYear) return;
    onCalcAge(newAge);

    setDay("");
    setMonth("");
    setYear("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input-values">
        <div>
          <label
            for="day"
            style={{ fontSize: "20px" }}
            className={validDay || error ? "text-error-color" : ""}
          >
            Day
          </label>
          <input
            className={
              validDay || error ? "error-input-color" : "form-input-no-error"
            }
            type="text"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
          <p
            style={{ marginTop: "2px" }}
            className={validDay || error ? "text-error-color" : ""}
          >
            {error ? `${error}` : validDay ? "Input valid day" : null}
          </p>
        </div>

        <div>
          <label
            for="month"
            style={{ fontSize: "20px" }}
            className={validMonth || error ? "text-error-color" : ""}
          >
            Month
          </label>
          <input
            className={
              validMonth || error ? "error-input-color" : "form-input-no-error"
            }
            type="text"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
          <p
            style={{ marginTop: "2px" }}
            className={validMonth || error ? "text-error-color" : ""}
          >
            {error ? `${error}` : validMonth ? "enter valid month" : null}
          </p>
        </div>

        <div>
          <label
            for="year"
            style={{ fontSize: "20px" }}
            className={validYear || error ? "text-error-color" : ""}
          >
            Year
          </label>
          <input
            className={
              validYear || error ? "error-input-color" : "form-input-no-error"
            }
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <p
            style={{ marginTop: "2px" }}
            className={validYear || error ? "text-error-color" : ""}
          >
            {error ? `${error}` : validYear ? "enter valid date" : null}
          </p>
        </div>
      </div>
      <div className="button-div">
        <button>
          <img src="\images\icon-arrow.svg" alt="arrow" />
        </button>
      </div>
    </form>
  );
}
