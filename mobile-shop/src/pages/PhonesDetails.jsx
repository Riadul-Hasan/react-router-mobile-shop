import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../buttons/Button";
import { FaBookmark } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const PhonesDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);
  const { name, image } = singlePhone;
  return (
    <div className="py-6">
      <img className="w-2/4 py-6 rounded-lg mx-auto" src={image} alt="" />
      <div className="flex justify-between items-center">
        <h2 className="text-7xl font-thin py-2">{name}</h2>
        <div className="space-x-4">
          <Button label={<FaShoppingCart />}></Button>
          <Button label={<FaBookmark />}></Button>
        </div>
      </div>
    </div>
  );
};

export default PhonesDetails;
