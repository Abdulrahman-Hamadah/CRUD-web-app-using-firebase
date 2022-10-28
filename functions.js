
 ////////////////////////////////////////////////////////////////////////////CONFIG SECTION////////////////////////////////////////////////////////////////////////////

// in firebase website, go to project setting > choose your web app > under the "SDK setup and configuration" section choose CDN and copy the code and paste it here








// we will also import other stuff to make our CRUD web app work.
  import {getDatabase, ref, get, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

  const db = getDatabase();


//////////////////////////////////////////////////////////////////////////REFERENCES SECTION///////////////////////////////////////////////////////////////////////////

var Namebox = document.getElementById("Namebox");

var IDbox = document.getElementById("IDbox");

var Agebox = document.getElementById("Agebox");

var Genbox = document.getElementById("Genbox");


var Insbtn = document.getElementById("Insbtn");

var Selbtn = document.getElementById("Selbtn");

var Updbtn = document.getElementById("Updbtn");

var Delbtn = document.getElementById("Delbtn");

//////////////////////////////////////////////////////////////////////////                 



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




