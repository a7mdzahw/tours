import Link from "next/link";
import Hr from "../components/shared/Hr";
import Input from "../components/shared/Input";

const Login = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3">Log in to Tours</h2>
        <p className="text-muted text-md mb-3">
          Log in to add things to your wishlist and access your bookings from any device.
        </p>
        <p className="text-muted text-sm mt-2">
          Don't have an account yet ?
          <Link href="/signup">
            <a className="text-indigo-600"> Sign up</a>
          </Link>
        </p>
      </div>
      <div className="social flex flex-col space-y-2 p-4">
        <Button value="Log in with Google" icon="google" color="green" />
        <Button value="Log in with Facebook" icon="facebook" color="blue" />
      </div>
      <Hr />
      <form className="p-4">
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Password" />
        <button className="py-2 block w-100 text-white rounded bg-indigo-800">Log in</button>
      </form>
    </div>
  );
};

export const Button = ({ value, icon, color }) => {
  return (
    <button className="py-2 text-black border-2 border-black rounded flex justify-around">
      <i className={`bi bi-${icon} text-${color}-600`}></i>
      <span>{value}</span>
      <div></div>
    </button>
  );
};

export default Login;
