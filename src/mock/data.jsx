// export const products = [
//     // {
//     //     id: "01",
//     //     name: "Product 1",
//     //     price: 20,
//     //     category: "ofertas",
//     //     description: "Descripcion 1",
//     //     img:'../img/products/01.webp',
//     //     stock: 3
//     // },
//     {
//         //id: "02",
//         name: "Product 2",
//         price: 40,
//         category: "nuevos",
//         description: "Descripcion 2",
//         img:'../img/products/02.webp',
//         stock: 5
//     },
//     {
//         //id: "03",
//         name: "Product 3",
//         price: 60,
//         category: "mas vendidos",
//         description: "Descripcion 3",
//         img: "../img/products/03.webp",
//         stock: 2
//     },
//     {
//         //id: "04",
//         name: "Product 4",
//         price: 80,
//         category: "ofertas",
//         description: "Descripcion 4",
//         img: "../img/products/04.webp",
//         stock: 1
//     }
// ];

// // creamos la promesa

// export const getProducts = () => {
//     let error = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!error){
//                 resolve(products)
//             }else{
//                 reject('Hubo un error, intente mas tarde')
//             };
//         },2000);    
//     });
// };

// export const getOneProduct = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let prod = products.find((item) => item.id === id)
//             resolve(prod)
//         }, 3000)
//     })
// }