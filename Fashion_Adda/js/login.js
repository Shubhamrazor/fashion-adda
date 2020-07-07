const loginBtn = document.querySelector(".loginbtn");
const signUp = document.querySelector(".signUp");

const loginPage = document.querySelector(".login-page");
const signupPage = document.querySelector(".signup-page");

loginBtn.addEventListener("click",()=>{
    signupPage.classList.add("inactive");
    loginPage.classList.remove("inactive");
    loginBtn.classList.add("white");
    loginBtn.classList.remove("blue");
    signUp.classList.add("blue");
    signUp.classList.remove("white");

})

signUp.addEventListener("click",()=>{
    loginPage.classList.add("inactive");
    signupPage.classList.remove("inactive");
    loginBtn.classList.add("blue");
    loginBtn.classList.remove("white");
    signUp.classList.add("white");
    signUp.classList.remove("blue");
})

