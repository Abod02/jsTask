let username = prompt("Enter your username:");
let attempts = 0;
let password;


while (attempts < 5) {
    password = prompt("Enter the password:");
    if (password === "123") {
        alert("Welcome!");
        break;  
    } else {
        attempts++;
        if (attempts === 5) {
            alert("Please try again later");
        }
    }
}
