function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthMessage = document.getElementById("strengthMessage");

    // Regular expressions for checking different conditions
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLengthValid = password.length >= 8;

    let strength = "";

    // Check the strength based on the password criteria
    if (isLengthValid && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = "Excellent";
        strengthMessage.style.color = "green";
    } else if (isLengthValid && hasUpperCase && hasLowerCase && hasNumbers) {
        strength = "Strong";
        strengthMessage.style.color = "blue";
    } else if (isLengthValid && hasUpperCase && hasLowerCase) {
        strength = "Very Good";
        strengthMessage.style.color = "orange";
    } else if (isLengthValid && hasLowerCase) {
        strength = "Good";
        strengthMessage.style.color = "red";
    } else {
        strength = "Weak";
        strengthMessage.style.color = "gray";
    }

    // Display the password strength message
    strengthMessage.textContent = `Password Strength: ${strength}`;
}
