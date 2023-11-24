function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

    var icon=document.getElementById("moon_icon");
    var linkedinicon=document.getElementById("linkedin");
    var githubicon=document.getElementById("github");
    var instaicon=document.getElementById("insta");
    var twittericon=document.getElementById("twitter");
    var link_2=document.getElementById("link2");
    var mail_2=document.getElementById("mail2");
  icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src="./img/sun.png";
      linkedinicon.src="./img/lidark.png";
      githubicon.src="./img/ghdark.png";
      instaicon.src="./img/igdark.png";
      twittericon.src="./img/twdark.png";
      link_2.src="./img/lidark.png";
      mail_2.src="./img/mail2.png";
    }
    else{
      icon.src="./img/moon.png";
      linkedinicon.src="./img/linkedin_2.png";
      githubicon.src="./img/github_2.png";
      instaicon.src="./img/instagram.png";
      twittericon.src="./img/x_2.png";
      link_2.src="./img/linkedin_2.png";
      mail_2.src="./img/email.png";
    }
  }

  var iconres=document.getElementById("moon_icon_res");
  iconres.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      iconres.src="./img/sun.png";
      linkedinicon.src="./img/lidark.png";
      githubicon.src="./img/ghdark.png";
      instaicon.src="./img/igdark.png";
      twittericon.src="./img/twdark.png";
      link_2.src="./img/lidark.png";
      mail_2.src="./img/mail2.png";
    }
    else{
      iconres.src="./img/moon.png";
      linkedinicon.src="./img/linkedin_2.png";
      githubicon.src="./img/github_2.png";
      instaicon.src="./img/instagram.png";
      twittericon.src="./img/x_2.png";
      link_2.src="./img/linkedin_2.png";
      mail_2.src="./img/email.png";
    }
  }

  window.addEventListener('scroll', reveal);
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

  //progress bars

  const container = document.querySelector(".container");

  const courses = [
    { course: "HTML", percent: 99, color: "#f06400" },
    { course: "CSS", percent: 65, color: "#2965f1" },
    { course: "JavaScript", percent: 35, color: "#F0DB4F" },
    { course: "Git", percent: 85, color: "#835da2" }
  ];

  courses.forEach((course) => {
    container.innerHTML += `
    <div class="progress-group">
    <div class="circular-progress" >
      <span class="course-value" style="color:${course.color}">0%</span>
    </div>
    <label class="text" style="color:${course.color}">${course.course}</label>
  </div>
    `;
  });
  
  const progressGroups = document.querySelectorAll(".progress-group");

  progressGroups.forEach((progress, index) => {
    let progressStartValue = 0;
    let progressStartEnd = courses[index].percent;
    let speed = 100;
    let progressTimer = setInterval(() => {
      progressStartValue++;
      if (progressStartValue == progressStartEnd) {
        clearInterval(progressTimer);
      }
      progress.querySelector(".circular-progress").style.background = `
      conic-gradient(${courses[index].color} ${3.6 * progressStartValue}deg, #fff 0deg)`;
  
      progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
    }, speed);
  });

 //prog languages

  const container2 = document.querySelector(".container-2");

  const courses2 = [
    { course: "JAVA", percent: 70, color: "#5382a1" },
    { course: "C", percent: 75, color: "#4c73f2" },
    { course: "PYTHON", percent: 89, color: "#f9b233" },
  ];
  
  courses2.forEach((course) => {
    container2.innerHTML += `
    <div class="progress-group-2">
    <div class="circular-progress-2" >
      <span class="course-value-2" style="color:${course.color}">0%</span>
    </div>
    <label class="text" style="color:${course.color}">${course.course}</label>
  </div>
    `;
  });
  
  const progressGroups2 = document.querySelectorAll(".progress-group-2");
  
  progressGroups2.forEach((progress, index) => {
    let progressStartValue = 0;
    let progressStartEnd = courses2[index].percent;
    let speed = 100;
    let progressTimer = setInterval(() => {
      progressStartValue++;
      if (progressStartValue == progressStartEnd) {
        clearInterval(progressTimer);
      }
      progress.querySelector(".circular-progress-2").style.background = `
      conic-gradient(${courses2[index].color} ${3.6 * progressStartValue}deg, #fff 0deg)`;
  
      progress.querySelector(".course-value-2").innerHTML = progressStartValue + "%";
    }, speed);
  });