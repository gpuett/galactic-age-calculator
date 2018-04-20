import { Age } from './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#seconds").click(function(event) {
    let age = new Age($("#age").val());
    $("#outputSeconds").text(`You are ${age.inSeconds()} seconds old`);

  })
});
