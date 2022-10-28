
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCvaow1zRXI6jED3stqaOv-VQKk1Aih9kM",
    authDomain: "workshop-79337.firebaseapp.com",
    projectId: "workshop-79337",
    storageBucket: "workshop-79337.appspot.com",
    messagingSenderId: "50739537771",
    appId: "1:50739537771:web:cf00446210e695cb7b8e2e",
    measurementId: "G-QQ4VPT6FWB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import {getDatabase, ref, get, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

  const db = getDatabase();


  //-------------------------------------refrences--------------------------------

var Namebox = document.getElementById("Namebox");

var IDbox = document.getElementById("IDbox");

var Agebox = document.getElementById("Agebox");

var Genbox = document.getElementById("Genbox");


var Insbtn = document.getElementById("Insbtn");

var Selbtn = document.getElementById("Selbtn");

var Updbtn = document.getElementById("Updbtn");

var Delbtn = document.getElementById("Delbtn");

// ----------------------------------functions----------------------------------------


// insert function

function InsertData(){

    set(ref(db, "TheStudents/" + IDbox.value), {

        Name: Namebox.value,
        ID: IDbox.value,
        Age: Agebox.value,
        Gender: Genbox.value

    })

    .then( () => {

        alert("data stored successfully");

    })

    .catch((error) =>{

        alert("unsuccessful" + error);

    });
    


}

//select function

function SelectData(){

    const dbref = ref(db);

    get(child(dbref, "TheStudents/" + IDbox.value)).then((snapshot) =>{


        if(snapshot.exists()){

            Namebox.value = snapshot.val().Name;
            Agebox.value = snapshot.val().Age;
            Genbox.value = snapshot.val().Gender;


        }

        else{

            alert("data not found");

        }

    })

        .catch((error) =>{

            alert("unsuccessful" + error);
    
        });


}

//update function


function UpdateData(){

    update(ref(db, "TheStudents/" + IDbox.value), {

        Name: Namebox.value,
        Age: Agebox.value,
        Gender: Genbox.value

    })

    .then( () => {

        alert("data updated successfully");

    })

    .catch((error) =>{

        alert("unsuccessful" + error);

    });



}


function DeleteData(){

    remove(ref(db, "TheStudents/" + IDbox.value))

    .then( () => {

        alert("data deleted successfully");

    })

    .catch((error) =>{

        alert("unsuccessful" + error);

    });


}





// assigning the functions to the buttons

Insbtn.addEventListener('click', InsertData);

Selbtn.addEventListener('click', SelectData);

Updbtn.addEventListener('click', UpdateData);

Delbtn.addEventListener('click', DeleteData);




