export class Doctor {
    constructor(firstName, lastName, city, state, street, street2, zipCode, address, phonenumber, newPatients, website) {
        this.name = `${firstName} ${lastName}`;
        this.city = `${city}`;
        this.state = `${state}`;
        this.street = `${street}`;
        this.street2 = `${street2}`;
        this.zipCode = `${zipCode}`;
        this.address = `${address}`;
        this.phoneNumber = `${phonenumber}`;
        this.newPatients = `${newPatients}`;
        this.website = `${website}`;
    }
}