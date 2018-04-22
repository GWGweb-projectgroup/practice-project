$(document).ready(function() {


  // list drop down functionality

  // $('.left-sidebar__list-item.dropdown').on('click', function() {
  //   $(this).next('li').toggleClass('remove-dropdown');
  // });

  $('.left-sidebar__list-item.dropdown').on('click', function() {
    $(this).next('li').toggle();
  });






});