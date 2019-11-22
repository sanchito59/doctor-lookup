export class DoctorSearch {
    constructor(search) {
        this.search = search;
    }

    async conditionSearch(condition) {
        console.log(condition);
        let conditionResult = {};
        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_KEY}`);
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
}