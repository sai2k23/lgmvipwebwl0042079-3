function displayData() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Registration Details:</h2>" +
                          "<p><strong>First Name:</strong> " + firstName + "</p>" +
                          "<p><strong>Last Name:</strong> " + lastName + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>";
}