import { useState, useEffect } from 'react';

const products = [
    { id: 1, name: 'Remera 1', price: 20000, category: 'remeras', image: '/remera1.png', description: 'Descripción...' },
    { id: 2, name: 'Remera 2', price: 20000, category: 'remeras', image: '/remera2.png', description: 'Descripción...', },
    { id: 3, name: 'Remera 3', price: 20000, category: 'remeras', image: '/remera3.png', description: 'Descripción...', },
    { id: 4, name: 'Remera 4', price: 20000, category: 'remeras', image: '/remera4.png', description: 'Descripción...', },
    { id: 5, name: 'Remera 5', price: 20000, category: 'remeras', image: '/remera5.png', description: 'Descripción...', },
    { id: 6, name: 'Remera 6', price: 20000, category: 'remeras', image: '/remera6.png', description: 'Descripción...', },
    { id: 7, name: 'Buzo 1', price: 50000, category: 'hoodies', image: '/hoodie1.png', description: 'Descripción...' },
    { id: 8, name: 'Buzo 2', price: 50000, category: 'hoodies', image: '/hoodie2.png', description: 'Descripción...', },
    { id: 9, name: 'Buzo 3', price: 50000, category: 'hoodies', image: '/hoodie3.png', description: 'Descripción...', },
    { id: 10, name: 'Buzo 4', price: 50000, category: 'hoodies', image: '/hoodie4.png', description: 'Descripción...', },
    { id: 11, name: 'Buzo 5', price: 50000, category: 'hoodies', image: '/hoodie5.png', description: 'Descripción...', },
    { id: 12, name: 'Buzo 6', price: 50000, category: 'hoodies', image: '/hoodie6.png', description: 'Descripción...', },
    { id: 13, name: 'Pantalon 1', price: 40000, category: 'pantalones', image: '/pantsfront2.png', description: 'Descripción...' },
    { id: 14, name: 'Pantalon 2', price: 40000, category: 'pantalones', image: '/pantsfront3.png', description: 'Descripción...' },
    { id: 15, name: 'Pantalon 3', price: 40000, category: 'pantalones', image: '/pantsfront.png', description: 'Descripción...' },
];

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 1000);
    });
};

export const useProducts = (category) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (category) {
            getCategory(category).then((products) => setItems(products));
        } else {
            setItems(products);
        }
    }, [category]);

    return items;
};

export { products };



