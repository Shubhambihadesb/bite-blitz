import { Button, Card } from "@mui/material";
import React from "react";

const MenuItemCard = (item) => {
  const handleAddItemToCart = () => {
    console.log("handle add item to cart");
  };
  return (
    <Card className="p-5 lg:flex items-center justify-between box">
      <div className="lg:flex items-center lg:space-x-5">
        <img
          className="w-[7rem] h-[7rem] object-cover"
          src="https://ministryofcurry.com/wp-content/uploads/2023/12/crispy-dosa_-3.jpg"
          alt=""
        />
        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
          <p className="font-semibold text-xl">{`Pizza`}</p>
          <p>Rs.{299}</p>
          <p className="text-gray-400">{`Rice , Sambar , Papad`}</p>
        </div>
      </div>
      <div>
        <Button onClick={handleAddItemToCart}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
