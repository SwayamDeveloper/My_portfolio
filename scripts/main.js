// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
const firebaseConfig = {
  apiKey: "AIzaSyCn_StnaSMRdwbW7B8uS0DJhMivKM_zbUU",
  authDomain: "portfolio-fe160.firebaseapp.com",
  databaseURL: "https://portfolio-fe160-default-rtdb.firebaseio.com",
  projectId: "portfolio-fe160",
  storageBucket: "portfolio-fe160.appspot.com",
  messagingSenderId: "60647493932",
  appId: "1:60647493932:web:d2f63524adb41f9d749c89",
  measurementId: "G-0CNKDHR3ZB"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};