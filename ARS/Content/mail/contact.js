/*$(function () {
    $("#loginForm input, #loginForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) { },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var email = $("input#email").val();
            var password = $("input#password").val();

            // Password validation
            var passwordPattern = /^(?=.*[A-Z])(?=.*\d)/;
            if (!passwordPattern.test(password)) {
                showError(
                    "Error: Password should contain at least one uppercase letter and one number."
                );
                return;
            }

            // Disable submit button
            var $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            // Simulate form submission (Replace this with your own logic)
            setTimeout(function () {
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success").html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
                );
                $("#success > .alert-success").append(
                    "<strong>Logged In Successfully.</strong>"
                );
                $("#success > .alert-success").append("</div>");
                $this.prop("disabled", false);
                $("#loginForm").trigger("reset");
            }, 1000);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$("#email, #password").focus(function () {
    $("#success").html("");
});

function showError(errorMessage) {
    $("#success").html("<div class='alert alert-danger'>");
    $("#success > .alert-danger").html(
        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
    );
    $("#success > .alert-danger").append($("<strong>").text(errorMessage));
    $("#success > .alert-danger").append("</div>");
    $("#loginForm").trigger("");
}

// Booking form validation
$(function () {
    $("#Booking input, #Booking textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) { },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var cnic = $("input#cnic").val();
            var origin = $("select#origin").val();
            var destination = $("select#destination").val();
            var date = $("input#date").val();
            var mobileNo = $("input#MobileNo").val();

            // Perform form validation
            if (
                !name ||
                !email ||
                !cnic ||
                !origin ||
                !destination ||
                !date ||
                !mobileNo
            ) {
                showError("Please fill in all required fields.");
                return;
            }

            // Validate CNIC format
            var cnicPattern = /^\d{13}$/;
            if (!cnicPattern.test(cnic)) {
                showError("CNIC should be a 13-digit number.");
                return;
            }

            // Validate email format
            var emailPattern = /^\S+@\S+\.\S+$/;
            if (!emailPattern.test(email)) {
                showError("Please enter a valid email address.");
                return;
            }

            // Validate origin and destination
            if (origin === destination) {
                showError("Origin and destination cannot be the same.");
                return;
            }
            var mobileNoPattern = /^\d{11}$/;
            if (!mobileNoPattern.test(mobileNo)) {
                showError("Mobile number should be an 11-digit number.");
                return;
            }

            // Validate date
            var currentDate = new Date().toISOString().split("T")[0];
            if (date < currentDate) {
                showError("Please select a date equal to or after today.");
                return;
            }

            // Disable submit button
            var $this = $("#submitButton");
            $this.prop("disabled", true);

            // Simulate form submission (Replace this with your own logic)
            setTimeout(function () {
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success").html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
                );
                $("#success > .alert-success").append(
                    "<strong>Booking Successful.Once Your Ticket Gets Confirmed You Will Recieve An Email.</strong>"
                );
                $("#success > .alert-success").append("</div>");
                $this.prop("disabled", false);
                $("#Booking").trigger("reset");
            }, 1000);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$("#name, #email, #cnic, #origin, #destination, #date,#MobileNo").focus(
    function () {
        $("#success").html("");
    }
);

function showError(errorMessage) {
    $("#success").html("<div class='alert alert-danger'>");
    $("#success > .alert-danger").html(
        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
    );
    $("#success > .alert-danger").append($("<strong>").text(errorMessage));
    $("#success > .alert-danger").append("</div>");
    $("#Booking").trigger("");
}

////registartion form validation
//$(function () {
//    $(
//        "#registrationForm input, #registrationForm textarea"
//    ).jqBootstrapValidation({
//        preventSubmit: true,
//        submitError: function ($form, event, errors) { },
//        submitSuccess: function ($form, event) {
//            event.preventDefault();
//            var fname = $("input#Fname").val();
//            var lname = $("input#lname").val();
//            var email = $("input#email").val();
//            var password = $("input#password").val();
//            var dob = $("input#dob").val();
//            var gender = $("input#gender").val();
//            var mobileNo = $("input#mobileNo").val();

//            console.log(password, "password");
//            console.log(dob, "dob");
//            console.log(gender, "gender");

//            // Password validation
//            var passwordPattern = /^(?=.*[A-Z])(?=.*\d)/;
//            if (!passwordPattern.test(password)) {
//                showError(
//                    "Error: Password should contain at least one uppercase letter and one number."
//                );
//                return false; // Prevent form submission
//            }

//            // Date validation
//            var datePattern = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d{4}$/;
//            if (!datePattern.test(dob)) {
//                showError("Please enter a valid date in the format DD-MM-YYYY.");
//                return false; // Prevent form submission
//            }

//            // Validate day, month, and year
//            var day = parseInt(dob.split("-")[0]);
//            var month = parseInt(dob.split("-")[1]);
//            var year = parseInt(dob.split("-")[2]);

//            if (day < 1 || day > 31) {
//                showError("Please enter a valid day (1-31).");
//                return false; // Prevent form submission
//            }

//            if (month < 1 || month > 12) {
//                showError("Please enter a valid month (1-12).");
//                return false; // Prevent form submission
//            }

//            if (year < 1947 || year > 2023) {
//                showError("Please enter a valid year (1947-2023).");
//                return false; // Prevent form submission
//            }

//            // Gender validation
//            if (
//                gender !== "male" &&
//                gender !== "female" &&
//                gender !== "Male" &&
//                gender !== "Female" &&
//                gender !== "MALE" &&
//                gender !== "FEMALE" &&
//                gender !== "MaLE" &&
//                gender !== "FEMaLE" &&
//                gender !== "mALE" &&
//                gender !== "femALE" &&
//                gender !== "MaLe" &&
//                gender !== "FeMaLe"
//            ) {
//                showError("Please enter a valid gender ('male' or 'female').");
//                return false; // Prevent form submission
//            }

//            // Mobile number validation
//            var mobilePattern = /^(03\d{9}|92\d{10})$/;
//            if (!mobilePattern.test(mobileNo)) {
//                showError("Please enter a valid mobile number starting with '03' or '92'.");
//                return false; // Prevent form submission
//            }

//            // Disable submit button
//            var $this = $("#sendMessageButton");
//            $this.prop("disabled", true);

//            console.log("here!!!!");
//            setTimeout(function () {
//                $("#success").html("<div class='alert alert-success'>");
//                $("#success > .alert-success").html(
//                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
//                );
//                $("#success > .alert-success").append(
//                    "<strong>Signed In Successfully.</strong>"
//                );
//            }



//    }



$(document).ready(function () {
    // Handle form submission
    $('#loginFormContainer').on('submit', 'form', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        $('#loginFormContainer .text-danger').remove();

        // Get form data
        var formData = $(this).serialize();

        // Perform client-side validation
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        var errorMessages = [];

        if (email === '') {
            errorMessages.push('Email is required.');
        }

        if (password === '') {
            errorMessages.push('Password is required.');
        }

        // Display error messages
        if (errorMessages.length > 0) {
            var errorHtml = '<div class="text-danger">';
            errorHtml += '<ul>';

            for (var i = 0; i < errorMessages.length; i++) {
                errorHtml += '<li>' + errorMessages[i] + '</li>';
            }

            errorHtml += '</ul></div>';

            $(this).prepend(errorHtml);
        } else {
            var formElement = this; // Store reference to the form element

            // Disable the button during AJAX request
            $('#submitButton').prop('disabled', true);

            // Perform AJAX form submission
            $.ajax({
                url: $(this).attr('action'),
                type: $(this).attr('method'),
                data: formData,
                success: function (response) {
                    // Handle success response
                    if (response === 'success') {
                        // Display success message
                        var successMessage = '<div class="text-success">Login successful.</div>';
                        $(formElement).prepend(successMessage);

                        // Clear input fields
                        $('#email').val('');
                        $('#password').val('');

                        // Refresh the page after a delay
                        setTimeout(function () {
                            location.reload();
                        }, 2000); // Refresh after 2 seconds (adjust as needed)
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    // Handle error response
                },
                complete: function () {
                    // Enable the button after AJAX request completes
                    $('#submitButton').prop('disabled', false);
                }
            });
        }
    });
});

*/