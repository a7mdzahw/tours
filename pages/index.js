import { useState } from "react";

import SearchForm from "../components/shared/SearchForm";
import Slider from "../components/shared/Slider";
import Destination from "../components/tours/Destination";
import Tour from "../components/tours/Tour";

import destinationsData from "../public/assets/data/destinations.json";
import toursData from "../public/assets/data/tours.json";

const Home = () => {
  const [destinations, setDestinations] = useState(destinationsData);
  const [tours, setTours] = useState(toursData);

  return (
    <div className="relative">
      <img
        src="/assets/img/hero.jpeg"
        alt="hero pic"
        className="w-100 md:h-96 "
        style={{ objectFit: "cover", maxHeight: "93vh", backgroundPosition: "top" }}
      />
      <div className="container">
        <SearchForm />
      </div>

      <section className="top_destnations container py-4">
        <h2 className="text-indigo-700 text-xl mb-3">Top Destinations</h2>
        <div className="row">
          {destinations.map((destination) => {
            return (
              <div key={destination.id} className="col-6 col-md-2 mb-2">
                <Destination destination={destination} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="container py-4 tours">
        <h2 className="text-indigo-700 text-xl mb-3">Top Tours</h2>
        <Slider>
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} />;
          })}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
