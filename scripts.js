// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDa4dEbVJXF5Gkca-r8V4GsqshVB5_Rg7Y",
  authDomain: "website-def91.firebaseapp.com",
  databaseURL: "https://website-def91.firebaseio.com",
  projectId: "website-def91",
  storageBucket: "website-def91.appspot.com",
  messagingSenderId: "892062937858",
  appId: "1:892062937858:web:4009b8a94e6dd4b72f081b",
  measurementId: "G-80K1QGZCKE"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}