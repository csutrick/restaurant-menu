import React, { useState } from "react";

function MenuItemCard({ item }) {
  const [price, setPrice] = useState(item.price);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  return (
    <div className="w-full rounded-xl bg-red-300 p-2 drop-shadow-lg">
      <img
        src={item.imageUrl}
        alt={name}
        className="h-60 w-full rounded-t-lg bg-gray-300"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="mb-2 mt-4 w-full text-xl text-black"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="mb-2 w-full text-2xl font-bold text-black"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="h-24 w-full resize-none text-xl text-black"
      />
    </div>
  );
}

export default MenuItemCard;
