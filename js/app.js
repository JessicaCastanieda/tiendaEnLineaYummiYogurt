let productos = [
    {
        id: "1",
        nombre: "Mango",
        precio: 20,
        descripcion:
            "Trozos de manzana",
        imgURL:
            "https://image.freepik.com/vector-gratis/mangos-estilo-realista_23-2147627882.jpg"
    },
    {
        id: "2",
        nombre: "Manzana",
        precio: 18,
        descripcion:
            "Delicioso yogurt de manzana roja con trocitos de fruta fresca y fresca.",
        imgURL:
            'https://img.freepik.com/foto-gratis/manzanas-mesa_144627-6746.jpg?size=338&ext=jpg'
    },
    {
        id: "3",
        nombre: "Natural",
        precio: 30,
        descripcion:
            "Este yogurt natural casero es ideal para que le pongas tu fruta favorita para el postre despues de la comida o para que te prepares para tu entrenamiento. Aniade unas nueces para mejorar su sabor y tu rendimiento",
        imgURL:
            'https://image.freepik.com/vector-gratis/publicidad-realista-yogurt-taza-plastico-marca-yogurt-natural-cuchara-texto-editable-ilustracion-vectorial_1284-30212.jpg'
    },
    {
        id: "4",
        nombre: "Fresa",
        precio: 30,
        descripcion:
            "Un desayuno nutritivo no puede estar completo sin yogurt, aporta cantidades considerables de calcio necesario para el buen funcionamiento de los huesos, tiene trozos de fresa natural. Presentación familiar de 1 kilo",
        imgURL:
            "https://image.freepik.com/foto-gratis/fresa-aislada-fondo-blanco_1232-1974.jpg"
    },
    {
        id: '5',
        nombre: 'piña coco',
        Precio: 20,
        descripcion:
            'Yogurt griego con frutilla de piña y coco en cubos, listo para tu paladar, cero azúcar sin conservadores',
        imgURL:
            'https://image.freepik.com/foto-gratis/fresca-textura-vitamina-fruta-cruda_1172-220.jpg',
    }
];

/* let contenedorProductos = document.querySelector("#main")
console.log(contenedorProductos); */
/* 
for (let p = 0; p < productos.length; p++) {
    // itero el arreglo con base al index y lo guardo en element
    const element = productos[p];
    // console.log(element.nombre);

    // con ayuda del DOM creo una etiqueta puede ser o, h1. strong
    let producto = document.createElement("p");
    // asigno como contenido de la etiqueta el valor de element.nombre
    producto.innerHTML = element.nombre;
    // comprobarr en console
    console.log(producto);

    // genero que producto sea hijo main
    // main de html lo recupero en la variable contenedorProductos
    contenedorProductos.appendChild(producto);
} */

let contenedorProductos = document.querySelector("#main");
contenedorProductos.appendChild("div");
// interracion
for (let index = 0; index < productos.length; index++) {
    // const se crea cada que entra al for
    const producto = productos[index];
    // console.log(producto);

    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <p class="card-text">Some quick example text 
    to build on the card title and make up the bulk 
    of the card's content.</p>
    </div>
    </div>
`;
    // agregando hijos
    contenedorProductos.appendChild(card);
}