import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeesCard from "./CoffeesCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
 
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeesCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
