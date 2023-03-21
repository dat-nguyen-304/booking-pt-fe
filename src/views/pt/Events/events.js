import axios from "axios";
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('https://gachateambe.herokuapp.com/api/auth/tokens',
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    const accessToken  = response.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error(error);
  }
}
const getPackageByPTId = async (id, token) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/sessions?PTId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const schedules = response.data.sessions;
    const timeTable = schedules.map((timeTable)=> {
      const date = timeTable.date.slice(0, 10)
      const timeStart = timeTable.slot.slotTime.slice(0, 5);
      const newTime = date + 'T' + timeStart + ':00.000';
      return {
        sessionsId: timeTable.sessionId,
        date: newTime,
        centerId: timeTable.center.centerId,
        center: timeTable.center.centerName,
        slot: timeTable.slot.slotId,
        slotName: timeTable.slot.slotTime,
        traineeID: timeTable.trainee.traineeId,
        trainee: timeTable.trainee.fullName,
        noteFromTrainee: timeTable.noteFromTrainee,
      }
    })
    return timeTable;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const refreshedToken = await refreshAccessToken();
      return getPackageByPTId(id, refreshedToken);
    } else {
      console.error(error);
    }
  }
};
export { getPackageByPTId,refreshAccessToken };
