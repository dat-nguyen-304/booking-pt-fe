// ##############################
// // // centers
// #############################
import axios from "axios";
import moment from "moment";
const API_URL = "https://gachateambe.herokuapp.com/api/centers";
const token = localStorage.getItem("accessToken");
const loadCenters = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const centersData = response.data;
    const centers = centersData.centers.map((center) => ({
      id: center.centerId,
      name: center.centerName,
      address: center.address,
      created: moment(center.createdAt).format("DD-MM-YYYY"),
      img: center.imgLink,
      status: center.activate,
    }));

    return centers;
  } catch (error) {
    console.error(error);
  }
};

const getCenterById = async (centerId) => {
  try {
    const response = await axios.get(API_URL + "/" + centerId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const centerData = response.data.center;
    return centerData;
  } catch (error) {
    console.error(error);
  }
};


export { loadCenters, getCenterById };
