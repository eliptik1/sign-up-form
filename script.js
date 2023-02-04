const pass1 = document.getElementById("password")
const pass2 = document.getElementById("confirm")

pass1.addEventListener("input", validate)
pass2.addEventListener("input", validate)

function validate() {
    if (pass1.value === pass2.value) {
        pass2.setCustomValidity("")
    } else {
        pass2.classList.add(":invalid")
        pass2.setCustomValidity("Passwords do not match")
    }
}