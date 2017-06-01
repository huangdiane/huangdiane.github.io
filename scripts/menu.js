var menuItem = {
    'diamond-mango': {
        ingredients: ['mango']
    },
    'everlasting-kale': {
        ingredients: ['kale', 'spinach', 'pineapple', 'mango', 'orange']
    },
    'super-green': {
        ingredients: ['kale', 'spinach', 'pineapple', 'mango', 'orange', 'banana'],
    },
    'strawberry-sunshine': {
        ingredients: ['strawberry', 'banana']
    },
    'very-berry': {
        ingredients: ['strawberry', 'blueberry']
    },
    'pink-lady': {
        ingredients: ['strawberry', 'watermelon']
    },
    'pina-colada': {
        ingredients: ['pineapple', 'coconut']
    },
    'rainbow': {
        ingredients: ['mango', 'pineapple', 'strawberry', 'banana']
    },
    'tropic-sunrise': {
        ingredients: ['strawberry', 'mango']
    },
    'organic-acai': {
        ingredients: ['strawberry', 'blueberry', 'banana', 'acai']
    }
};

function clearSelectedIngredients() {
    $('.smoothie-ingredient-item').each(function() {
        $(this).removeClass('active');
    });
}

function selectIngredients(key) {
    menuItem[key].ingredients.forEach(function(ingredient) {
        $('#' + ingredient).addClass('active');
    });
}

$(document).ready(function() {
    var selectedMenuItem = false;

    Object.keys(menuItem).forEach(function (key) {
        $('li[data-item="' + key + '"]').on('click', function() {
            clearSelectedIngredients();
            selectIngredients(key)
        });
    });

});