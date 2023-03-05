// ##############################
// // // centers
// #############################
import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/centers";
const loadCenters = async () => {
  try {
    const response = await axios.get(API_URL);
    const centersData = response.data;
    const centers = centersData.centers.map((center) => ({
      id: center.centerId,
      name: center.centerName,
      address: center.address,
      created: center.createdAt,
      img: center.imgLink,
      status: center.activate,
    }));
    console.log(centers);
    return centers;
  } catch (error) {
    console.error(error);
  }
};
const getCenterById  = async (centerId) => {
  try {
    const response = await axios.get(API_URL + '/' + centerId);
    const centerData = response.data.center;
    return centerData;
  } catch (error) {
    console.error(error);
  }
}

export { loadCenters, getCenterById };
