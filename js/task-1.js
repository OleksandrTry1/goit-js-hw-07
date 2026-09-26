const refs = {
    categoryList: document.querySelectorAll('#categories .item')
};

function getCategoriesInfo() {
    console.log(`Number of categories: ${refs.categoryList.length}`);

    refs.categoryList.forEach(category => {
        const categoryName = category.querySelector('h2').textContent;
        const categoryLength = category.querySelectorAll('ul li').length;

        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${categoryLength}`);
    });
}

getCategoriesInfo();