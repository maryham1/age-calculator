export default function DisplayObjs({ age }) {
  return (
    <div className="display-result">
      <h1>
        <span>{age.year} </span>years
      </h1>
      <h1>
        <span>{age.month} </span> months
      </h1>
      <h1>
        <span>{age.day}</span> days
      </h1>
    </div>
  );
}
