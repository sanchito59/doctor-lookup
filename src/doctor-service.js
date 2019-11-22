export class DoctorSearch {
    async doctorSearchByName(name) {
        let doctor = {};
        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse.data[0]);
                doctor.firstName = jsonResponse.data[0].profile.first_name;
                doctor.lastName = jsonResponse.data[0].profile.last_name;
                doctor.fullName = jsonResponse.data[0].practices[0].name;
                doctor.city = jsonResponse.data[0].practices[0].visit_address.city;
                doctor.state = jsonResponse.data[0].practices[0].visit_address.state;
                doctor.street = jsonResponse.data[0].practices[0].visit_address.street;
                doctor.street2 = jsonResponse.data[0].practices[0].visit_address.street2;
                doctor.zipCode = jsonResponse.data[0].practices[0].visit_address.zip;
                doctor.address = `${doctor.city}, ${doctor.state}; ${doctor.street}. ${doctor.street2}, ${doctor.zipCode} `;
                doctor.phoneNumber = jsonResponse.data[0].practices.phones;
                // doctor.website = jsonResponse.data[0];
                // doctor.newPatients = jsonResponse.data[0];
                console.log('Doctor Info: ', doctor);
            } else {
                // conditionResult = futureErrorVariable;
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(`Better Doctor Fetch error: ${error}`);
        }
    }
}