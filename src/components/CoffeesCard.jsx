import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeesCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, barista, supplier, details, taste } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`https://coffee-server-silk.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            //   remove the coffee from the state 
              const remainingCoffees = coffees.filter(
                (coff) => coff._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side p-6 bg-base-100 shadow-sm w-10/12 mx-auto">
      <div className="mr-4">
        <img src={photo} alt="Movie" />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{barista}</p>
          <p>{supplier}</p>
          <p>{details}</p>
          <p>{taste}</p>
        </div>

        <div className="join join-vertical space-y-2">
          <Link to={`/coffees/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`/update-coffee/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeesCard;
