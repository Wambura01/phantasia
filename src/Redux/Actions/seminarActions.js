import { LOAD_ITEMS } from "../Constants/seminarConstants";

const loadSeminars = (payload) => ({
  type: LOAD_ITEMS,
  payload,
});

// get all seminars
export const getSeminars = async ({ dispatch }) => {
  const url = "http://localhost:3002/seminars";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(loadSeminars(data)));
};
