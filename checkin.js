document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");
    const checkinTimeInput = document.getElementById("checkin_time");
    // const checkoutDateInput = document.getElementById("checkout_date");
    const timeInInput = document.getElementById("time_in");
    const timeOutInput = document.getElementById("time_out");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Calculate time of stay
        const checkinTime = new Date(checkinTimeInput.value);
        // const checkoutDate = new Date(checkoutDateInput.value);
        const timeDiff = Math.abs(ckoutcheDate.getTime() - checkinTime.getTime());
        const timeInHours = Math.ceil(timeDiff / (1000 * 60 * 60)); // Convert milliseconds to hours
        timeInInput.value = timeInHours;

        // You can handle other form submission logic here, e.g., sending data to server
        console.log("Form submitted!");

         // Redirect to another page
         window.location.href = "feedback.html";
    });
});
