// var config = {
//     apiKey: "AIzaSyAcCsp_1wcbimGlS4lKAtxlNz55p5-HbX4",
//     authDomain: "bootcamp-project-1-47c35.firebaseapp.com",
//     databaseURL: "https://bootcamp-project-1-47c35.firebaseio.com",
//     projectId: "bootcamp-project-1-47c35",
//     storageBucket: "bootcamp-project-1-47c35.appspot.com",
//     messagingSenderId: "692503538126"
// };
// firebase.initializeApp(config);


// datebase Var
var userDatabase = firebase.database()

// $("#login").on("click", function (event) {
//     event.preventDefault()
//     var input = $("#loginUser").val()
//     console.log(input)
// })

// $("#singUpBtn").on("click", function () {
//     // event.preventDefault()
//     var input = $("#registerUser").val()
//     console.log(input)
// })


//register button, need to upload to firebase.
$("#signUpBtn").on("click", function () {

    var user = $("#registerUser").val()
    
    console.log(user)
    
    userDatabase.ref('/'+user)
    
    var newUser = {
        user: user,
        // myEvents:{
    
        // }
    }
    
    })

