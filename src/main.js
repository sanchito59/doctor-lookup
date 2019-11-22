import $ from 'jquery';
import { DoctorSearch } from './doctor-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#searchbar').submit(function (event) {
    event.preventDefault();
    let doctorSearchInput = $('#doctorSearch').val();
    let conditionSearchInput = $('#conditionSearch').val();

    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.doctorSearchByName(doctorSearchInput);
      getElements(response);
    })();

    function getElements(response) {
      console.log('response', response);
      // console.log('response2', response2);
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
