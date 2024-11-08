const products = [
    {
        id: "electronico1",
        name: "iPhone 15 Pro Max",
        description: "",
        stock: 10,
        price: 1500,
        image: "/img/celular1.png",
        category: "electronicos",
    },
    {
        id: "electronico2",
        name: "iPhone 14 Pro Max",
        description: "",
        stock: 3,
        price: 1200,
        image: "/img/celular2.png",
        category: "electronicos",
    },
    {
        id: "prenda1",
        name: "Remera Jordan",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum animi dignissimos itaque ratione, sapiente iusto exercitationem nemo dicta earum, blanditiis eligendi voluptatum expedita, minima natus quidem neque accusantium optio.",
        stock: 5,
        price: 300,
        image: "/img/prenda1.png",
        category: "vestimentas",
    },
    {
        id: "prenda2",
        name: "Short Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda2.png",
        category: "vestimentas",
    },
    {
        id: "perfume1",
        name: "Invictus",
        description: "",
        stock: 5,
        price: 180,
        image: "/img/perfume1.png",
        category: "perfumes",
    },
    {
        id: "perfume2",
        name: "One Million",
        description: "",
        stock: 5,
        price: 180,
        image: "/img/perfume2.png",
        category: "perfumes",
    },
    {
        id: "promocion1",
        name: "Combo Dulce",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda1.png",
        category: "promociones",
    },
    {
        id: "promocion2",
        name: "Conjunto Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda1.png",
        category: "promociones",
    }
]

const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }

/*
const promesa = new Promise ( (resolve, reject)=>{
    if(condicion){
    resolve("se resolvio")
    }else{
    reject("se rechazo")
    }
    }) */