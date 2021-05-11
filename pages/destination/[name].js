import Link from "next/link";
import Rating from "../../components/shared/Rating";
import destinations from "../../public/assets/data/destinations.json";
import tours from "../../public/assets/data/tours.json";

const DestinationCatalog = ({ destination, destinationTours }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${destination.img})` }} className="bg-fixed bg-cover bg-center h-72 ">
        {/* <img src={destination.img} alt={destination.name} className="w-100 h-72 object-cover" /> */}
      </div>
      <div className="container" style={{ minHeight: "62vh" }}>
        <div className="px-2">
          <h1 className="text-3xl my-3 font-bold uppercase text-indigo-600">
            Explore the best of {destination.name} Tours
          </h1>
          <p className="text-sm text-muted mb-1">{destinationTours.length} results</p>
        </div>
        <div className="row container m-0 p-0">
          {destinationTours.map((tour) => (
            <div className="col-md-4 px-2 mb-3 relative" key={tour.id}>
              <div className="card rounded-lg">
                <div className="card-body flex space-x-6">
                  <img src={tour.img} alt={tour.name} className="h-48 w-64 rounded-lg object-cover" />
                  <div>
                    <h2>{tour.name}</h2>
                    <Rating rating={tour.rating} />
                    <p>{tour.price}</p>
                  </div>
                  <Link href={`/tour/${tour.id}`}>
                    <a className="text-indigo-600 absolute bottom-4 right-4 text-sm">read more...</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const destination = destinations.find((dest) => dest.name === query.name);

  const destinationTours = [];

  for (let id of destination.tours) {
    const tour = tours.find((tour) => tour.id == id);
    if (tour) destinationTours.push(tour);
  }

  return { props: { destinationTours, destination } };
};

export default DestinationCatalog;
