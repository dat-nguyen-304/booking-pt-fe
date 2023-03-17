// ##############################
// // // students
// #############################

import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/trainees";
const token = localStorage.getItem("accessToken");

const getAllTrainee = async() => {
    try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const trainees = response.data.trainees;
        const trainee = trainees.map((train) => ({
            id: train.traineeId,
            fullName: train.fullName,
            currentPackageId : train.currentPackageId || "0",
          }));
        return trainee;
      } catch (error) {
        console.error(error);
      }
}

const getTraineeByID = async(id) => {
    try {
        const response = await axios.get(`https://gachateambe.herokuapp.com/api/trainees/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const trainees = response.data.trainee;
        console.log(trainees);
        return trainees;
      } catch (error) {
        console.error(error);
      }
}

const getPackagePurchased = async (id) => {
    try {
        const response = await axios.get(`https://gachateambe.herokuapp.com/api/trainee-packages?traineeId=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const total = response.data.totalItems;
        const totalItems = response.data.traineePackages;
        const packages = {
            total,
            totalItems
        }
        console.log(packages.totalItems);
        return packages;
      } catch (error) {
        console.error(error);
      }
}


export {
  getAllTrainee, getTraineeByID, getPackagePurchased
};
