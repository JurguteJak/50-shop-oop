import { PageContact } from "./PageContact.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageTeam } from "./PageTeam.js";

export class Layout {
    constructor() {
        this.pagesData = [
            {
                text: 'Home',
                content: PageHome,
                background: 'pink',
                title: 'Home',
            },
            {
                text: 'Services',
                content: PageServices,
                background: 'aqua',
                title: 'Our service',
            },
            {
                text: 'Team',
                content: PageTeam,
                background: 'orange',
                title: 'Our team',
            },
            {
                text: 'Contact us',
                content: PageContact,
                background: 'yellow',
                title: 'Contant us',
            },
        ];
        this.render();
    }
    header() {
        let navHTML = '';

        for (const link of this.pagesData) {
            navHTML += `<button class="link">${link.text}</button>`;
        }

        const HTML = `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-content">
                        <img class="logo" src="./img/logo.png" alt="Logo">
                        <nav class="hidden visible-sm-flex main-nav">
                            ${navHTML}
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }

    headerEvents() {
        const buttonsDOM = document.querySelectorAll('.main-header-content button');
        const mainDOM = document.querySelector('main.container');
        const titleDOM = document.querySelector('head title');

        for (let i = 0; i < buttonsDOM.length; i++) {
            const buttonDOM = buttonsDOM[i];
            buttonDOM.addEventListener('click', () => {
                const pageClass = this.pagesData[i].content;
                mainDOM.innerHTML = (new pageClass().render());
                document.body.style.backgroundColor = this.pagesData[i].background;
                titleDOM.textContent = this.pagesData[i].title;
            });
        }
    }

    main() {
        const pageObject = new PageContact();
        const HTML = `
        <main class="container">
            ${pageObject.render()}      
        </main>`;
        return HTML;
    }

    footer() {
        const HTML = `<footer clascol-12">&copy; Copyright 2024</footer>`;
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);

        this.headerEvents();
    }
}