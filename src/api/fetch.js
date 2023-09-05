import instance from "./index.js";

const fetchData = async (request, config = "") => {
  try {
    const res = await instance.get(request, config);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
