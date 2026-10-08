
let galleryButton = document.getElementById("galleryButton");
let travelGallery = document.getElementById("travelGallery");

galleryButton.onclick = function() {

    if (travelGallery.classList.contains("show")) {

        travelGallery.classList.remove("show");
        galleryButton.innerText = "Travel Gallery";

    } else {

        travelGallery.classList.add("show");
        galleryButton.innerText = "Hide Gallery";

    }

};
// Google Maps Location

const locationButtons =
    document.querySelectorAll(".location-btn");

locationButtons.forEach(function(button) {

    button.onclick = function() {

        const location =
            button.getAttribute("data-location");

        const mapUrl =
            "https://www.google.com/maps/search/?api=1&query="
            + encodeURIComponent(location);

        window.open(mapUrl, "_blank");

    };

});

// Contact Form Validation
// Contact Form Validation

document.getElementById("contactForm").onsubmit =
function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    // Validation patterns

    const namePattern = /^[A-Za-z ]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation

    if (!namePattern.test(name)) {

        alert("Please enter a valid name using letters only.");

        return;
    }

    // Email validation

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }

    // Phone validation

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }

    // Successful submission

    alert("Thank you for contacting Yātrā!");

    this.reset();

};
