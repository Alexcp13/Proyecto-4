import "./main.css"
import "./buttons.css"
import { eventos } from "../eventos/eventos";


const data = [
    {
        alex: [
            {
                name: "Alejandro Carrión Ponce",
                about: "Soy Alex, estudiante de programación Full Stack. Soy una persona disciplinada, trabajadora y que sabe funcionar en equipo, me gusta el deporte y leer en mis tiempos libres.."
            }
        ]

    },
    {
        skills: [
            [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
            ],
            [
                "Node.js",
                "MongoDB",
                "Git",
                "Front & Back Development"
            ],
        ]
    },
    {
        workExperience: './assets/gif.gif'
    },
    {
        proyectos: [
            {
                title: "Inmobiliaria Ponce",

                link: "https://github.com/Alexcp13/proyecto1",
                preview: "./assets/image.png",
            },
            {
                title: "PcComponentes",

                link: "https://github.com/Alexcp13/ProyectoFiltro",
                preview: "./assets/pccomponentes.jpg",
            }
        ]
    }
];

const navBarra2 = ["AboutMe", "Experience", "Skills", "Proyectos"]


export const main = () => {
    const main = document.createElement("main");
    const section = document.createElement("Section")
    section.id = "section"

    const fotoalex = document.createElement("img")
    fotoalex.id = "alex";
    fotoalex.src = './assets/alex2.jpg';

    const h1 = document.createElement("h1");
    h1.textContent = data[0].alex[0].name;

    const div1 = document.createElement("div");
    div1.id = "div1"

    const div2 = document.createElement("div");
    div2.id = "div2"




    const mainDiv = document.createElement("div");
    mainDiv.id = "main"
    const ul2 = document.createElement('ul');

    navBarra2.forEach(items => {

        const li2 = document.createElement('li');

        const boton = document.createElement('button');
        boton.textContent = items
        boton.addEventListener('click', () => eventos(items, div2, data,));


        li2.appendChild(boton);
        ul2.appendChild(li2);
        mainDiv.appendChild(ul2);
    });

    section.appendChild(div1);
    section.appendChild(div2);
    div1.appendChild(h1);
    div1.appendChild(fotoalex);

    div1.appendChild(mainDiv);


    main.appendChild(section);
    document.body.appendChild(main);



}