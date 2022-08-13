const cocktails = [

    {   
        id: '1',
        name: 'White Russian',
        price: 100,
        category: 'vodka',
        img: '/img/white-russian.png',
        stock: 25,
        description: 'Si te gusta el vodka, la crema y el licor de café, el White Russian es para vos. No te pierdas esta receta.'
    },

    {   id: '2',
        name: 'Negroni',
        price: 200,
        category: 'gin',
        img: '/img/negroni.png',
        stock: 25,
        description: 'Inventado en 1919 por el Conde Negroni al añadir a su Americano un toque de ginebra en lugar de soda.'
    },

    {   id: '3',
        name: 'Old Fashioned',
        price: 300,
        category: 'whisky',
        img: '/img/old-fashioned.png',
        stock: 25,
        description: 'Un clásico de todos los tiempos, inventado en el siglo XIX y con fanáticos hasta el día de hoy.'
    },

    {   
        id: '4',
        name: 'Sex on the Beach',
        price: 100,
        category: 'vodka',
        img: '/img/sex-on-the-beach.png',
        stock: 25,
        description: 'Combina vodka y jugos de fruta. Colorido y refrescante, es un cóctel deal para preparar en verano.'
    },

    {   
        id: '5',
        name: 'Cosmopolitan',
        price: 100,
        category: 'vodka',
        img: '/img/cosmopolitan.png',
        stock: 25,
        description: 'De un color rojo llamativo y sabor a arándanos y cítricos, hoy en día no puede faltar en ninguna barra.'
    },

    {   
        id: '6',
        name: 'Martini',
        price: 100,
        category: 'gin',
        img: '/img/martini.png',
        stock: 25,
        description: 'Sin dudas uno de los cócteles más conocidos. Elegante, estético y fácil de preparar. Servir bien frío.'
    },

    {   
        id: '7',
        name: 'Gin Tonic',
        price: 100,
        category: 'gin',
        img: '/img/gin-tonic.png',
        stock: 25,
        description: 'Gin, agua tónica y mucho hielo. Pocos saben lo bien que queda con una rodaja de pepino.'
    },

    {   
        id: '8',
        name: 'Manhattan',
        price: 100,
        category: 'whisky',
        img: '/img/manhattan.png',
        stock: 25,
        description: 'Su historia se remonta a finales del siglo XIX; cuenta la leyenda que fue creación de la madre de Winston Churchill.'
    }

    
]

export const getCocktails = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cocktails);
            }, [])

    });
}
export const getCocktailsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cocktails.filter(drink => drink.category === categoryId));
            }, [])

    });
}

export const getCocktailsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cocktails.find(drink => drink.id === id));
            }, [])

    });
}

