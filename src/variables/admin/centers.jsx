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
const deleteCenter = async(centerId) => {
  axios.delete(API_URL + '/' + centerId)
  .then((response) => {
    console.log(response.data); // xử lý dữ liệu trả về
  })
  .catch((error) => {
    console.log(error); // xử lý lỗi
  });
}
export { loadCenters, getCenterById, deleteCenter };
