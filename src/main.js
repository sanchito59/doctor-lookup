import $ from 'jquery';
import { DoctorSearch } from './doctor-search-service.js';
// import { Doctor } from './doctor-search-service.js';
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
      for (let i = 0; i < doctorsArr.length; i++) {
        // console.log('doctorSearchByName response: ', response.data[i].profile.first_name);
        $('#doctorInformation').append(`
        <div id='doctorResult'>
          <h4> ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} M.D.</h4> 
          <h5>${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state}</h5> 
          <ul>
            <li class='address'>${response.data[i].practices[0].visit_address.street}</li>
            <li class='address' id='secondStreet'>${response.data[i].practices[0].visit_address.street2}</li>
            <li class='address'>${response.data[i].practices[0].visit_address.zip}</li>
          </ul>
          <p class='small-italics'>It is ${response.data[i].practices[0].accepts_new_patients} that we are accepting new patients!</p>
          <p>☎️: ${response.data[i].practices[0].phones[0].number}</p>
          <hr>
        </div>`);
        $('#secondStreet').attr('id', i); // replaces the ID each dynamic object with a number value to use later
        if(response.data[i].practices[0].visit_address.street2 === undefined){
          // $('')
          console.log(`oi that's another one`);
        }
      }
    }
  });
});
