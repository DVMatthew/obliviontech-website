(function() {
    var config = {
    apiKey: "AIzaSyC4N_ikBTYJLMrPyjIgZI6vJXFx0hJrs40",
    authDomain: "oblivion-tech-login.firebaseapp.com",
    databaseURL: "https://oblivion-tech-login.firebaseio.com",
    projectId: "oblivion-tech-login",
    storageBucket: "oblivion-tech-login.appspot.com",
    messagingSenderId: "750869295682"
  };
    firebase.initializeApp(config);
    
    // Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogOut = document.getElementById('btnLogOut');
    const btnSignUp = document.getElementById('btnSignUp');
    
    // Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, password);      
        promise.catch(e => console.log(e.message));

        window.location.href = "main.html";

    });
    
    
    // Sign up Event
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        
        // Sign In
        const promise = auth.createUserWithEmailAndPassword(email, password);      
        promise.catch(e => console.log(e.message));
                   
    });
    
    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogOut.classList.remove('hide');
        }
        else {
            console.log("not logged in");
            btnLogOut.classList.add('hide');
        }
        
        
    });
    
    
    
}());