import ReactRating from "react-rating";

const Rating = ({ rating }) => {
  return (
    <ReactRating
      initialRating={rating}
      emptySymbol={<i className="bi bi-star text-yellow-400"></i>}
      fullSymbol={<i className="bi bi-star-fill text-yellow-400"></i>}
    />
  );
};

export default Rating;
