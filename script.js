const services = document.getElementById("services");
const sortByName = document.getElementById("sortByName");
const sortByScore = document.getElementById("sortByScore");
const inputSearch = document.getElementById("srv");
const inputScore = document.getElementById("score");
const searchButton = document.getElementById("searchButton");
const hidden = document.getElementById("hidden");
const price = document.getElementById("price");
const speed = document.getElementById("speed");
const space = document.getElementById("space");
const deepSearchButton = document.getElementById("DeepsearchButton");

class Service {
    constructor(image, name, info, numberScore, verbalScore, stars, link) {
        this.image = image;
        this.name = name;
        this.info = info;
        this.numberScore = numberScore;
        this.verbalScore = verbalScore;
        this.stars = stars;
        this.link = link;
    }
}
class Info {
    constructor(speed, space, bandwith, price) {
        this.speed = speed;
        this.space = space;
        this.bandwith = bandwith;
        this.price = price;
    }
}

data = [
    new Service('https://hostadvice.com/wp-content/uploads/2019/08/Clip2net_190807125036-1-624x178.jpg', 'VERPEX', new Info(100,
        50, 'Unlimited', 20), 9.1, 'Very Good', 5, 'https://verpex.com/'),
    new Service('https://hostadvice.com/wp-content/uploads/2014/11/logo-2-1.png', 'time4VPS', new Info(100,
        100, 'Unlimited', 20), 9.1, 'Very Good', 5, 'https://www.time4vps.com/?t=102419eb62583c1f859d5ee0d8f5ee'),
    new Service('https://hostadvice.com/wp-content/uploads/2017/01/hostens-logo-624x204.png', 'HOSTens', new Info(150,
        250, 'Unlimited', 35), 9.4, 'Very Good', 5, 'https://www.hostens.com/?t=102d8743ee64e3791c047eab7b6a0c'),
    new Service('https://hostadvice.com/wp-content/uploads/2014/04/interserver_320x80.png', 'InterServer', new Info(200,
        124, 'Unlimited', 50), 9.7, 'excellent', 5, 'https://www.interserver.net/webhosting/1for3.html?id=525631&sid=9j8gvcduurrocz2b__5%3AVT13100275502705'),
    new Service('https://hostadvice.com/wp-content/uploads/2019/08/fastcomet-logo-blue_600x150_v2-300x75.png', 'fastCommet', new Info(100,
        300, 'Unlimited', 20), 8.8, 'Good', 4, 'https://www.fastcomet.com/'),
    new Service('https://hostadvice.com/wp-content/uploads/2020/07/bf32e13979ac7b66bd8b54a54c039bae-1.png', 'Host Armada', new Info(250,
        500, 'Unlimited', 20), 9.9, 'excellent', 5, 'https://hostarmada.com/partners/hostadvice/shared-hosting'),
    new Service('https://hostadvice.com/wp-content/uploads/2013/12/Hostgator_logo-624x169.png', 'HostGator', new Info(150,
        50, 'Unlimited', 30), 8.9, 'Good', 4.5, 'https://www.hostgator.com/promo/hostadvice?clickid=3TtT89zdBxyIUgg3y0R%3AYzP4UkGzl0V%3A522b380&irgwc=1&affpat=1&mpid=212439'),
    new Service('https://hostadvice.com/wp-content/uploads/2019/12/logo-test.png', 'KAMATERA', new Info(200,
        50, 'Unlimited', 45), 9.1, 'Very Good', 5, 'https://www.kamatera.com/express/compute/?tcampaign=35543_389589_9j8gvcduurrocz2b__10:VT13100275502705&bta=35543&nci=5344&afp=9j8gvcduurrocz2b__10%3AVT13100275502705')
];

function showservices(data) {
    services.innerHTML = '';

    data.forEach((Service, index) => {
        const serviceEl = document.createElement('div');
        serviceEl.classList.add('service');
        serviceEl.innerHTML = `
             <div class="image">
             <img src="${Service.image}">
             </div>
            
             <div class="overview" id="${Service.name}">
             <h4>${Service.name}</h4>
             <br>
             <ul>
             <li><b>price:</b> ${Service.info.price} Nis</li>
             <li><b>speed:</b>${Service.info.speed} Mb</li>
             <li><b>space:</b> ${Service.info.space} Gb</li>
             <li><b>bandwith:</b> ${Service.info.bandwith}</li>
             </ul>
             <div class="mobile_link">
             <a class="know-more" href="${Service.link}">Visit Site</a>
             </div>
            </div>
           
            <div class="service-score">
                <h3>${Service.numberScore}</h3>
                <h4>${Service.verbalScore} </h4>
            <div class="stars">
                <span class="fa fa-star checked" id="check1"></span>
                <span class="fa fa-star checked" id="check2"></span>
                <span class="fa fa-star checked" id="check3"></span>
                <span class="fa fa-star checked" id="check4"></span>
                <span class="fa fa-star checked" id="check5"></span>
            </div>
            </div>

            <div class="link">
            <a class="know-more" href="${Service.link}">Visit Site</a>
            </div>
            <div class="mobile-info">
            <button id="${index}">more information</button>
            </div>
        
        `;
        services.appendChild(serviceEl);
        const moreInfo = document.getElementById(index);
        const mobileInfo = document.getElementById(Service.name);
        moreInfo.addEventListener("click", () => {
            moreInfo.style.display = "none";
            mobileInfo.classList.add("show_information");
        });
        window.addEventListener("scroll", () => {
            moreInfo.style.display = "block";
            mobileInfo.classList.remove("show_information");
        });
    })
}
sortByName.addEventListener("click", () => {
    data.sort(function(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
    showservices(data);
})
sortByScore.addEventListener("click", () => {
    data.sort(function(a, b) {
        return b.numberScore - a.numberScore;
    });
    showservices(data);
})

searchButton.addEventListener("click", () => {
    let SearchData = [];
    if (inputScore.value == '') {
        showservices(data);
    } else {
        data.forEach(host => {
            if (host.numberScore >= inputScore.value) {
                SearchData.push(host);
            }
        });
        if (SearchData != '')
            showservices(SearchData);
        else {
            notFind();
        }
    }
})

inputSearch.addEventListener("click", () => {
    hidden.classList.toggle("open-search");
});

deepSearchButton.addEventListener("click", () => {
    hidden.classList.toggle("open-search");
    let deapSearch = [];
    data.forEach(host => {
        if (host.info.speed >= speed.value && host.info.space >= space.value) {
            if (host.info.price <= price.value || price.value == '')
                deapSearch.push(host);
        }
    });
    if (deapSearch != '')
        showservices(deapSearch);
    else {
        notFind();
    }
});

function notFind() {
    return services.innerHTML = `<div>
    <h3>search not found</h3>
    <p>sorry we did not found what you are looking for <br>
    please try another search </p>
    </div>`
}
showservices(data);