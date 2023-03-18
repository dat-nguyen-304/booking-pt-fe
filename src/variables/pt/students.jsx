// ##############################
// // // students
// #############################
import axios from "axios";
import jwt from "jsonwebtoken";

const getTraineeByPtID = async () => {
  const token = localStorage.getItem("accessToken");
  const PtID = jwt.decode(token).accountId;
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/trainee-packages?mainPTId=${PtID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const trainees = response.data.traineePackages;
    const ptStudent = trainees.map((pt)=> {
      return {
        id: pt.trainee.traineeId,
        fullName: pt.trainee.fullName,
        package: pt.package.packageId,
        packageName: pt.package.packageName,
        status: pt.status
      }
    })
    console.log(trainees);
    return ptStudent;
  } catch (error) {
    console.error(error);
  }
};

export { getTraineeByPtID };
