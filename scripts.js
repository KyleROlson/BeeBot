  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyBkD7l-Ac5OC9K6YyxD3NCTvRLhXKXf8bU",
  	authDomain: "beebot-9cd51.firebaseapp.com",
  	databaseURL: "https://beebot-9cd51.firebaseio.com",
  	projectId: "beebot-9cd51",
  	storageBucket: "beebot-9cd51.appspot.com",
  	messagingSenderId: "859648244847"
  };
  firebase.initializeApp(config);
  var displayName = "";

  //Takes user's name, email, and password as parameters and creates an account
  function signUp(name, email, password) {
  	var nameValue = name;
  	var emailValue = email;
  	var passwordValue = password;
  	console.log(emailValue);
  	if (!firebase.apps.length) {
  		firebase.initializeApp({});
  	}
  	firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue).then(function(user) {
  		var user = firebase.auth().currentUser;
  		user.updateProfile({
  			displayName: nameValue
  		}).then(function() {
  			window.location = 'dashboard.html';
  		}, function(error) {
  			if (error) {
  				alert("Incomplete Information");
  			}
  		});
  	}, function(error) {
  		var errorCode = error.code;
  		if (errorCode == 'auth/weak-password') {
  			alert('The password is too weak.');
  		} else {
  			alert(error);
  		}
  	});
  }

  //Takes an email and password as parameters and will redirect to the dashboard if successful.
  function signIn(email, password) {
  	var emailValue = email;
  	var passwordValue = password;
  	firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
  		displayName = user.displayName;
  		window.location = 'dashboard.html';
  	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		if (errorCode === 'auth/wrong-password') {
  			alert('Wrong password.');
  		} else {
  			alert(errorMessage);
  		}
  		console.log(error);
  	});
  	firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
  			displayName = user.displayName;
  			var email = user.email;
  			var uid = user.uid;
  			var providerData = user.providerData;
  		} else {}
  	});
  }

  //When called, will remove the Firebase authorization and then redirect to the login page.
  function signOut() {
  	firebase.auth().signOut().then(function() {
  		console.log('Signed Out');
  		window.location = 'index.html';
  	}, function(error) {
  		console.error('Sign Out Error', error);
  	});
  }

  //Function called when dashboard is opened, loads content from user's account.
  function loadContent() {
  	firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
  			document.getElementById("userMsg").innerHTML = "Welcome back, " + user.displayName + "<a href='#' id ='signOutBtn'>! Not you?</a>";
            console.log(user.uid);
            var leadsRef = firebase.database().ref('/users/' + user.uid);
            var printCount = 0;
            leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
                console.log(childData);
                if (printCount == 0){
                document.getElementById("humid").innerHTML = childData + "%";
                printCount++;
                }
              else{
                document.getElementById("temp").innerHTML = childData + "° F";
              }
            });
               printCount = 0;
});
        
  			document.getElementById("signOutBtn").onclick = function() {
  				signOut();
  			};
  		} else {
  			console.log("Check");
  		}
  	});
  }
function alreadySignedIn(){
    firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
        window.location = 'dashboard.html';
        }
    });
}
