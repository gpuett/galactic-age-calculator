import { Age } from './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const average = new Age(78);

  $("#seconds").click(function() {
    let age = new Age($("#age").val());
    $("#outputSeconds").text(`You are ${age.inSeconds()} seconds old.`);
  });
  $("#mercury").click(function() {
    let age = new Age($("#age").val());
    $("#outputPlanet").text(`You would be ${Math.ceil(age.mercury())} years old on Mercury.`);
  });
  $("#venus").click(function() {
    let age = new Age($("#age").val());
    $("#outputPlanet").text(`You would be ${Math.ceil(age.venus())} years old on Venus.`);
  });
  $("#mars").click(function() {
    let age = new Age($("#age").val());
    $("#outputPlanet").text(`You would be ${Math.ceil(age.mars())} years old on Mars.`);
  });
  $("#jupiter").click(function() {
    let age = new Age($("#age").val());
    $("#outputPlanet").text(`You would be ${Math.ceil(age.jupiter())} years old on Jupiter.`);
  });
  $("#ageDiff").click(function() {
    let birthdate = new Date($("#birthdate").val());
    let today = new Date();
    let age = Math.abs(today.getTime() - birthdate.getTime());
    let ageSec = Math.ceil(age / 1000);
    $("#exactAge").text(`Your exact age is ${ageSec} seconds.`);
  });
  $("#earthExpec").click(function() {
    let age = new Age($("#age").val());
    let yearsLeft = (average.years - age.years);
    if (yearsLeft > 0) {
      $("#outputExpectancy").text(`You have an average of ${yearsLeft} Earth years left to live.`);
    } else if (yearsLeft === 0) {
      $("#outputExpectancy").text(`Your time is up!`);
    } else {
      $("#outputExpectancy").text(`You have lived ${Math.abs(yearsLeft)} Earth years longer than the average.`);
    }
  });
  $("#mercuryExpec").click(function() {
    let age = new Age($("#age").val());
    let yearsLeft = Math.ceil(average.mercury() - age.mercury());
    if (yearsLeft > 0) {
      $("#outputExpectancy").text(`You have an average of ${yearsLeft} Mercury years left to live.`);
    } else if (yearsLeft === 0) {
      $("#outputExpectancy").text(`Your time is up!`);
    } else {
      $("#outputExpectancy").text(`You have lived ${Math.abs(yearsLeft)} Mercury years longer than the average.`);
    }
  });
  $("#venusExpec").click(function() {
    let age = new Age($("#age").val());
    let yearsLeft = Math.ceil(average.venus() - age.venus());
    if (yearsLeft > 0) {
      $("#outputExpectancy").text(`You have an average of ${yearsLeft} Venus years left to live.`);
    } else if (yearsLeft === 0) {
      $("#outputExpectancy").text(`Your time is up!`);
    } else {
      $("#outputExpectancy").text(`You have lived ${Math.abs(yearsLeft)} Venus years longer than the average.`);
    }
  });
  $("#marsExpec").click(function() {
    let age = new Age($("#age").val());
    let yearsLeft = Math.ceil(average.mars() - age.mars());
    if (yearsLeft > 0) {
      $("#outputExpectancy").text(`You have an average of ${yearsLeft} Mars years left to live.`);
    } else if (yearsLeft === 0) {
      $("#outputExpectancy").text(`Your time is up!`);
    } else {
      $("#outputExpectancy").text(`You have lived ${Math.abs(yearsLeft)} Mars years longer than the average.`);
    }
  });
  $("#jupiterExpec").click(function() {
    let age = new Age($("#age").val());
    let yearsLeft = Math.ceil(average.jupiter() - age.jupiter());
    if (yearsLeft > 0) {
      $("#outputExpectancy").text(`You have an average of ${yearsLeft} Jupiter years left to live.`);
    } else if (yearsLeft === 0) {
      $("#outputExpectancy").text(`Your time is up!`);
    } else {
      $("#outputExpectancy").text(`You have lived ${Math.abs(yearsLeft)} Jupiter years longer than the average.`);
    }
  });
});
