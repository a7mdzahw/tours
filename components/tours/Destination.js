import Link from "next/link";
const Destination = ({ destination }) => {
  return (
    <Link href={`/destination/${destination.name}`}>
      <a>
        <div className="card relative shadow-lg h-32">
          <img src={destination.img} alt={destination.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
          <p className="absolute flex justify-center items-center text-white bg-black inset-0 bg-opacity-30">
            {destination.name}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Destination;
