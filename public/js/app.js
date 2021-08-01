const specialists = [
    {
        "specialist": "Kim MacQuarrie",
        "tag": "Four-time Emmy-winning <br>filmmaker",
        "description": "Anthropologist, and conser-<br> vationist, Kim MacQuarrie is<br> our Chief Peru Expert. As an<br> author of best-sellers such<br> as The Last Days of the Incas<br> and Life and Death in the<br> Andes, he’s one of our<br> go-to’s when we have ques-<br> tions about Peru’s past.",
        "avatar": "public/assets/img/inka_expert_travel_kim_macquarrie.jpg"
    },
    {
        "specialist": "Javier Puente",
        "tag": "Professor of Latin American<br> and Latino/a Studies at<br> Smith College in Massachu-<br>setts",
        "description": "Dr. Javier Puente contributes<br> his endless knowledge of<br> Peru’s past and present. As a<br> Peruvian scholar, his person-<br>al knowledge and research<br> inspires Inca Expert to pro-<br>mote responsible travel,<br> ensuring Peru remains as<br> beautiful as it is now. Javi-<br>er's expertise is featured on<br> CNN as an Inca Expert Spe-<br>cialist.",
        "avatar": "public/assets/img/inka_expert_travel_javier_puente.jpg"
    },
    {
        "specialist": "Alonso Cueto",
        "tag": "Ph.D. in Philosophy, Univer-<br>sity of Texas. Award-winning<br> author",
        "description": "Widely translated author and<br> recipient of Guggenheim<br> Foundation grant, Alonso<br> connects us to the soul of<br> Peru through his various<br> works touching upon the<br> most realist elements of<br> contemporary Peruvian soci-<br>ety. He has a Ph.D. from the<br> University of Texas at Austin and is a professor of lite-<br>rature at the Catholic Universi-<br>ty of Peru.",
        "avatar": "public/assets/img/inka_expert_travel_alonso_cueto.jpg"
    },
    {
        "specialist": "Gonzalo Salinas",
        "tag": "Doctorate in Economics<br> from Oxford University, UK",
        "description": "Author of several works for<br> the World Bank and the IMF,<br> Gonzalo keeps us grounded<br> in Peru’s everyday reality",
        "avatar": "public/assets/img/inka_expert_travel_gonzalo_salinas.jpg"
    }
];

const makeUsRow = document.getElementById("makeus__row");
const makeUsDiv = document.createElement("div");
makeUsDiv.classList.add("row");
makeUsDiv.classList.add("my-5");

const foundation = [
    {
        "figure": "public/assets/img/inka_expert_travel_icon_one.svg",
        "description": "Moving from our start-up location to collaborative<br>office spaces in <b>Lima and Cusco, Peru, as well and<br> Texas, United States.</b>"
    },
    {
        "figure": "public/assets/img/inka_expert_travel_icon_two.svg",
        "description": "In 2006, we hired our in-house Operations Team.<br> Bringing you <b>top-notch workmanship and more<br> in-depth staff training.</b>"
    },
    {
        "figure": "public/assets/img/inka_expert_travel_icon_three.svg",
        "description": "By 2017, our company was enabling <b>more than<br> 4,000 travelers each year</b> to experience Peru in the<br> positive way Inca’s always set."
    },
    {
        "figure": "public/assets/img/inka_expert_travel_icon_four.svg",
        "description": "In 2019, we were delighted to be selected by Trust-<br> pilot as the <b>#1 Travel Agency in the world.</b>"
    },
    {
        "figure": "public/assets/img/inka_expert_travel_icon_five.svg",
        "description": "In 2019 and 2020, we were <b>approached by the BBC<br> and CNN</b> to be referenced as Peru experts."
    }
];

const foundationRow = document.getElementById("foundation__row");
const foundationDiv = document.createElement("div");
foundationDiv.classList.add("row");

const about = [
    {
        "description": "Thoughtful Selections",
        "selected": true,
    },
    {
        "description": "Responsible Travel",
        "selected": false,
    },
    {
        "description": "Traveler to Traveler",
        "selected": false,
    },
    {
        "description": "Behind the scenes",
        "selected": false,
    },
    {
        "description": "Perfectionism",
        "selected": false,
    },
    {
        "description": "Clarity",
        "selected": false,
    },
    {
        "description": "Stellar Reviews",
        "selected": false,
    }
];

const aboutRow = document.getElementById("about__row");
const aboutDiv = document.createElement("div");
aboutDiv.classList.add("row");

const members = [
    {
        "member": "Bernard Schlein",
        "role": "Director and founder",
        "avatar": "public/assets/img/inka_expert_travel_bernard_schlein.jpg"
    },
    {
        "member": "Richard Leon",
        "role": "Director",
        "avatar": "public/assets/img/inka_expert_travel_richard_leon.jpg",
    },
    {
        "member": "Monique Loayza",
        "role": "Director",
        "avatar": "public/assets/img/inka_expert_travel_monique_loayza.jpg",
    },
    {
        "member": "James Gilmore",
        "role": "Travel Advisor",
        "avatar": "public/assets/img/inka_expert_travel_james_gilmore.jpg",
    },
    {
        "member": "Liz Sperling",
        "role": "Travel Advisor",
        "avatar": "public/assets/img/inka_expert_travel_liz_sperling.jpg",
    },
    {
        "member": "Jackie Becker",
        "role": "Travel Advisor",
        "avatar": "public/assets/img/inka_expert_travel_jackie_becker.jpg",
    },
    {
        "member": "Melissa Dreffs",
        "role": "Travel Advisor",
        "avatar": "public/assets/img/inka_expert_travel_melissa_dreffs.jpg",
    },
    {
        "member": "Kiernan Cochran",
        "role": "Travel Advisor",
        "avatar": "public/assets/img/inka_expert_travel_kiernan_cochran.jpg",
    },
    {
        "member": "Jose Zegarra",
        "role": "Office Manager",
        "avatar": "public/assets/img/inka_expert_travel_jose_zegarra.jpg",
    },
    {
        "member": "Alexandra Aguinaga",
        "role": "Product & Accounts<br> Manage",
        "avatar": "public/assets/img/inka_expert_travel_alexandra_aguinaga.jpg",
    },
    {
        "member": "Maribell Mormontoy",
        "role": "Operations Quality Control",
        "avatar": "public/assets/img/inka_expert_travel_maribell_mormontoy.jpg",
    },
    {
        "member": "Ricardo Lopez",
        "role": "Operator Manager",
        "avatar": "public/assets/img/inka_expert_travel_ricardo_lopez.jpg",
    },
    {
        "member": "Fabricio Ortiz De Zevallos",
        "role": "Head Guide",
        "avatar": "public/assets/img/inka_expert_travel_fabricio_zevallos.jpg",
    },
    {
        "member": "Peter Cosio",
        "role": "Head Guide<br> Machu Picchu",
        "avatar": "public/assets/img/inka_expert_travel_peter_cosio.jpg",
    },
    {
        "member": "Michael Wicck",
        "role": "SEO Supervisor",
        "avatar": "public/assets/img/inka_expert_travel_michael_wicck.jpg",
    },
    {
        "member": "Britt Fracolli",
        "role": "Web & Content Editor",
        "avatar": "public/assets/img/inka_expert_travel_kiernan_cochran.jpg",
    },
    {
        "member": "Angel Seron",
        "role": "Senior Web Designer",
        "avatar": "public/assets/img/inka_expert_travel_james_gilmore.jpg",
    },
    {
        "member": "Juan Miguel Mifflin",
        "role": "Design and Web<br> Supervisor",
        "avatar": "public/assets/img/inka_expert_travel_juan_mifflin.jpg",
    },
    {
        "member": "Fernando Ramos",
        "role": "Web Programmer",
        "avatar": "public/assets/img/inka_expert_travel_fernando_ramos.jpg",
    },
    {
        "member": "Braulio Chihuantito",
        "role": "Programmer",
        "avatar": "public/assets/img/inka_expert_travel_ricardo_lopez.jpg",
    },
    {
        "member": "Silvana Tineo",
        "role": "Finance",
        "avatar": "public/assets/img/inka_expert_travel_silvana_tinco.jpg",
    },
];

const teamRow = document.getElementById("team__row");
const teamDiv = document.createElement("div");
teamDiv.classList.add("row");

function appendMakeUsDivColumns() {
    makeUsDiv.innerHTML = `
        ${specialists.map((x) => `
            <div class="col-lg-3">
                <img src="${x.avatar}" class="rounded-circle d-block img-fluid py-3">
                <h5 class="iet__specialist__title text-uppercase py-3">${x.specialist}</h5>
                <h5 class="iet__specialist__subtitle py-3">
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

function appendFoundationDivColumns() {
    foundationDiv.innerHTML = `
        ${foundation.map((x) => `
            <div class="col-lg-12 my-3">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <img src="${x.figure}">
                    </div>
                    <div class="flex-grow-1 ms-3 mt-3">
                        <p class="iet__subtitle">
                            ${x.description}
                        </p>
                    </div>
                </div>
            </div>
        `
        ).join('')}
    `;
    foundationRow.append(foundationDiv);
}

function appendAboutDivColumns() {
    aboutDiv.innerHTML = `
        ${about.map((x) => 
        `
            <div class="col-lg-12 mb-3">
                <div class="row justify-content-center">
                    <div class="col-lg-2">
                    <div class="${x.selected == true ? 'iet__about__separator__three__active' : 'iet__about__separator__three__deactive'}"></div>
                    </div>
                    <div class="col-lg-10">
                        <h5 class="${x.selected == true ? 'about__title__active' : 'about__title__deactive'}">${x.description}<h5>
                    </div>
                </div>
            </div>
        `     
        ).join('')}
    `;
    aboutRow.append(aboutDiv);
}

function appendTeamDivColumns() {
    teamDiv.innerHTML = `
        ${members.map((x) => 
        `
            <div class="col-lg-4 mb-3">
                <img src="${x.avatar}" class="d-block mx-auto img-fluid team__img mb-3">
                <h1 class="text-center team__member">${x.member}<h1>
                <p class="text-center team__role py-2">${x.role}</p>
                <p class="text-center team__learn__more pt-5 pb-4">Learn more about ${x.member.split(' ')[0]}</p>
            </div>
        `
        ).join('')}
    `;
    teamRow.append(teamDiv);
}


function init() {
    appendMakeUsDivColumns();
    appendFoundationDivColumns();
    appendAboutDivColumns();
    appendTeamDivColumns();
}

init();