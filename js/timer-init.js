$(document).ready(function(){
  //ТАЙМЕР
  $(".device-time").countdown({until: new Date(2016, 05-1, 5), format: 'dHM'});
  $(".device-time").countdown($.countdown.regionalOptions['ru']);

});
