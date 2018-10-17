function getValue(){
    option=document.getElementById("new").value;
    if(option=="yes"){
        registerPage();
    }
    else
    loginPageWithExistingId();
}
function registerPage(){
    window.location="registerPage.html";
}
function loginPage(){
    window.location="loginPage.html";
}
function getValueByRegistrationPage(){
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    emailId=document.getElementById("emailId").value;
    password=document.getElementById("password").value;
    localStorage.setItem("password",password);
    localStorage.setItem("emailId",emailId);
    loginPage();
}
function successfullLogin(){
    id=document.getElementById("email").value;
    pass=document.getElementById("pass").value;

    if(id==localStorage.getItem("emailId") && pass==localStorage.getItem("password")){
        window.alert("You are successfully logged in!");
        window.location="bookTicket.html";
    }
    else
    {
        window.alert("Wrong Credentials!! Please Login again!!");
        window.location="loginPage.html";
    }
}
function loginPageWithExistingId(){
    window.location="staticLoginPage.html";
}
function getMovieTicketValue(){
    numberOfTickets=document.getElementById("numberOfTickets").value;
    nameOfMovie= document.getElementById("movie").value;
    localStorage.setItem("numberOfTickets",numberOfTickets);
    localStorage.setItem("nameOfMovie",nameOfMovie);
    fair= calculateFair();
    window.alert("Total Movie Ticket is:" +fair);
    window.location="TotalFair.html";
}
function calculateFair(){
    window.alert(localStorage.getItem("nameOfMovie"));
    switch(nameOfMovie){
        case "Yeh Jawani H Diwani": return numberOfTickets*300;
        case "Main Hoon Na": return numberOfTickets*250;
        case "Tomb Raider": return numberOfTickets* 200;
        case "The NUN": return numberOfTickets*200;
        case "Kick": return numberOfTickets*250
        case "Anabelle": return numberOfTickets*350;
        default: return 0;
    }
}

function printTicket(){
    document.write("Successfully Paid"+"<div />");
    document.write("Number of tickets is: " + localStorage.getItem("numberOfTickets")+"<div />");
    document.write("Name of the Movie: "+localStorage.getItem("nameOfMovie")+"<div />");
}
function successfullStaticLogin(){
    id=document.getElementById("email").value;
    pass=document.getElementById("pass").value;
    if(id=="saurav.manchanda2009@gmail.com" && pass=="sauravmanchanda"){
        window.alert("You are successfully logged in!");
        window.location="bookTicket.html";
    }
    else{
        window.alert("Wrong Credentials!! Please Login again!!");
        window.location="staticLoginPage.html";
    }
}