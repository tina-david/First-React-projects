import React from "react";

const UserList = ({ items }) => {
return items.map((item) => (
  <>
            <div className="bg-white rounded-2xl shadow-md p-6 m-4 w-64 text-center hover:shadow-lg transition">

    <h2 className="text-xl font-bold text-gray-800 mb-2">name : {item.name}</h2>
    <p className="text-gray-600">Age : {item.age}</p>
    <p className="text-gray-500"> City: {item.city}</p>
 </div>
  </>
));

};

export default UserList;
