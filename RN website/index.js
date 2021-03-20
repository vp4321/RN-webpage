console.log("welcome on this page")

const modalbtn = document.querySelectorAll('.model-open')

const modalcontent = document.querySelectorAll('.modal-content')


//....................for modal fetch ..................

for (let k = 0; k < modalbtn.length; k++) {
    const btn = modalbtn[k];
    btn.addEventListener('click', () => {
        const modal = btn.getAttribute("data-modal")
        const div = document.getElementById(modal)
        fetch(`./modals/${modal}.html`).then(res => res.text())
            .then(data => {
                // console.log(div)

                // console.log("here is done")
                div.innerHTML = data;
                div.style.display = "block";
                history.pushState(null, null, `#${modal}`)
                // const closebtn = document.querySelectorAll('.modal-close')
                const closebtn = document.getElementById(`trybtn${k}`)
                console.log(closebtn,k)
                closebtn.addEventListener('click',()=>{
                    div.style.display = "none"
                    // console.log('event fired')
                })
            })
    })
}


//....................... for close modal click on window ...................

window.onclick = function (e) {
    if (e.target.className === 'modal') {
        e.target.style.display = "none";
        history.pushState(null, null, "http://127.0.0.1:5500/RN-webpage/RN%20website/index.html")
    }
}


const navbar = document.querySelector('.navbar')

//..................... for send email ....................

const sendbtn = document.querySelector('.sendbtn')


sendbtn.addEventListener('click', () => {
    const body = "Name: " + document.getElementById('yourname').value + '<br>' + "Message: " + document.getElementById('yourmsg').value
    Email.send({
        SecureToken: "eab6f597-d43b-44ef-914f-4a68130d92de",
        To: "nitrozradio56@gmail.com",
        From: document.getElementById('youremail').value,
        Subject: document.getElementById('yoursubject').value,
        Body: body
    }).then(msg =>{
         alert("The email successfully sent")
         document.getElementById('yourname').value = "";
         document.getElementById('youremail').value = "";
         document.getElementById('yoursubject').value = "";
         document.getElementById('yourmsg').value = "";
    })
})


//..................for navbar...........................


const he = document.querySelector('.header').offsetHeight - 40
const replace = document.querySelector('.replace')
// const navbar = document.querySelector('.navbar')
console.log(he)
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > he || document.documentElement.scrollTop > he) {
        console.log("event fired")
        navbar.classList.add('fixed')
        navbar.style.background = '#222'
        navbar.style.display = "block"
        // navbar.style.padding = "0.2rem 0.5rem"
        // replace.style.display = "block";
    }
    else {
        navbar.classList.remove('fixed')
        navbar.style.background = 'transparent'
        navbar.style.display = "none"
        // replace.style.display = "none"
    }
})


// window.addEventListener('scroll',()=>{
//     if(document.body.scrollTop > he || document.documentElement.scrollTop > he){
//         console.log("event fired")
//         navbar.classList.add('fixed')
//     }
//     else{
//         navbar.classList.remove('fixed')
//     }
// })
// function sendemail(e) {

//     Email.send({
//         name: document.getElementById('yourname').value,
//         Host : "smtp.gmail.com",
//         Username : "nitrozradio56@gmail.com",
//         Password : "[&hGt}$GLwOzE$(",
//         To : document.getElementById('youremail').value,
//         From : "nitrozradio56@gmail.com",
//         Subject : document.getElementById('yoursubject').value,
//         Body: document.getElementById('yourmsg').value,

//     }).then(function(response){
//         console.log(response)
//         if(response == 'OK'){
//             alert("Mail Sent Succeessfully");
//         }else{
//             throw new Error("Error: "+ response.statusText);
//         }
//     });
// }

// 432605


     //.................... for preloader ................................

const preloader = document.getElementById('loading');

function myFunction() {
    setTimeout(() => {
        preloader.style.display = "none"
    }, 2000);

}