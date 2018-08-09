import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BikeService } from './bike-service.js';

$(document).ready(function() {
  $('#allBikes').click(function() {
    let bikeService = new BikeService();  // create instance of WeatherService class

      let promise = bikeService.getAllStolenBikes();  // call the instance method and pass in user input
      promise.then(function(response) {
        for(var x=0; x<3; x++) {
        let body = JSON.parse(response);
        console.log(body);
        $('.showHumidity').append(`<h3>Title: ${body.bikes[x].title}</h3><p>Frame Color: ${body.bikes[x].frame_colors}</p>`);
        }
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});
