// compoinent card
const brandCard = (data) => {
    return `
        <div class="brandcate_dls_1_0_0__item">
            <a href="${data.link}"><img src="${data.pic}" alt="${data.name}"></a>
        </div>
    `;
};

// compoinent nav
const brandNav = (name, link, index) => {
    let active = (index == 0) ? 'active' : '';
    return `
        <li class="${active}" onclick="cateFilter('${name}', ${index})">
            <img src="${link}" alt="${name}" /> 
            <p>${name}</p>
        </li>
    `;
};


// Render Data
const renderBrand = (list) => {
    document.querySelector(".brandcate_dls_1_0_0__content").innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        document.querySelector(".brandcate_dls_1_0_0__content").innerHTML += brandCard(list[i]);
    }
};

renderBrand(data);

// Render Nav
const renderNav = (list) => {
    document.querySelector(".brandcate_dls_1_0_0__nav").innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        document.querySelector(".brandcate_dls_1_0_0__nav").innerHTML += brandNav(list[i].name, list[i].link, i);
    }
};

renderNav(cateList);

function cateFilter(name, index){
    let dataFiter = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].cate == name){
            console.log(data[i]);
            dataFiter.push(data[i]);
        } else if(name == 'All'){
            dataFiter = data;
        }
    }
    // console.log(dataFiter);
    renderBrand(dataFiter);

    let li = document.querySelectorAll('.brandcate_dls_1_0_0__nav li');
    for(let i = 0; i < li.length; i++){
      li[i].classList.remove('active');
    }
    li[index].classList.add('active');
}