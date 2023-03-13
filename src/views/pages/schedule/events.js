import axios from "axios";

const getPackageById = async (id, token) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/sessions?traineeId=${id}`,
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
        pt: timeTable.PT.fullName,
        center: timeTable.center.centerName,
        slot: timeTable.slot.slotId,
        slotName: timeTable.slot.slotTime,
      }
    })
    return timeTable;
  } catch (error) {
    console.error(error);
  }
};
export { getPackageById };
