import $ from 'jquery';
import { DoctorSearch } from './../src/script-backend.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
    $('#searchInput').on('change', function () {
        // event.preventDefault();
        let search;
        let searchInput = $('#searchInput').val();
        search = new DoctorSearch();
        console.log(search);
        console.log(search.conditionSearch(searchInput));
        console.log(search.doctorSearch(searchInput));
    });
});
