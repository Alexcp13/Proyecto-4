import "./footer.css";


const photos = [
    {
        src: '../assets/github.png',
        link: "https://github.com/Alexcp13?tab=repositories"
    },
    {
        src: '../assets/linkedin.png',
        link: "https://www.linkedin.com/in/alejandro-carrion-ponce-a755a8296/"
    },
    {
        src: '../assets/correo-electronico.png',
        link: "mailto:acp1320002@outlook.es"
    },
];


export const createFooter = () => {


    const footer = document.createElement("footer")
    footer.id = "bot"

    photos.forEach(imgs => {
        const photosTag = document.createElement("img");
        photosTag.src = imgs.src;


        photosTag.id = "photos"

        const a = document.createElement("a");
        a.href = imgs.link

        a.appendChild(photosTag)
        footer.appendChild(a)

    });

    document.body.appendChild(footer)
}