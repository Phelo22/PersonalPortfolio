// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCnjG1Eh9GoE9-YVu2XbMvL8-kYT1aHv6I",
    authDomain: "contact-form-29f13.firebaseapp.com",
    databaseURL: "https://contact-form-29f13.firebaseio.com",
    projectId: "contact-form-29f13",
    storageBucket: "contact-form-29f13.appspot.com",
    messagingSenderId: "819734469379",
    appId: "1:819734469379:web:c0ad5df4182eed0618e736",
    measurementId: "G-1TPDGN0J07"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
  
    // Save message
    saveMessage(name, subject, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject:subject,
      email:email,
      message:message,
     
    });
  }