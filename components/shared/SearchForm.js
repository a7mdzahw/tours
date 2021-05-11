const SearchForm = () => {
  return (
    <form className="search-form absolute shadow bg-gray-100 p-10 bg-opacity-50 md:w-96">
      <h2 className="text-xl font-bold text-indigo-600 mb-2">Find amazing things to do.</h2>
      <input
        type="text"
        className="py-2 px-2 w-100 shadow  rounded focus:ring-2 focus:ring-indigo-600 focus:outline-none"
      />
      <button className="mt-2 block bg-indigo-600 text-white px-4 py-2 w-100 rounded-lg">Search</button>
    </form>
  );
};

export default SearchForm;
