// import { Doctor } from './doctor-search-service.js';
export class DoctorSearch {
  async doctorSearchByName(name) {
    // console.log(Doctor);
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&sort=full-name-asc&skip=0&limit=75&user_key=${process.env.API_KEY}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error(`Better Doctor Fetch error: ${error}`);
    }
  }

  async conditionSearch(condition) {
    let ailment;
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&skip=0&limit=75&user_key=${process.env.API_KEY}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error(`Better Doctor Condition Fetch error: ${error}`);
    }
    return ailment;
  }
}