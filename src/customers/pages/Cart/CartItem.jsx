import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Pizza</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton color="primary">
                  <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                </IconButton>
                <div className="w-5 h-5 text-xs">5</div>
                <IconButton color="primary">
                  <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </IconButton>
              </div>
            </div>
          </div>
          <p>Rs.299</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
