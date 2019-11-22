export class DoctorSearch {
    async conditionSearch(name) {
        console.log(name);
        let conditionResult;
        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);

// `            https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}
// `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_KEY}


            if (response.ok) {
                const jsonResponse = await response.json();
                conditionResult = jsonResponse;
                console.log(conditionResult);
            } else {
                // conditionResult = futureErrorVariable;
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(`Better Doctor Fetch error: ${error}`);
        }
    }

    // async doctorSearch(name) {
    //     console.log(name);
    //     let doctor;
    //     try {
    //         const response = await fetch``
    //     }
    // }
}