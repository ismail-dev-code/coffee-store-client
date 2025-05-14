import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { photo, name, barista, price, supplier, details, taste } =
    useLoaderData();

  return (
    <div className="card image-full mx-auto w-96 shadow-sm mt-24">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="card-body font-bold">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        <p>{barista}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
