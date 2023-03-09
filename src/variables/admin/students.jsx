// ##############################
// // // students
// #############################

import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/trainees";

const getAllTrainee = async() => {
    try {
        const response = await axios.get(API_URL);
        const trainees = response.data.trainees;
        const trainee = trainees.map((train) => ({
            id: train.traineeId,
            fullName: train.fullName,
            currentPackageId : train.currentPackageId || "0",
            imgLink: train.imgLink || "https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-accountavataruser--flat-color-icon--vector-icon-banner-templ-png-image_1491720.jpg"
          }));
        return trainee;
      } catch (error) {
        console.error(error);
      }
}

const getTraineeByID = async(id) => {
    try {
        const response = await axios.get(`https://gachateambe.herokuapp.com/api/trainees/${id}`);
        const trainees = response.data.trainee;
        console.log(trainees);
        return trainees;
      } catch (error) {
        console.error(error);
      }
}

const getPackagePurchased = async (id) => {
    try {
        const response = await axios.get(`https://gachateambe.herokuapp.com/api/trainee-packages?traineeId=${id}`);
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
