export const filterByName = (seminars, userInput) => {
  console.log("name: ", seminars);
  return seminars.filter((seminar) => {
    console.log("matching seminars", seminar);
    return userInput === seminar.name;
  });
};
