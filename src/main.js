import $ from 'jquery';
import { DoctorSearch } from './doctor-service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#searchInput').on('change', function () {
    let search;
    let searchInput = $('#searchInput').val();
    search = new DoctorSearch();
    search.doctorSearchByName(searchInput);
    console.log('Doctor: ', doctor);
    console.log(search.conditionSearch(searchInput));
  });
});
