console.log("welcome on this page")

const modalbtn = document.querySelectorAll('.model-open')
const closebtn = document.querySelectorAll('.modal-close');
const modalcontent = document.querySelectorAll('.modal-content')

function locationof(e) {
    var x;
    var y;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= gCanvasElement.offsetLeft;
    y -= gCanvasElement.offsetTop;
}

// for (let i = 0; i < modalbtn.length; i++) {
//     const btn = modalbtn[i];
//     // console.log(btn)
//     btn.addEventListener('click', () => {
//         const modal = btn.getAttribute("data-modal")
//         console.log(modalcontent[i].style.margin - top)
//         document.getElementById(modal).style.display = "block";
//     })
// }

for(let k = 0; k< modalbtn.length; k ++){
    const btn = modalbtn[k];
    btn.addEventListener('click', ()=>{
        const modal = btn.getAttribute("data-modal")
        const div = document.getElementById(modal)
        fetch(`./modals/${modal}.html`).then(res=>res.text())
        .then(data=>{
            console.log(div)
            console.log("here is done")
            div.innerHTML = data;
            div.style.display = "block";
            history.pushState(null,null, `#${modal}`)
        })
    })
}




window.onclick = function (e) {
    if (e.target.className === 'modal') {
        e.target.style.display = "none";
        history.pushState(null,null, "http://127.0.0.1:5500/RN-webpage/RN%20website/index.html")
    }
}


const navbar = document.querySelector('.navbar')
console.log(navbar)
window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        // navbar.style.display = "none"
        navbar.style.background = '#222'
    } else {
        // navbar.style.display = "block"
        navbar.style.background = 'transparent'
    }
}

const sendbtn = document.querySelector('.sendbtn')

sendbtn.addEventListener('click',()=>{
    Email.send({
        SecureToken : "eab6f597-d43b-44ef-914f-4a68130d92de",
        To: "nitrozradio56@gmail.com",
        From: document.getElementById('youremail').value,
        Subject : document.getElementById('yoursubject').value,
        Body: document.getElementById('yourmsg').value 
    }).then(msg=>alert("The email successfully sent"))
})

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