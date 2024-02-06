const firebaseConfig = {
    //   copy your firebase config informations

    
        apiKey: "AIzaSyDrJcKr0VzpusBQFiFFEwavKBFkELtwx5w",
        authDomain: "nexussoftware-22ae3.firebaseapp.com",
        databaseURL: "https://nexussoftware-22ae3-default-rtdb.firebaseio.com",
        projectId: "nexussoftware-22ae3",
        storageBucket: "nexussoftware-22ae3.appspot.com",
        messagingSenderId: "901746574731",
        appId: "1:901746574731:web:ef585bf2e868bdd321db8e",
        measurementId: "G-C56QHG8PNH"
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