import $ from 'jquery';
import { DoctorSearch } from './doctor-search-service.js';
import { Doctor } from './doctor-search-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  //Condition Search
  $('#conditionSearchButton').click(function () {
    let conditionSearchInput = $('#conditionSearch').val();

    (async () => {
      let condition = new DoctorSearch();
      const response = await condition.conditionSearch(conditionSearchInput);
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
    }
  });

  //Doctor Search
  $('#searchbar').submit(function (event) {
    event.preventDefault();
    let doctorSearchInput = $('#doctorSearch').val();

    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.doctorSearchByName(doctorSearchInput);
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      $('#doctorInformation').text('');
      let doctorsArr = Object.keys(response.data);
      console.log(doctorsArr);
      for(let i = 0; i < doctorsArr.length; i++){
        console.log('doctorSearchByName response: ', response.data[i].profile.first_name);
      }
      doctorsArr.forEach(() => {
        console.log(response.firstName);
        $('#doctorInformation').append(`
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
      });
    }
  });
});
