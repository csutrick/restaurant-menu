import React from "react";

import Menu from "../components/HomeUser/Menu/index.js";

function HomeUser() {
  return (
    <main className="flex h-auto min-h-screen w-full flex-col items-center justify-start pt-16">
      <p className="mb-4 text-4xl font-bold tracking-wider">Home User</p>
      <Menu />
    </main>
  );
}

export default HomeUser;
