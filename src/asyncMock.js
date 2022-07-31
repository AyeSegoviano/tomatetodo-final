const cocktails = [

    {   
        id: '1',
        name: 'White Russian',
        price: 100,
        category: 'vodka',
        img: 'img/white-russian.png',
        stock: 10,
        description: 'Si te gusta el vodka, la crema y el licor de café, el White Russian es para vos. No te pierdas esta receta.'
    },

    {   id: '2',
        name: 'Negroni',
        price: 200,
        category: 'gin',
        img: '/img/negroni.png',
        stock: 10,
        description: 'Inventado en 1919 por el Conde Negroni al añadir a su Americano un toque de ginebra en lugar de soda.'
    },

    {   id: '3',
        name: 'Old Fashioned',
        price: 300,
        category: 'whisky',
        img: '/img/old-fashioned.png',
        stock: 10,
        description: 'Un clásico de todos los tiempos, inventado en el siglo XIX y con fanáticos hasta el día de hoy.'
    }
]

export const getCocktails = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cocktails);
            }, 3000)

    });
}
