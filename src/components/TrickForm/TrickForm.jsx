function TrickForm({ onNewTrickChange, onAddTrick, newTrick }) {
  return (
    <form onSubmit={onAddTrick}>
      <select name="stance" value={newTrick.stance} onChange={onNewTrickChange} required>
        <option value="" disabled>Choose Your Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input
        type="text"
        name="name"
        value={newTrick.name}
        onChange={onNewTrickChange}
        placeholder="Name Your Trick"
        required
      />
      <select name="obstacle" value={newTrick.obstacle} onChange={onNewTrickChange} required>
        <option value="" disabled>Choose Your Obstacle</option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input
        type="text"
        name="tutorial"
        value={newTrick.tutorial}
        onChange={onNewTrickChange}
        placeholder="Link To Tutorial"
        required
      />
      <button type="submit">SEND IT</button>
    </form>
  );
}

export default TrickForm;
