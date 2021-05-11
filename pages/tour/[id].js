import { useState } from "react";
import Accordion from "../../components/shared/Accordion";
import Rating from "../../components/shared/Rating";
import tours from "../../public/assets/data/tours.json";

const TourDescription = ({ tour }) => {
  const [tab, setTab] = useState("Included");

  return (
    <div className="space-y-10 mt-3  max-w-4xl mx-auto" style={{ minHeight: "62vh" }}>
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
          <div className="col-lg-6 pe-4">
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
      <div className="container md:hidden">
        <Accordion name="What's Included" id="included">
          <Content tab="Included" />
        </Accordion>
        <Accordion name="Itineray" id="itineray">
          <Content tab="Itineray" />
        </Accordion>
        <Accordion name="Depature & Return" id="leave">
          <Content tab="Depature" />
        </Accordion>
      </div>
      <div className="hidden container md:block">
        <ul className="nav nav-tabs">
          <Tab name="Included" onClick={setTab} current={tab} />
          <Tab name="Itineray" onClick={setTab} current={tab} />
          <Tab name="Depature" onClick={setTab} current={tab} />
        </ul>
        <div className="text-sm text-gray-500 mt-2">
          <Content tab={tab} />
        </div>
      </div>
      <div className="bg-white p-3 shadow-md fixed md:hidden bottom-0 inset-x-0">
        <button className="w-100 px-4 py-3 bg-purple-700 text-white rounded ">Check Availability</button>
      </div>
    </div>
  );
};

const Tab = ({ name, onClick, current }) => (
  <li className="nav-item">
    <button className={`nav-link ${current === name && "active"}`} aria-current="page" onClick={() => onClick(name)}>
      {name}
    </button>
  </li>
);

const Content = ({ tab }) => {
  switch (tab) {
    case "Included":
      return (
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      );
    case "Itineray":
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi tempore quos atque minima nobis possimus
          nostrum expedita aspernatur illo?
        </p>
      );
    case "Depature":
      return <p>SAT 31 ON 15 : 25 : 69</p>;
  }
};

export const getServerSideProps = async ({ query }) => {
  const tour = tours.find((tour) => tour.id == query.id);
  return { props: { tour } };
};

export default TourDescription;
