import Accordion from "../../components/shared/Accordion";
import Rating from "../../components/shared/Rating";
import tours from "../../public/assets/data/tours.json";

const TourDescription = ({ tour }) => {
  return (
    <div className="space-y-10 mt-3 description">
      <div className="container">
        <h2 className="text-2xl font-bold">{tour.name}</h2>
        <div className="flex space-x-2">
          <Rating />
          <span className="text-green-700">1200 reviews</span>
        </div>
        {tour.place}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <img src={tour.img} alt={tour.name} className="h-64 w-100" style={{ objectFit: "cover" }} />
          </div>
          <div className="card-body col-md-6">
            <div className="card-content space-y-4">
              <h2 className="fw-bold text-xl">
                from <span className="font-normal text-gray-700">{tour.price} LE</span>
              </h2>
              <button className="w-64 px-4 py-3 bg-purple-700 text-white rounded hidden md:block">
                Check Availability
              </button>
            </div>
          </div>
          <hr className="mx-2 md:hidden" />
        </div>
      </div>

      <div className="overview container">
        <h1 className="text-2xl  uppercase mb-2">Overview</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maiores cumque quam dicta obcaecati fuga
          rem sit expedita repellendus commodi.
        </p>
      </div>
      <div className="container">
        <Accordion name="What's Included" id="included">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus
          voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.
        </Accordion>
        <Accordion name="Itenary" id="itenary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus
          voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.
        </Accordion>
        <Accordion name="Depature & Return" id="leave">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus
          voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.
        </Accordion>
      </div>
      <div className="bg-white p-3 shadow-md fixed md:hidden bottom-0 inset-x-0">
        <button className="w-100 px-4 py-3 bg-purple-700 text-white rounded ">Check Availability</button>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const tour = tours.find((tour) => tour.id == query.id);
  return { props: { tour } };
};

export default TourDescription;
