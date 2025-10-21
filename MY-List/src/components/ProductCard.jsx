import React from "react";

const ProductCard = ({ items }) => {
  return (
    <div>
       
    {  items.map((item) => {
        return (
             <div key={item.id} className="bg-white shadow-md p-4 rounded-xl m-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
         <p className="text-blue-600 m-2"><h3 className="font-bold text-[15px]xl">Description: </h3>{item.description} </p>
          <p className="text-blue-600 "><p className="inline font-bold text-[15px]xl ">price:</p> {item.price} </p>

          </div>
        );
      })     } 
   
    </div>
  );
};

export default ProductCard;
