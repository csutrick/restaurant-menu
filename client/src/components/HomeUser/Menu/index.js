import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_MENU_ITEMS } from "../../../utils/queries";

import MenuItemCard from "./menuItemCard";

function Menu() {
  const { loading, data } = useQuery(QUERY_MENU_ITEMS);
  const menuItems = data?.getAllItems || [];

  return (
    <section className="grid w-full grid-flow-row grid-cols-4 gap-6 bg-white p-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        menuItems.map((item) => <MenuItemCard key={item._id} item={item} />)
      )}
    </section>
  );
}

export default Menu;
