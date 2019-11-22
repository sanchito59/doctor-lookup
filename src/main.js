import $ from 'jquery';
import { DoctorSearch } from './doctor-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#doctorSearch').submit(function (event) {
    event.preventDefault();
    let searchInput = $('#searchInput').val();
    let doctor = new DoctorSearch();
    doctor.doctorSearchByName(searchInput);
    console.log('Doctor: ', doctor);
    console.log(doctor.conditionSearch(searchInput));
  });
});
