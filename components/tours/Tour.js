import Link from "next/link";
import Rating from "../shared/Rating";

const Tour = ({ tour }) => {
  return (
    <div className="card h-96 md:mx-2">
      <Link href={`/tour/${tour.id}`}>
        <a>
          <div className="relative w-fill">
            <img src={tour.img} alt={tour.name} className="h-64 w-100" style={{ objectFit: "cover" }} />
            <p className="bg-black absolute inset-0 bg-opacity-30"></p>
          </div>
          <span className="absolute right-4 top-4">
            <i className="bi bi-heart text-2xl text-white"></i>
          </span>
          <div className="card-body">
            <div className="card-content">
              <h2 className="text-2xl text-indigo-700">{tour.name}</h2>
              <Rating rating={tour.rating} />
              <p className="mt-2">
                <span className="text-gray-500">from</span> {tour.price}LE
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Tour;
