import "./eventos.css"

export const eventos = (items, div2, data,) => {
    div2.innerHTML = "";
    const divContent = document.createElement("div")
    div2.appendChild(divContent)
    divContent.id = "TvContent"
    switch (items.toLowerCase()) {
        case "aboutme":
            const p2 = document.createElement("p")
            p2.textContent = data[0].alex[0].about;
            divContent.appendChild(p2)
            break;

        case "experience":
            const gif = document.createElement("img");
            gif.src = data[2].workExperience;
            gif.id = "gif";
            divContent.appendChild(gif)
            break;

        case "skills":
            const ulSkills = document.createElement('ul');
            ulSkills.id = "ulTele"
            data[1].skills[0].forEach(skill => {
                const liSkill = document.createElement('li');
                liSkill.textContent = skill;
                ulSkills.appendChild(liSkill);
            });
            const ulSkills2 = document.createElement('ul');
            ulSkills2.id = "ulTele"

            data[1].skills[1].forEach(skill => {
                const liSkill2 = document.createElement('li');
                liSkill2.textContent = skill;
                ulSkills2.appendChild(liSkill2);
            });


            divContent.appendChild(ulSkills);
            divContent.appendChild(ulSkills2);
            break;
        case "proyectos":
            const ulProyectos = document.createElement('ul');
            data[3].proyectos.forEach((proyecto) => {
                const liProyecto = document.createElement("li");
                liProyecto.style = "list-style:none"

                const pTitulo = document.createElement("p");
                pTitulo.textContent = proyecto.title;
                liProyecto.appendChild(pTitulo);

                const a = document.createElement("a");
                a.href = proyecto.link;

                const img = document.createElement("img");
                img.src = proyecto.preview;
                img.id = "fotos"

                a.appendChild(img);
                liProyecto.appendChild(a);

                ulProyectos.appendChild(liProyecto);
            });


            divContent.appendChild(ulProyectos);

            break;
        default:
            break;
    }
}
