import DisplayObjs from "./DisplayObjs";

export default function DisplayAge({ calcAge }) {
  return (
    <div>
      <DisplayObjs age={calcAge} key={calcAge.day} />
    </div>
  );
}
