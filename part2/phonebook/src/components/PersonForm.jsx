const PersonForm = ({ newPerson, handleSubmit, handleFormChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input value={newPerson.name} name="name" onChange={handleFormChange} />
      </div>
      <div>
        number:
        <input
          value={newPerson.number}
          name="number"
          onChange={handleFormChange}
        />
      </div>
      <div>
        <button className="addBtn" type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
