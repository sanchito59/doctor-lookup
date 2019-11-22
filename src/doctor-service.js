export class DoctorSearch {
  async doctorSearchByName(name) {
    let doctor = {};
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('raw json: ', jsonResponse);
        let keys = Object.keys(jsonResponse.data);
        console.log('keys: ', keys);
        // console.log(jsonResponse.data[0]);
        // for (let i = 0; i < 5; i++) {
        //   console.log('i:', i)
        //   console.log('loop log: ', keys.data[0].profile.[0]);
        // }
        doctor.firstName = jsonResponse.data[0].profile.first_name;
        doctor.lastName = jsonResponse.data[0].profile.last_name;
        doctor.fullName = jsonResponse.data[0].practices[0].name;
        doctor.city = jsonResponse.data[0].practices[0].visit_address.city;
        doctor.state = jsonResponse.data[0].practices[0].visit_address.state;
        doctor.street = jsonResponse.data[0].practices[0].visit_address.street;
        doctor.street2 = jsonResponse.data[0].practices[0].visit_address.street2;
        doctor.zipCode = jsonResponse.data[0].practices[0].visit_address.zip;
        doctor.address = `${doctor.city}, ${doctor.state}; ${doctor.street}. ${doctor.street2}, ${doctor.zipCode} `;
        doctor.phoneNumber = jsonResponse.data[0].practices[0].phones[0].number;
        // doctor.website = jsonResponse.data[0].practices[4].website; //Most dont seem to have websites?
        doctor.newPatients = jsonResponse.data[0].practices[0].accepts_new_patients;
        // console.log('Doctor Info: ', doctor);
        return doctor;
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
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
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