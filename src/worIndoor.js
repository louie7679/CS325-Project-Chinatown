"use strict";

// Wor food icon of seasons
var modalworseasons = document.getElementById("modal-wor-seasons");
var fiworseasons = document.getElementById("fi-wor-seasons");
var span = document.getElementsByClassName("close")[0];
fiworseasons.onclick = function() {
    modalworseasons.style.display = "block";
  }
  span.onclick = function() {
    modalworseasons.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworseasons.style.display = "none";
    }
  }

// Wor food icon of tandoor
var modalwortandoor = document.getElementById("modal-wor-tandoor");
var fiwortandoor = document.getElementById("fi-wor-tandoor");
var span1 = document.getElementsByClassName("close")[1];
fiwortandoor.onclick = function() {
    modalwortandoor.style.display = "block";
  }
  span1.onclick = function() {
    modalwortandoor.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwortandoor.style.display = "none";
    }
  }

// Wor food icon of pizza
var modalworpizza = document.getElementById("modal-wor-pizza");
var fiworpizza = document.getElementById("fi-wor-pizza");
var span2 = document.getElementsByClassName("close")[2];
fiworpizza.onclick = function() {
    modalworpizza.style.display = "block";
  }
  span2.onclick = function() {
    modalworpizza.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworpizza.style.display = "none";
    }
  }

// Wor food icon of desserts
var modalwordesserts = document.getElementById("modal-wor-desserts");
var fiwordesserts = document.getElementById("fi-wor-desserts");
var span3 = document.getElementsByClassName("close")[3];
fiwordesserts.onclick = function() {
    modalwordesserts.style.display = "block";
  }
  span3.onclick = function() {
    modalwordesserts.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwordesserts.style.display = "none";
    }
  }

  // Wor food icon of street food
var modalworstreet = document.getElementById("modal-wor-street");
var fiworstreet = document.getElementById("fi-wor-street");
var span4 = document.getElementsByClassName("close")[4];
fiworstreet.onclick = function() {
    modalworstreet.style.display = "block";
  }
  span4.onclick = function() {
    modalworstreet.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalworstreet.style.display = "none";
    }
  }

  // Wor food icon of noodle bowl
var modalwornoodle = document.getElementById("modal-wor-noodle");
var fiwornoodle = document.getElementById("fi-wor-noodle");
var span5 = document.getElementsByClassName("close")[5];
fiwornoodle.onclick = function() {
    modalwornoodle.style.display = "block";
  }
  span5.onclick = function() {
    modalwornoodle.style.display = "none";
  }
 window.onclick = function(event) {
    if (event.target == modal) {
        modalwornoodle.style.display = "none";
    }
  }

// Filter
var modalworfilter = document.getElementById("modal-wor-filter");
var worfilter = document.getElementById("wor-filter");
var span6 = document.getElementsByClassName("close")[6];
worfilter.onclick = function() {
    modalworfilter.style.display = "block";
 }
  span6.onclick = function() {
    modalworfilter.style.display = "none";
  }
window.onclick = function(event) {
    if (event.target == modal) {
        modalworfilter.style.display = "none";
    }
  }

