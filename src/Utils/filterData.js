// filter by name functionality
export const filterData = (data, userInput) => {
  return data.filter((item) => {
    if (userInput === "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(userInput) ||
        item.location.toLowerCase().includes(userInput)
      );
    }
  });
};
