export const filterByName = (seminars, userInput) => {
  return seminars.filter((seminar) => {
    if (userInput === "") {
      return seminar;
    } else {
      return seminar.name.toLowerCase().includes(userInput);
    }
  });
};
