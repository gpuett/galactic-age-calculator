import { Age } from './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#seconds").click(function() {
    let age = new Age($("#age").val());
    $("#outputSeconds").text(`You are ${age.inSeconds()} seconds old.`);
  });
  $("#mercury").click(function() {
    let age = new Age($("#age").val());
    $("#outputMercury").text(`You would be ${age.mercury()} years old on Mercury.`);
  });
  $("#venus").click(function() {
    let age = new Age($("#age").val());
    $("#outputVenus").text(`You would be ${age.venus()} years old on Venus.`);
  });
  $("#mars").click(function() {
    let age = new Age($("#age").val());
    $("#outputMars").text(`You would be ${age.mars()} years old on Mars.`);
  });
  $("#jupiter").click(function() {
    let age = new Age($("#age").val());
    $("#outputJupiter").text(`You would be ${age.jupiter()} years old on Jupiter.`);
  });
  $("#ageDiff").click(function() {
    let birthdate = new Date($("#birthdate").val());
    let today = new Date();
    let age = Math.abs(today.getTime() - birthdate.getTime());
    let ageSec = Math.ceil(age / 1000);
    $("#exactAge").text(`Your exact age is ${ageSec} seconds.`)
  });
});
