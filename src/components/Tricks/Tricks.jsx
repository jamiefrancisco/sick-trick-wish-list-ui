import TrickCard from "../TrickCard/TrickCard";
import './Tricks.css';

function Tricks({ tricks }) {
  return (
    <div className="tricks-container">
      {tricks.map(trick => (
        <TrickCard key={trick.id} trick={trick} />
      ))}
    </div>
  );
}

export default Tricks;

