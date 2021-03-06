import $ from 'jquery';
import { DoctorSearch } from './doctor-search-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  function newSearchCheck(response) {
    $('#doctorInformation').show();
    errorWithAPI(response);
    $('#doctorInformation').text('');
  }
  function noSearchResult(arr) {
    if (arr.length < 1) {
      $('#doctorInformation').hide();
      $('#noResultError').slideDown();
      setTimeout(() => $('#noResultError').slideUp(), 3500);
    }
  }
  function errorWithAPI(response) {
    if (typeof (response) == 'string') {
      $('#doctorInformation').hide();
      $('#errorWithAPI').slideDown();
      setTimeout(() => $('#errorWithAPI').slideUp(), 3500);
    }
  }
  function displayInfo(response, i) {
    console.log(response);
    $('#doctorInformation').append(`
      <div id='doctorResult'>
        <h4> ${response.data[i].profile.first_name} <span class='middleName' id='missingMiddleName'>${response.data[i].profile.middle_name}</span> ${response.data[i].profile.last_name} M.D.</h4> 
        <h5>${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state}</h5> 
        <ul>
          <li class='address'>${response.data[i].practices[0].visit_address.street}</li>
          <li class='address address2' id='secondStreet'>${response.data[i].practices[0].visit_address.street2}</li>
          <li class='address'>${response.data[i].practices[0].visit_address.zip}</li>
        </ul>
        <p class='small-italics'>It is ${response.data[i].practices[0].accepts_new_patients} that we are accepting new patients!</p>
        <p class='website' id='missingWebsite'></p>
        <p>☎️: ${response.data[i].practices[0].phones[0].number}</p>
        <hr>
      </div>`);
  }
  function addressRemover(response, i) {
    $('#secondStreet').attr('id', i); // replaces the ID of each dynamic address2 value with a different ID to use later
    if (response.data[i].practices[0].visit_address.street2 === undefined) {
      let el = $('#' + i);
      el.html('');
    }
  }
  function middleNameCheck(response, i) {
    let newMiddleNameID = 'middleName' + i;
    $('#missingMiddleName').attr('id', newMiddleNameID); // replaces the ID of each span object with new, concatenated ID
    if (response.data[i].profile.middle_name === undefined) {
      let el = $('#' + newMiddleNameID);
      el.html('');
    }
  }
  let websiteFinder = function (response, i) {
    let newWebsiteID = 'website' + i;
    $('#missingWebsite').attr('id', newWebsiteID);
    if (response.data[i].practices[0].website === undefined) {
      let el = $('#' + newWebsiteID);
      el.html('');
    } else {
      let el = $('#' + newWebsiteID);
      el.html(response.data[i].practices[0].website);
    }
  };
  //Condition Search
  $('#conditionSearchButton').click(function () {
    let conditionSearchInput = $('#conditionSearch').val();

    (async () => {
      let condition = new DoctorSearch();
      const response = await condition.conditionSearch(conditionSearchInput);
      getElements(response);
    })();

    function getElements(response) {
      newSearchCheck(response);
      let doctorsArr = Object.keys(response.data);
      noSearchResult(doctorsArr);
      for (let i = 0; i < doctorsArr.length; i++) {
        displayInfo(response, i);
        websiteFinder(response, i);
        addressRemover(response, i);
        middleNameCheck(response, i);
      }
    }
  });

  //Doctor Search
  $('#searchbar').submit(function (event) {
    event.preventDefault();
    let doctorSearchInput = $('#doctorSearch').val();

    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.doctorSearchByName(doctorSearchInput);
      errorWithAPI(response);
      getElements(response);
    })();

    function getElements(response) {
      newSearchCheck(response);
      let doctorsArr = Object.keys(response.data);
      noSearchResult(doctorsArr);
      for (let i = 0; i < doctorsArr.length; i++) {
        displayInfo(response, i);
        websiteFinder(response, i);
        addressRemover(response, i);
        middleNameCheck(response, i);
      }
    }
  });
});