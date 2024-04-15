import "./header.css"
const navBarra = [
    {
        name: 'GitHub',
        link: "https://github.com/Alexcp13?tab=repositories"
    },
    {
        name: 'LinkedIn',
        link: "https://www.linkedin.com/in/alejandro-carrion-ponce-a755a8296/"
    },
    {
        name: 'Contacto',
        link: "mailto:acp1320002@outlook.es"
    },
];

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
        anchor.textContent = items.name;
        anchor.href = items.link





        li.appendChild(anchor);
        ul.appendChild(li);
        nav1.appendChild(ul);
    });


    header.appendChild(logo);
    header.appendChild(burguer)
    header.appendChild(nav1);
    document.body.appendChild(header);
}
