
//   const loginCorrectMsg= document.getElementById("correct-msg")
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
//  const loginErrorMsg = document.getElementById("errorcontent");
// const logincorrectadmin= document.getElementById(" correct-admin")
//     const input = document.getElementById('password-field');
// const showbtn =document.getElementById('show')
// // const first =document.getElementById('first')


// showbtn.addEventListener('click', (y) => {
//     y.preventDefault()
//       if(input.type === 'password') {
//       input.type = 'text';
//     } else {
//       input.type = 'password';
//     }
    
//   }
//  )
//  welcome.textContent =`Welcome ${password.value}`
// //  function register(username,password){
// //     const users =JSON.parse(localStorage.getItem('users') || '[]');
// //     users.push({username,password});
// //     localStorage.setItem('users', JSON.stringify(users));
// //  }

//  loginButton.addEventListener("click", (e) => {
//     e.key = 'Enter'
//     e.preventDefault()
//  const username = loginForm.username.value;
//  const password = loginForm.password.value;

//  if (username === "olamide" && password === "sam025") {
//  first.style.display='block';
//  main.style.display ="none";
//  loginCorrectMsg.style.opacity=1;
//  }

//   if (username === "NQA002" && password === "lam025") {
//    second.style.display='block';
//     main.style.display ="none";
//    loginCorrectMsg.style.opacity=1;
 
//  }
// if (username === "NQA003" && password === "lax73") {
//  main.style.display ="none";
//    third.style.display='block';
//    loginCorrectMsg.style.opacity=1;
// }
// if (username === "NQA004" && password === "lop34") {
//  main.style.display ="none";
//   fourth.style.display='block';
//    loginCorrectMsg.style.opacity=1;

// }
// if (username === "NQA005" && password === "po12k") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
//   fifth.style.display='block'
// }
// if (username === "NQA006" && password === "uiy43") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
//   sixth.style.display='block';
// }
// if (username === "NQA007" && password === "don23") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
//    seventh.style.display='block';
// }
// if (username === "NQA008" && password === "koj45") {
//    loginCorrectMsg.style.opacity=1;
//  main.style.display ="none";
// eigth.style.display='block';

// }if (username === "NQA009" && password === "had32") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
// ninth.style.display='block';
// }if (username === "NQA010" && password === "jyo98") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
// tenth.style.display='block';
// }
// if (username === "NQA011" && password === "ond32") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
//    eleventh.style.disply='block';
// }if (username === "NQA012" && password === "hgo45") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
//    twelveth.style.display='block';
// }
// if (username === "NQA013" && password === "1wevs") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
// thirteenth.style.display='block';
// }
// if (username === "NQA014" && password ==="lac39") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
// fourteenth.style.display='block';
// }
// if (username === "NQA015" && password === "rfd23") {
//    loginCorrectMsg.style.opacity=1;
//    main.style.display ="none";
// fifteenth.style.display='block';
// }
// // if (username === "0015" && password === "jh87u") {
// //   loginCorrectMsg.style.opacity=1;
// // }
// else {
//    loginErrorMsg.style.opacity = 1;
// }
// })

 

// demo credentials to store (only for local/demo use)
// ensure users array exists in localStorage
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([demoUser]));
}

const loginbtn = document.getElementById('login-form-submit');
const loginform = document.getElementById('login-form'); // ensure this ID exists
const Main = document.getElementById('main'); // ensure this ID exists
 const loginErrorMsg = document.getElementById("errorcontent");
  const loginCorrectMsg= document.getElementById("correct-msg")

loginbtn.addEventListener('click', (e) => {
  e.preventDefault(); // stop form submission

  const username = loginform.username.value;
  const password = loginform.password.value;
  if(
    username ==='faruq'  && password==='lateef'
  )
{
    Main.style.display='block'
     loginCorrectMsg.style.opacity = 1;


}
const demoUser = {username, password };

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // mark as logged in
    localStorage.setItem('currentUser', JSON.stringify({ username: user.username }));
    Main.style.display = 'block';
    // optionally hide login form
    loginform.style.display = 'none';
  } else {
    // alert('Invalid username or password');
     loginErrorMsg.style.opacity = 1;

  }
});