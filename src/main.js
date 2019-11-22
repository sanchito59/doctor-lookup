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
      console.log('ruff', response);
      $('#doctorInformation').html(`
      <div id='doctorResult'>
        <h4> ${response.firstName} ${response.lastName} M.D.</h4> 
        <h5>${response.city}, ${response.state}</h5> 
        <ul>
          <li class='address'>${response.street}</li>
          <li class='address'>${response.street2}</li>
          <li class='address'>${response.zipCode}</li>
        </ul>
        <p>☎️: ${response.phoneNumber}
      </div>`);
    }
  });
});
