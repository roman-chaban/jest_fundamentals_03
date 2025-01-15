const sumOfNumbers = 100 + 99;

const getUsersFromServerDataBase = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { sumOfNumbers, getUsersFromServerDataBase };
