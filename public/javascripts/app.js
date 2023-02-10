
/*!
 * Express Project v1.0
 * Name : kumari shelja
 * Student Id: 301296403
 * Date : Febraury 7, 2023
 */


// Function to Handle form submission 

$("#formsubmitted").submit(function (event) {
    alert("Your message was sent, thank you!");
    document.location = '/';
    event.preventDefault();
});