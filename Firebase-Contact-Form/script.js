var firebaseConfig = {
  apiKey: "AIzaSyDo6O374FundBh9kiZks9GwsddN4ht5ENs",
  authDomain: "contact-form-132b4.firebaseapp.com",
  projectId: "contact-form-132b4",
  storageBucket: "contact-form-132b4.appspot.com",
  messagingSenderId: "409328881429",
  appId: "1:409328881429:web:5fae913772418dc5e4a31c"
};



firebase.initializeApp(firebaseConfig);



let contactInfo = firebase.database().ref("information");




document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let pnumber = document.querySelector(".pnumber").value;
  let message = document.querySelector(".message").value;
  console.log(name, email,pnumber,message);

  saveContactInfo(name,email,pnumber,message);
  alert("Your Message has been sent Successfully. Thank You!");
  document.querySelector(".contact-form").reset();
}




function saveContactInfo(name,email,pnumber,message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    pnumber:pnumber,
    message: message,
  });
}
