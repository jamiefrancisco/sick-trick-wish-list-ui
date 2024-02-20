import './TrickCard.css'


function TrickCard({ trick }) {
  return (
    <div className="trick-card">
      <h2>{trick.stance} {trick.name} </h2>
      <h3>Obstacle: {trick.obstacle}</h3>
      <p>Link to Tutorial: <br/>
      <a href={trick.tutorial}> {trick.tutorial} </a>
      </p>
    </div>
  );
}

export default TrickCard;