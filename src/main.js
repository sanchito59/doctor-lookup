import $ from 'jquery';
import { DoctorSearch } from './doctor-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#doctorSearch').submit(function (event) {
    event.preventDefault();
    let searchInput = $('#searchInput').val();

    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.doctorSearchByName(searchInput);
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      $('#doctorInformation').text(`${response.firstName} ${response.lastName} ${response.city}, ${response.state} ${response.street} ${response.street2} ${response.zipCode} ${response.phoneNumber}`);
    }

  });
});
