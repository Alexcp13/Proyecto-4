import "./header.css"
const navBarra = ["GitHub", "LinkedIn", "Contacto"]

export const header = () => {


    const header = document.createElement("header");
    header.id = "top";


    const logo = document.createElement("img")
    logo.id = "casa"
    logo.src = './assets/casa.png';

    const burguer = document.createElement("img")
    burguer.id = "burguer"
    burguer.src = "../assets/menu.png"



    const nav1 = document.createElement("nav");
    nav1.id = "nav1"

    navBarra.forEach(items => {
        const ul = document.createElement('ul');
        const li = document.createElement('li');

        const anchor = document.createElement('a');

        anchor.textContent = items;
        anchor.href = '#';

        li.appendChild(anchor);
        ul.appendChild(li);
        nav1.appendChild(ul);
    });


    header.appendChild(logo);
    header.appendChild(burguer)
    header.appendChild(nav1);
    document.body.appendChild(header);
}
