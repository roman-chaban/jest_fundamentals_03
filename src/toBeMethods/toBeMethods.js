let sum = 0.1 + 0.2;

const fetchNewFlavorIdea = (data) => {
  return data.current;
};

const bloop = (isNull) => {
  if (isNull) {
    return true;
  } else {
    return null;
  }
};

const checkToBeTruthy = () => {
  if (bloop(true) === null) return;

  return true;
};

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
  },
};
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

const getAllFlavors = (flavours) => {
  return flavours;
};

const getDataFromDataBase = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error("This data base is empty"));
      }
    });
  });
};

module.exports = {
  sum,
  fetchNewFlavorIdea,
  bloop,
  checkToBeTruthy,
  getAllFlavors,
  houseForSale,
  desiredHouse,
  getDataFromDataBase,
};
