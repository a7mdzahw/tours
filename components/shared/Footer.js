const Footer = () => {
  return (
    <div className="bg-indigo-800 mt-4">
      <div className="p-4 text-white space-y-4 ">
        <div className="space-y-1">
          <p>Help Center</p>
          <p>Privacy and Cookies Statement</p>
          <p>About Us</p>
        </div>
        <div className="space-x-7 text-2xl">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <hr />
        <div>
          <p>Tours</p>
          <div className="text-gray-400">
            <p> &copy; 2020-2021 copyright</p>
            <p>Terms & Conditions | Call Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
