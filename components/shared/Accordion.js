const Accordion = ({ name, id, children }) => {
  return (
    <div className="accordion accordion-flush focus:outline-none">
      <div className="accordion-item">
        <h2 className="accordion-header text-indigo-700">
          <button
            className="accordion-button collapsed bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
          >
            <span className="text-indigo-700 text-xl">{name}</span>
          </button>
        </h2>
        <div id={id} className="accordion-collapse collapse" aria-labelledby="flush-headingOne">
          <div className="accordion-body text-gray-500">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
