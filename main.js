import { createbackbutton } from "./function";

const data = {
  name: "Alejandro Carrión Ponce",
  address: "calle orion, mijas costa",
  email: "acp1320002@outlook.es",
  avatar: "./assets/fotoalex.jpg",
  aboutMe: "Soy Alex, estudiante de programación full stack, soy una persona disciplinada, trabajadora y que sabe funcionar en equipo, me gusta el deporte y leer en mis tiempos libes.",

  education: {
    university: "Ingenieria mecánica en la UCO",
    relevantCourses: "Full stack thepowerMBA"


  },
  workExperience: "Coming soon...",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScrpt",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "Front & Back Development"
  ],
  proyects: [
    {
      title: "Inmoviliaria ponce",
      descripcion: "Página web para una inmobiliaria",
      link: "https://github.com/Alexcp13/proyecto1",
      preview: "./assets/image.png",
    },
    {
      title: " PcComponentes",
      descripcion: "Recreación de la página PcComponentes",
      link: "https://github.com/Alexcp13/ProyectoFiltro",
      preview: "./assets/pc.png",
    },

  ],
};




const header = document.createElement("header");
header.id = "top";

const titulo = document.createElement("h1");
titulo.textContent = data.name

const logo = document.createElement("img");
logo.src = "./assets/alex.jpg";
logo.alt = "Logo";
logo.id = "logo";


header.appendChild(titulo);
header.appendChild(logo);
document.body.appendChild(header);

const section = document.createElement("section");
section.id = "section1"





const button1 = document.createElement("button");
button1.id = "boton"
button1.textContent = "Education"

const firstdiv = document.createElement("div");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.textContent = data.education.relevantCourses;
p2.textContent = data.education.university;


const div1 = document.createElement("div");
div1.id = "div1"

const back1 = createbackbutton()

div1.appendChild(p2)
div1.appendChild(p1)
div1.appendChild(back1);
firstdiv.appendChild(button1)
firstdiv.appendChild(div1);
section.appendChild(firstdiv);

const button2 = document.createElement("button");
button2.id = "boton"
button2.textContent = "Experience"

const firstdiv2 = document.createElement("div");

const p3 = document.createElement("p");
p3.textContent = data.workExperience;

const div2 = document.createElement("div");
div2.id = "div2"

const back2 = createbackbutton()

div2.appendChild(p3)
div2.appendChild(back2);
firstdiv2.appendChild(button2)
firstdiv2.appendChild(div2);
section.appendChild(firstdiv2);

const button3 = document.createElement("button");
button3.id = "boton"
button3.textContent = "Skills"

const firstdiv3 = document.createElement("div");

const p4 = document.createElement("p");
p4.textContent = data.skills;

const div3 = document.createElement("div");
div3.id = "div3"

const back3 = createbackbutton()

div3.appendChild(p4);
div3.appendChild(back3);
firstdiv3.appendChild(button3)
firstdiv3.appendChild(div3);
section.appendChild(firstdiv3);

const button4 = document.createElement("button");
button4.id = "boton"
button4.textContent = "Proyects"

const firstdiv4 = document.createElement("div");


const div4 = document.createElement("div");
div4.id = "div4"

const img1 = document.createElement("img");
img1.src = "./assets/pclogo.jpg";
img1.id = "proyecto"

const anchor1 = document.createElement("a");
anchor1.href = "url_del_enlace_para_la_primera_imagen";

const img2 = document.createElement("img");
img2.src = "./assets/image.png";
img2.id = "proyecto"

const anchor2 = document.createElement("a");
anchor2.href = "url_del_enlace_para_la_segunda_imagen";

const back4 = createbackbutton()

anchor1.appendChild(img1);
anchor2.appendChild(img2);
div4.appendChild(anchor1);
div4.appendChild(anchor2);
div4.appendChild(back4);
firstdiv4.appendChild(button4)
firstdiv4.appendChild(div4);
section.appendChild(firstdiv4);



document.body.appendChild(section);

const headerElement = document.getElementById("top");
headerElement.parentNode.insertBefore(section, headerElement.nextSibling);


button1.addEventListener("click", function () {

  div1.style.display = "block";
});

back1.addEventListener("click", function () {

  div1.style.display = "none";
});

button2.addEventListener("click", function () {

  div2.style.display = "block";
});

back2.addEventListener("click", function () {

  div2.style.display = "none";
});

button3.addEventListener("click", function () {

  div3.style.display = "block";
});

back3.addEventListener("click", function () {

  div3.style.display = "none";
});

button4.addEventListener("click", function () {

  div4.style.display = "block";
});

back4.addEventListener("click", function () {

  div4.style.display = "none";
});



const bot = document.createElement('footer')

const footerimg1 = document.createElement('img');
footerimg1.src = './assets/link.png';

footerimg1.id = "footerfoto"

const footerimg2 = document.createElement('img');
footerimg2.src = './assets/git.jpg';

footerimg2.id = "footerfoto"


bot.appendChild(footerimg1);

bot.appendChild(footerimg2);

document.body.appendChild(bot)









