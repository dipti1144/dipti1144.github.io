// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.getElementById("resume-link-1").addEventListener("click",()=>{
      window.open("https://drive.google.com/file/d/1dpOJ34pbCxdVmbZV97BmKG_jxrlJiyKO/view?usp=sharing","_blank")
})

document.getElementById("resume-button-2").addEventListener("click",()=>{
      window.open("https://drive.google.com/file/d/1dpOJ34pbCxdVmbZV97BmKG_jxrlJiyKO/view?usp=sharing","_blank")
})