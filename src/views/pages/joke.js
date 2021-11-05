import App from '../../App'
import { html, render } from 'lit-html'
import { gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class JokeView {
  async init() {
    document.title = 'joke'
    this.joke = null
    this.render()
    Utils.pageIntroAnim()
    this.joke = await this.getJoke()
    this.render()
    console.log(this.joke)
  }

  async getJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')

    // Problem if getting repsonse 
    if (!response.ok) {
      Toast.show('Problem getting jokes', 'error')
      return data
    }

    const data = await response.json()
    return data

  }

  render() {
    const template = html`
      <va-app-header title="joke" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Jokes</h1>
        <p>Joking ...</p>

        ${this.joke ? html`
        <h2>${this.joke.value}</h2>
        `: html`
        <sl-spinner></sl-spinner>

        `}
        
      

        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new JokeView()