// ##############################
// // // pt
// #############################
import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/PTs";
const token = localStorage.getItem("accessToken");
const loadPTs = async () => {
  try {
    const response = await axios.get(API_URL,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const PTData = response.data;
    const PTs = PTData.PTs.map((pt) => {
      return {
        id: pt.PTId,
        name: pt.fullName,
        description: pt.description,
        rating: pt.rating,
        img: pt.imgLink,
        center: pt.center.centerName,
      };
    });
    return PTs;
  } catch (error) {
    console.error(error);
  }
};
const getPtById = async (ptID) => {
  try {
    const response = await axios.get(API_URL + "/" + ptID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const pt = response.data.PT;
    const center = response.data.PT.center;
    const PtInfo = {
      id: pt.PTId,
      fullName: pt.fullName,
      rating: pt.rating,
      description: pt.description,
      img: pt.imgLink,
      centerID: center.centerId,
      centerName: center.centerName,
      centerAddress: center.address,
    };

    return PtInfo;
  } catch (error) {
    console.error(error);
  }
};

const updatePt = async (ptID, ptData) => {
  try {
    const response = await axios.patch(`${API_URL}/${ptID}`, ptData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const loadPtByID = async (centerID) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/PTs?centerId=${centerID}`
    );
    const PTData = response.data;
    const PTs = PTData.PTs.map((pt) => {
      return {
        id: pt.PTId,
        name: pt.fullName,
        description: pt.description,
        rating: pt.rating,
        img: pt.imgLink,
        center: pt.center.centerName,
      };
    });
    return PTs;
  } catch (error) {
    console.error(error);
  }
};

const loadSlotByPT = async (ptID) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/PTs/${ptID}`
    );
    const SlotData = response.data.PT.remainSlots;
    return SlotData;
  } catch (error) {
    console.error(error);
  }
};
export { loadPTs, getPtById, updatePt, loadPtByID, loadSlotByPT };
