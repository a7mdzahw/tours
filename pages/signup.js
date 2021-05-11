import Link from "next/link";
import Hr from "../components/shared/Hr";
import Input from "../components/shared/Input";
import { Button } from "./login";

const Signup = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3">Sign up for Tours</h2>
        <p className="text-muted text-sm mt-2">
          Don't have an account yet ?
          <Link href="/login">
            <a className="text-indigo-600"> Log in</a>
          </Link>
        </p>
      </div>
      <div className="social flex flex-col space-y-2 p-4">
        <Button value="Sign up with Google" icon="google" color="green" />
        <Button value="Sign up with Facebook" icon="facebook" color="blue" />
      </div>
      <Hr />
      <form className="p-4">
        <div className="flex space-x-2 w-100">
          <Input name="first_name" label="First Name" type="text" />
          <Input name="last_name" label="Last Name" type="text" />
        </div>
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Password" />
        <button className="py-2 block w-100 text-white rounded bg-indigo-800">Create Account</button>
      </form>
      <Hr />
      <p className="text-muted text-sm mt-2 px-4">
        By creating an account, you agree to our
        <Link href="/terms">
          <a className="text-indigo-600"> Terms & Conditions</a>
        </Link>{" "}
        and
        <Link href="privacy_policy">
          <a className="text-indigo-600"> Privacy Policy.</a>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
