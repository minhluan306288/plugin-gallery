


export default function createGallery (idMenu, menuItems, idGallery, galleryItems){

    // Initial create gallery
    renderMenu();
    renderGallery(galleryItems);

    // Method listern onclick item menu - run when click menu item
    function menuItemOnClick() {

        //DOM get all element item menu 
        const getAllItemMenu = document.querySelectorAll(`#${idMenu} li`);

        if (getAllItemMenu) {
            //Loop so that defined method onlick change item menu
            for (let itemMenu of getAllItemMenu) {
                itemMenu.addEventListener('click', function (e) {
                    // Get attribute to get cate of item menu
                    cateFilter(itemMenu.getAttribute('data-cate'), itemMenu);
                });
            }
        }
    }

    //Filter gallery with cate name - run when click menu item
    function cateFilter(cateSelected, thisEle) {

        //thisEle this element item menu clicked
        
        // Remove class active other li
        const eleActive = document.querySelector(`#${idMenu} li.active`)
        if (eleActive)
            eleActive.removeAttribute('class')
    
        //Add class active for li item menu clicked
        thisEle.classList.add('active')
    
        //Filter list with cate and Prerender Gallary
        const imagesFilter = cateSelected === 'ALL' ? galleryItems : galleryItems.filter(i => i.cate === cateSelected)
        renderGallery(imagesFilter)
    }

    //Render menu - run online first time
    function renderMenu() {

        //Get element container list menu item
        const menuEle = document.getElementById(idMenu);
        let eleRender = '';

        //Create html list menu
        menuItems.forEach((i, index) => {
            eleRender = eleRender + `
                <li data-cate="${i.cate}">
                    <img src="${i.icon}" alt="${i.cate}">
                    <p>${i.cate}</p>
                </li>
            `
        })

        // Check menuEle undefined and render html list menu to Document html
        if (menuEle)
            menuEle.insertAdjacentHTML('beforeend', eleRender);

        //Call method get onlick item menu    
        menuItemOnClick();
    }

    //Render Gallery - run when click menu item
    function renderGallery(imagesGallery) {

        //DOM get element container Gallery
        const gallery = document.getElementById(idGallery)

        //Create HTML list item gallery
        const eleGalllery = imagesGallery.reduce((eleMerge, itemCurrent) => {
            eleMerge += `<div class="brandcate_dls_1_0_0__item">
                <a href="#">
                    <img
                        src="${itemCurrent.pic}" alt="${itemCurrent.name}">
                        </a>
            </div> `
            return eleMerge
        }, '')

        // Check gallery undefined and render html list gallery to Document html
        if (gallery)
            gallery.innerHTML = eleGalllery;

    }


}




    