import { LitElement, html, css } from '@polymer/lit-element'
import { anchorRoute, gotoRoute } from './../Router'
import Auth from './../Auth'
import App from './../App'

customElements.define('va-app-header', class AppHeader extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated() {
    super.firstUpdated()
    this.navActiveLinks()
  }

  navActiveLinks() {
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if (navLink.href.slice(-1) == '#') return
      if (navLink.pathname === currentPath) {
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick() {
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }

  menuClick(e) {
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })
  }

  render() {
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }

      .app-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: var(--app-header-height);
        color: black;
        display: flex;
        z-index: 9;
        align-items: center;
        margin-top: 2%;


      }
      

      .app-header-main {
        flex-grow: 1;
        display: flex;
        align-items: center;
        
      }

      .app-header-main::slotted(h1){
        color: black;
      }

      .app-logo a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        padding: .6em;
        display: inline-block;  
        margin-top: 4%;
      
      }

      .app-logo img {
        width: 90px;
      }
      
      .hamburger-btn::part(base) {
        color: black;
      }

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .app-top-nav a {
        display: inline-block;
        padding: .8em;
        text-decoration: none;
        color: black;
      }
      
      .app-side-menu-items a {
        display: block;
        padding: .5em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
      }

      .app-side-menu-logo {
        width: 120px;
        margin-bottom: 1em;
        position: absolute;
        top: 2em;
        left: 1.5em;
      }

      .page-title {
        color: var(--app-header-txt-color);
        margin-right: 0.5em;
        font-size: var(--app-header-title-font-size);
      }

      /* active nav links */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
        color: black;
      }

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .app-top-nav {
          display: none;
        }
      }

    </style>

    <header class="app-header">
      <sl-icon-button class="hamburger-btn" name="list" @click="${this.hamburgerClick}" style="font-size: 1.5em;"></sl-icon-button>       
      
      <div class="app-header-main">
        ${this.title ? html`
          <h1 class="page-title">${this.title}</h1>
        `: ``}
        <slot></slot>
      </div>

      <nav class="app-top-nav">
        <a href="/" @click="${anchorRoute}">2021</a>   
        ${this.user.accessLevel == 2 ? html`
        <a href="/newHaircut" @click="${anchorRoute}">Add</a>        

        `: html``}  

   
        <sl-dropdown>
          <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
          </a>
          <sl-menu>            
            <sl-menu-item @click="${() => gotoRoute('/')}">What I do</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/joke')}">My projects</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/')}">Get to know </sl-menu-item>
            <sl-menu-item @click="${() => Auth.signOut()}">Contact me</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </nav>
    </header>

    <sl-drawer class="app-side-menu" placement="left">
      <nav class="app-side-menu-items">
        <a href="/" @click="${this.menuClick}">Home</a>
        <a href="/" @click="${this.menuClick}">What I do </a>
        <a href="/" @click="${this.menuClick}">My Projects</a>         
        <a href="/joke" @click="${this.menuClick}">Joke</a>
        <a href="/" @click="${this.menuClick}">Let's work together</a>
        <a href="/" @click="${this.menuClick}">Contact me</a>
      </nav>  
    </sl-drawer>
    `
  }

})

