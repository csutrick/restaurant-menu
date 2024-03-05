import React from "react";

function MenuItemCard({ item }) {
  return (
    <div className="w-full rounded-xl bg-red-300 p-2">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="h-72 w-full rounded-lg bg-gray-300"
      />
      <p className="mt-4 text-xl text-black">{item.price}</p>
      <p className="mb-2 text-2xl font-bold text-black">{item.name}</p>
      <p className="text-xl text-black">{item.description}</p>
    </div>
  );
}

export default MenuItemCard;
