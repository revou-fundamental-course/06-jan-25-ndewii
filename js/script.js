// Ini File Javascript

console.log('Hello World!')

//Fuction to change user-name
function replaceName() {
    let user = prompt("Siapa nama Anda?","");
    document.getElementById("user").innerHTML = user
}

replaceName ();

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;

    changeBackground();
}

//Fuction to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    console.log(bannerList.length);

    console.log(indexBanner);
    if (indexBanner > bannerList.length - 1) {
        //Reset indexBanner
        indexBanner = 0; 
    }

    //Looping to change background
    for(let i = 0; i < bannerList.length; i++){
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);

//Fuction to validate form
function formValidation() {
    let nameInput = document.getElementById('name').value;
    let birthInput = document.getElementById('birth').value;
    let messagesInput = document.getElementById('messages').value;

    console.log(nameInput);
    console.log(birthInput);
    console.log(messagesInput);
    //Condition for validate form
    if (nameInput =="" || birthInput =="" || messagesInput =="") {
        alert('Tidak boleh ada yang kosong!');
    } else{
        //Display result form
        document.getElementById('name-input').innerHTML = nameInput;
        document.getElementById('birth-input').innerHTML = birthInput;
        document.getElementById('messages-input').innerHTML = messagesInput;
    }
}

document.getElementById('submit').addEventListener('click', formValidation);

function displayGender() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById('gender-input').innerHTML
                = "" + ele[i].value;
    }
}

document.getElementById('submit').addEventListener('click', displayGender);

// Get current date and time
function currentTime() {
    var now = new Date();
    var datetime = now.toLocaleString();

    document.getElementById('input-time').innerHTML = now; datetime;
}

document.getElementById('submit').addEventListener('click', currentTime);