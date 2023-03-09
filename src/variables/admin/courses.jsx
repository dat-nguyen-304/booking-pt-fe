// ##############################
// // // courses
// #############################

import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/packages";
const getAllPackage = async () => {
  try {
    const response = await axios.get(API_URL);
    const packagesData = response.data;
    const packages = packagesData.packages.map((pack) => {
      let ptStatus = "";
      if (pack.category === "havept") {
        ptStatus = "Have Personal Trainer";
      } else {
        ptStatus = "Don't have Personal Trainer";
      }
      return {
        id: pack.packageId,
        name: pack.packageName,
        price: pack.price,
        durationByMonth: pack.durationByMonth,
        durationByDay: pack.durationByDay,
        object: pack.object,
        created: pack.createdAt,
        category: pack.category ,
        status: pack.activate,
        ptStatus: ptStatus, // thêm thuộc tính mới
        imgLink : "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/332773078_2141261912889325_4648798698662692148_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oSPfdFG0cccAX_9nDPG&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQas4dGsNoikQrXg-vJcCTTy8UyjaoCQb0DYhtGPM8j7Q&oe=643179D3"
      };
    });
    console.log(packages);
    return packages;
  } catch (error) {
    console.error(error);
  }
};

const getPayment = async () => {
  try {
    const response = await axios.get("https://gachateambe.herokuapp.com/api/payments");
    const payments = response.data.payments;
    return payments;
  } catch (error) {
    console.error(error);
  }
}

const getPackageById = async (id) => {
  try {
    const response = await axios.get(`https://gachateambe.herokuapp.com/api/packages/${id}`);
    const packages = response.data.package;
    return packages
  }catch (error) {
    console.error(error);
  }
}

const getPackage = async (id) => {
  try {
    const response = await axios.get(`https://gachateambe.herokuapp.com/api/trainee-packages?packageId=${id}`);
    const total = response.data.totalItems;
    const traineePackages = response.data.traineePackages;
    const packages = {
      total,
      traineePackages
    }
    console.log(packages);
    return packages
  }catch (error) {
    console.error(error);
  }
}

export {
   getAllPackage, getPayment, getPackageById, getPackage
};
