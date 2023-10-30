import { user } from '../login'; 
document.addEventListener("DOMContentLoaded", function () {
    var name = document.querySelector("#name");
    name.value = user;
});