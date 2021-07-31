const specialists = [
    {
        "specialist": "Kim MacQuarrie",
        "tag": "Four-time Emmy-winning <br>filmmaker",
        "description": "Anthropologist, and conser-<br> vationist, Kim MacQuarrie is<br> our Chief Peru Expert. As an<br> author of best-sellers such<br> as The Last Days of the Incas<br> and Life and Death in the<br> Andes, he’s one of our<br> go-to’s when we have ques-<br> tions about Peru’s past."
    },
    {
        "specialist": "Javier Puente",
        "tag": "Professor of Latin American<br> and Latino/a Studies at<br> Smith College in Massachu-<br>setts",
        "description": "Dr. Javier Puente contributes<br> his endless knowledge of<br> Peru’s past and present. As a<br> Peruvian scholar, his person-<br>al knowledge and research<br> inspires Inca Expert to pro-<br>mote responsible travel,<br> ensuring Peru remains as<br> beautiful as it is now. Javi-<br>er's expertise is featured on<br> CNN as an Inca Expert Spe-<br>cialist."
    },
    {
        "specialist": "Alonso Cueto",
        "tag": "Ph.D. in Philosophy, Univer-<br>sity of Texas. Award-winning<br> author",
        "description": "Widely translated author and<br> recipient of Guggenheim<br> Foundation grant, Alonso<br> connects us to the soul of<br> Peru through his various<br> works touching upon the<br> most realist elements of<br> contemporary Peruvian soci-<br>ety. He has a Ph.D. from the<br> University of Texas at Austin and is a professor of lite-<br>rature at the Catholic Universi-<br>ty of Peru.",
    },
    {
        "specialist": "Gonzalo Salinas",
        "tag": "Doctorate in Economics<br> from Oxford University, UK",
        "description": "Author of several works for<br> the World Bank and the IMF,<br> Gonzalo keeps us grounded<br> in Peru’s everyday reality"
    }
];

const makeUsRow = document.getElementById("makeus__row");
const makeUsDiv = document.createElement("div");
makeUsDiv.classList.add("row");
makeUsDiv.classList.add("my-5");

const foundation = [

];

function appendMakeUsDivColumns() {
    makeUsDiv.innerHTML = `
        ${specialists.map((x) => `
            <div class="col-lg-3">
                <img src="public/assets/img/inka_expert_travel_jumbo.png" class="rounded-circle d-block img-fluid">
                <h5 class="iet__specialist__title text-uppercase py-2">${x.specialist}</h5>
                <h5 class="iet__specialist__subtitle py-2">
                    ${x.tag}
                </h5>
                <p class="iet__subtitle">
                    ${x.description}
                </p>
            </div>  
        `
        ).join('')}
    `;
    makeUsRow.append(makeUsDiv);
}

function init() {
    appendMakeUsDivColumns();
}



init();