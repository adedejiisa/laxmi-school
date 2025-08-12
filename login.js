
  const loginCorrectMsg= document.getElementById("correct-msg")
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
 const loginErrorMsg = document.getElementById("errorcontent");
const logincorrectadmin= document.getElementById(" correct-admin")
    const input = document.getElementById('password-field');
const showbtn =document.getElementById('show')
const body = document.getElementById('body')
// const main = document.getElementById('main')
const first =document.getElementById('first')
const second =document.getElementById('second')
const third =document.getElementById('third')
const fourth =document.getElementById('fourth')



showbtn.addEventListener('click', (y) => {
    y.preventDefault()
      if(input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
    
  }
 )
 loginButton.addEventListener("click", (e) => {
    e.key = 'Enter'
    e.preventDefault()
 const username = loginForm.username.value;
 const password = loginForm.password.value;


 if (username === "Olamide" && password === "ola25mide") {
 first.style.display='block';
 main.style.display ="none";
 loginCorrectMsg.style.opacity=1;


 first.innerHTML=`
     <div class="sidebar">☰</div>
  <img src="Vector (4).svg" alt="" onclick="profile.style.display = 'block'" class="refresh" id="refresh">
  <div class="profile" id="profile" style="display: none;">
    <button class="cert">View Certificate</button>
  <div>
    <img src="Vector (4).svg" alt="Profile pics" class="profpicx">
  </div>
    <h3 style="text-align:center;">Name: <span class="name">${username}</span></h3>
    <h3 style="text-align:center;">Phone: <span></span></h3>
    <h3 style="text-align:center;">Email: <span></span></h3>
    <h3 style="text-align:center;">Role: <span>Web Dev</span></h3>
    <button class="logout" style = "color:red;" onclick='window.location.reload()'> - log out </button>
  </div>
  <div style="width: 40%; height: 100%; float: left;" onclick="profile.style.display ='none'">
  </div>
  <div class="container" onclick="profile.style.display='none'">
    <header>
      <h2>Welcome back, <span>${username}</span> 👋</h2>
      <p>Here are a few updates you may have missed while you were away.</p>
    </header>

    <section class="card">
      <h3>Learning Report</h3>
      <div class="progress">
        <p>WEB DEV - Week 1 <span>0%</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p> Stage <span>1 / 8</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Overall points <span>0/100</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
    </section>

  </div>`
 }

  if (username === "Qayyum" && password === "qay25yum") {
   second.style.display='block';
    main.style.display ="none";
   loginCorrectMsg.style.opacity=1;

   second.innerHTML=`
    <div class="sidebar">☰</div>
  <img src="Vector (4).svg" alt="" onclick="profile1.style.display = 'block'" class="refresh" id="refresh1">
  <div class="profile" id="profile1" style="display: none;">
    <button class="cert">View Certificate</button>
  <div>
    <img src="Vector (4).svg" alt="Profile pics" class="profpicx">
  </div>
    <h3 style="text-align:center;">Name: <span class="name">${username}</span></h3>
    <h3 style="text-align:center;">Phone: <span></span></h3>
    <h3 style="text-align:center;">Email: <span></span></h3>
    <h3 style="text-align:center;">Role: <span>Web Dev</span></h3>
    <button class="logout" style="color:red;" onclick='window.location.reload()'> - log out </button>
  </div>
  <div style="width: 40%; height: 100%; float: left;" onclick="profile.style.display ='none'">
  </div>
  <div class="container" onclick="profile1.style.display='none'">
    <header>
      <h2>Welcome back, <span>${username}</span> 👋</h2>
      <p>Here are a few updates you may have missed while you were away.</p>
    </header>

    <section class="card">
      <h3>Learning Progress</h3>
      <div class="progress">
        <p>WEB DEV - Week 1 <span>0%</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Current Stage <span>1 / 8</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Points Overall <span>0/100</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
    </section>
  </div>
   `
 
 }
if (username === "user021" && password === "us21er") {
 main.style.display ="none";
   third.style.display='block';
   loginCorrectMsg.style.opacity=1;

   third.innerHTML=`
    <div class="sidebar">☰</div>
  <img src="Vector (4).svg" alt="" onclick="profile1.style.display = 'block'" class="refresh" id="refresh1">
  <div class="profile" id="profile1" style="display: none;">
    <button class="cert">View Certificate</button>
  <div>
    <img src="Vector (4).svg" alt="Profile pics" class="profpicx">
  </div>
    <h3 style="text-align:center;">Name: <span class="name">${username}</span></h3>
    <h3 style="text-align:center;">Phone: <span></span></h3>
    <h3 style="text-align:center;">Email: <span></span></h3>
    <h3 style="text-align:center;">Role: <span>Web Dev</span></h3>
    <button class="logout" style="color:red;" onclick='window.location.reload()'> - log out </button>
  </div>
  <div style="width: 40%; height: 100%; float: left;" onclick="profile.style.display ='none'">
  </div>
  <div class="container" onclick="profile1.style.display='none'">
    <header>
      <h2>Welcome back, <span>${username}</span> 👋</h2>
      <p>Here are a few updates you may have missed while you were away.</p>
    </header>

    <section class="card">
      <h3>Learning Progress</h3>
      <div class="progress">
        <p>WEB DEV - Week 1 <span>0%</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Current Stage <span>1 / 8</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Points Overall <span>0/100</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
    </section>
  </div>
   `
}
if (username === "user022" && password === "us22er") {
 main.style.display ="none";
  fourth.style.display='block';
   loginCorrectMsg.style.opacity=1;

   fourth.innerHTML=`
    <div class="sidebar">☰</div>
  <img src="Vector (4).svg" alt="" onclick="profile1.style.display = 'block'" class="refresh" id="refresh1">
  <div class="profile" id="profile1" style="display: none;">
    <button class="cert">View Certificate</button>
  <div>
    <img src="Vector (4).svg" alt="Profile pics" class="profpicx">
  </div>
    <h3 style="text-align:center;">Name: <span class="name">${username}</span></h3>
    <h3 style="text-align:center;">Phone: <span></span></h3>
    <h3 style="text-align:center;">Email: <span></span></h3>
    <h3 style="text-align:center;">Role: <span>Web Dev</span></h3>
    <button class="logout" style="color:red;" onclick='window.location.reload()'> - log out </button>
  </div>
  <div style="width: 40%; height: 100%; float: left;" onclick="profile.style.display ='none'">
  </div>
  <div class="container" onclick="profile1.style.display='none'">
    <header>
      <h2>Welcome back, <span>${username}</span> 👋</h2>
      <p>Here are a few updates you may have missed while you were away.</p>
    </header>

    <section class="card">
      <h3>Learning Progress</h3>
      <div class="progress">
        <p>WEB DEV - Week 1 <span>0%</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Current Stage <span>1 / 8</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
      <div class="progress">
        <p>Points Overall <span>0/100</span></p>
        <div class="bar"><div style="width:1%"></div></div>
      </div>
    </section>
  </div>
   `

}
if (username === "NQA005" && password === "po12k") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
  fifth.style.display='block'
}
if (username === "NQA006" && password === "uiy43") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
  sixth.style.display='block';
}
if (username === "NQA007" && password === "don23") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
   seventh.style.display='block';
}
if (username === "NQA008" && password === "koj45") {
   loginCorrectMsg.style.opacity=1;
 main.style.display ="none";
eigth.style.display='block';

}if (username === "NQA009" && password === "had32") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
ninth.style.display='block';
}if (username === "NQA010" && password === "jyo98") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
tenth.style.display='block';
}
if (username === "NQA011" && password === "ond32") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
   eleventh.style.disply='block';
}if (username === "NQA012" && password === "hgo45") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
   twelveth.style.display='block';
}
if (username === "NQA013" && password === "1wevs") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
thirteenth.style.display='block';
}
if (username === "NQA014" && password ==="lac39") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
fourteenth.style.display='block';
}
if (username === "NQA015" && password === "rfd23") {
   loginCorrectMsg.style.opacity=1;
   main.style.display ="none";
fifteenth.style.display='block';
}
// if (username === "0015" && password === "jh87u") {
//   loginCorrectMsg.style.opacity=1;
// }
else {
   loginErrorMsg.style.opacity = 1;
}
})

 

// demo credentials to store (only for local/demo use)
// ensure users array exists in localStorage
// if (!localStorage.getItem('users')) {
//   localStorage.setItem('users', JSON.stringify([demoUser]));
// }

// const loginbtn = document.getElementById('login-form-submit');
// const loginform = document.getElementById('login-form'); // ensure this ID exists
// const Main = document.getElementById('main'); // ensure this ID exists
//  const loginErrorMsg = document.getElementById("errorcontent");
//   const loginCorrectMsg= document.getElementById("correct-msg")

// loginbtn.addEventListener('click', (e) => {
//   e.preventDefault(); // stop form submission

//   const username = loginform.username.value;
//   const password = loginform.password.value;
//   if(
//     username ==='faruq'  && password==='lateef'
//   )
// {
//     Main.style.display='block'
//      loginCorrectMsg.style.opacity = 1;


// }
// const demoUser = {username, password };

//   const users = JSON.parse(localStorage.getItem('users') || '[]');
//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     // mark as logged in
//     localStorage.setItem('currentUser', JSON.stringify({ username: user.username }));
//     Main.style.display = 'block';
//     // optionally hide login form
//     loginform.style.display = 'none';
//   } else {
//     // alert('Invalid username or password');
//      loginErrorMsg.style.opacity = 1;

//   }
// });
