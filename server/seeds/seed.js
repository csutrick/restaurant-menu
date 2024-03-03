const db = require("../config/connection");

const { Profile, Menu } = require("../models");

const profileSeeds = require("./profileSeeds.json");
const menuSeeds = require("./menuSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Menu.deleteMany({});
    await Menu.create(menuSeeds);

    console.log("Profile and Menu seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
