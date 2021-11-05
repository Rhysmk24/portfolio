import App from './../../App'
import { html, render } from 'lit-html'
import { gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import gsap from 'gsap'

class HomeView {

  init() {
    console.log('HomeView.init')
    document.title = 'Home'
    this.render()
    gsap.from('.header-img', { rotation: -600, x: -1100, duration: 7, ease: 'power0.out' })

  }



  // when using an anchor tag or button > use anchor route function so page doesnt reload 
  render() {
    const template = html`

      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
        <p class="spacing"></p>
      
        <div class="section">
          <img src="./../../images/header-img.png" class="header-img">
      
          <div class="yellow-cirle1"></div>
          <div class="yellow-cirle2"></div>
      
      
        </div>
        <br>
      
        <div class="section second">
      
          <svg class="svg-wave-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1a1617" fill-opacity="1"
              d="M0,64L120,106.7C240,149,480,235,720,245.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path>
          </svg>
      
          <br>
      
          <h1 class="hero-text"> <span class="header-text-block">HEY I'M</span>
            <span class="header-text-block">RHYS</span>
          </h1>
      
      
        </div>
      
        <div class="section third">
      
          <svg class="svg-wave-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
              d="M0,320L120,293.3C240,267,480,213,720,197.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path>
          </svg>
      
          <br>
      
          <h1 class="hero-text2"> <span class="header-text-block">I'M A</span> <span class="header-text-block2">DIGITAL</span>
            <span class="header-text-block2">DESIGNER</span>
          </h1>
      
          <p class="body-text1">I MAKE SOME PRETTY COOL STUFF</p>
          <div class="yellow-text-highlight1"></div>
      
          <br>
      
      
        </div>
      
        <br>
      
        <div class="section ">
      
          <h1 class="hero-text3"> <span class="header-text-block">WHAT I</span> <span
              class="header-text-block">CURRENTLY</span>
            <span class="header-text-block">USE</span>
          </h1>
      
          <div class="tool-img-con">
            <img src="./../../images/vscode.png" class="tool-img">
            <img src="./../../images/xd.png" class="tool-img">
            <img src="./../../images/ps.png" class="tool-img">
            <img src="./../../images/node.png" class="tool-img">
      
          </div>
      
          <p class="body-text2">This section is under construction</p>
          <div class="yellow-text-highlight2"></div>
      
          <div class="section">
            <div class="project-img-con">
      
              <img src="./../../images/groupfitness.png" class="project-img">
              <img src="./../../images/curtincompanion.png" class="project-img">
              <img src="./../../images/mambry.png" class="project-img">
            </div>
      
      
          </div>
      
          <br>
      
          <div class="section fourth">
      
            <svg class="svg-wave-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#1a1617" fill-opacity="1"
                d="M0,64L120,106.7C240,149,480,235,720,245.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
              </path>
            </svg>
      
            <br>
      
            <h1 class="hero-text"> <span class="header-text-block">Let's Work Together</span>
            </h1>
      
      
          </div>
      
      
      
      
      
      
      
      
        </div>
      
      
      
      
      
      
      
      
      
      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()