import { Controller } from "@hotwired/stimulus"
import flatpickr from 'flatpickr';
// import { FlatpickrFn } from "../types/instance";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log('test stimukus', this.element)
    
    flatpickr(".start_time", {
      // enableTime: true,
      // dateFormat: "F j, Y h:i K",
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });
    flatpickr(".end_time");
  }

}
