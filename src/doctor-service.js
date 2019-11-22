export class DoctorSearch {
    async doctorSearchByName(name) {
        let doctor = {};
        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                doctor.firstName = jsonResponse.data[0].profile.first_name;
                doctor.lastName = jsonResponse.data[0].profile.last_name;
                doctor.fullName = `${doctor.firstName} ${doctor.lastName}`;
                console.log('Doctor Name: ', doctor);
            } else {
                // conditionResult = futureErrorVariable;
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(`Better Doctor Fetch error: ${error}`);
        }
    }
}