export class Layout {
    constructor() {
        this.render();
    }
    header() {
        const HTML = `
            <header class="container">
                <div class="row">
                    <div class="col-12">
                        <img src="#" alt="Logo">
                        <nav>
                            <a href="./">Home</a>
                            <a href="./services">Services</a>
                            <a href="./team">Team</a>
                            <a href="./contact-us">Contact us</a>
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }
    main() {
        const HTML = `
        <main class="container">
            <section class="row">
                <h1 class="col-12 main-title">Pirmas reikalas</h1>
            </section>
            <section class="row">
                <div class="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-2 col-xxl-1">P</div>
                <div class="col-1 m-1 m-sm-3 col-md-2 m-md-4 col-lg-4 m-xl-6 col-xxl-1 m-xxl-10">P</div>
            </section>
            <section class="row">
                <div class="col-9">Pirmas reikalas</div>
                <div class="col-2 m-1">Pirmas reikalas</div>
            </section>
            <section class="row">
                <div class="col-8">Pirmas reikalas</div>
                <div class="col-3 m-1">Pirmas reikalas</div>
            </section>
            <section class="row">
                <div class="col-7">Pirmas reikalas</div>
                <div class="col-4 m-1">Pirmas reikalas</div>
            </section>
            <section class="row">
                <div class="col-6">Pirmas reikalas</div>
                <div class="col-4 m-2">Pirmas reikalas</div>
            </section>
            <section class="row">
                <div class="col-11">Pirmas reikalas</div>
            </section>
            <section class="row">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
                <div class="col-6 col-lg-4 col-xl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
                <div class="col-6 col-lg-4 col-xl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendis similique voluptatibus sequi, deleniti, iusto  </div>
            </section>
            
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
    }
}