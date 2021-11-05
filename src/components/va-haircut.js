import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import { anchorRoute, gotoRoute } from './../Router'
import Auth from './../Auth'
import App from './../App'
import UserAPI from './../UserAPI'
import Toast from './../Toast'

customElements.define('va-haircut', class Haircut extends LitElement {
    // allows us to add extra code
    constructor() {

        super()
    }

    // static = defines our properties/attribute 
    static get properties() {
        return {
            id: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            price: {
                type: Object
            },
            user: {
                type: Object
            },
            image: {
                type: String
            },
            gender: {
                type: String
            },
            length: {
                type: String
            }
        }
    }

    // gets fired when page first loaded 
    firstUpdated() {

        // super = refers to parent class 
        super.firstUpdated()
    }

    moreInfoHandler() {
        // create a sl-dialog
        const dialogEl = document.createElement('sl-dialog')

        //add className
        dialogEl.className = 'haircut-dialog'

        const dialogContent = html`
        
        <style>
            .wrap {
            display: flex;
            }
            .image {
            width: 50%;
            }
            .image img {
            width: 100%;
            border-radius: 10px;
            }
            .content {
            padding-left: 1em;
            }
            .gender span,
            .length span {
            text-transform: uppercase;
            font-weight: bold;
            }
            .price{
                font-size: 1.5em;
                color: var(--brand-color)
                
            }

        </style>

        <div class="wrap">
            <div class="image">
            <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
        </div>

        <div class="content">
          <h1>${this.name}</h1>
          <p>${this.description}</p>
          <p class="price">$${this.price}</p>
          <p class="gender">Gender: <span>${this.gender}</span></p>
          <p class="length">Length: <span>${this.length}</span></p>
      
          <sl-button @click=${this.addFavHandler.bind(this)}>
            <sl-icon slot="prefix" name="heart-fill"></sl-icon>
            Add to Favourites
          </sl-button>
        </div>
      </div>
    
      `
        render(dialogContent, dialogEl)

        // append to body 
        document.body.append(dialogEl)

        // show dialoge 
        dialogEl.show()

        // on hide, delete the dialoge el
        dialogEl.addEventListener('sl-after-hide', () => {
            dialogEl.remove()
        })

    }

    async addFavHandler() {
        try {
            await UserAPI.addFavHaircut(this.id)
            Toast.show('Haircut added to favourites')
        } catch (err) {
            Toast.show(err, 'error')
        }
    }

    render() {
        return html`
        <style>
            .author{
                font-size: 0.9em;
                font-style: italic;
                opacity: 0.8;
            }
        
        </style>

        <sl-card>
            <img slot="image" src="${App.apiBase}/images/${this.image}"/>
            <h2>${this.name}</h2>
            <h3>$${this.price}</h3>
            <p class="author"> By ${this.user.firstName} ${this.user.lastName}</p>
            <sl-button @click=${this.moreInfoHandler.bind(this)}>More Info</sl-button>
            <sl-tooltip content="Add to favourites">
            <sl-icon-button name="plus-circle-fill" style="font-size: 1.5rem" label="schedule" @click=${this.addFavHandler.bind(this)}></sl-icon-button>
            </sl-tooltip>

        </sl-card>  

        `
    }

})
