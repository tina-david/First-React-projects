import React from "react";
const CustomInput = () => {
  const HandleClick = (event) => {
    event.preventDefault();
    const Value = event.target.elements.UserInput.value;
    console.log(Value);
  };
  return (
    <div>
      <form
      
        onSubmit={HandleClick}
        className="flex flex-col gap-6  p-6 rounded-2xl shadow-lg 2xl bg-white"
      >
        <h2 className="flex justify-center font-bold">this is input form!</h2>
        <input
          type="text"
          placeholder="type something here.."
          id="UserInput"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-2 focus:border-green-300 placeholder-gray-400"
        ></input>
        <button
          type="submit"
          className="bg-green-600 text-white  py-2 rounded-lg hover:bg-green-700 transition-colors duration-150 font-medium cursor-pointer"
        >
          adding text
        </button>
      </form>
    </div>
  );
};

export default CustomInput;
