const productsData = [
    {
        id: 1,
        name: 'Alamos',
        bid: 1000,
        category: 'malbec',
        cardImg: 'assets/malbec/alamos-ok1-99b28f2ec2aaade17416064265068241-640-0.png',
    },
    {
        id: 2,
        name: 'Omnium',
        bid: 900,
        category: 'malbec',
        cardImg: 'assets/malbec/omnium-malbec-vino-7501-32515c35e8af929b5216663752440406-640-0.jpg',
    },
    {
        id: 3,
        name: 'Esmeralda',
        bid: 1200,
        category: 'malbec',
        cardImg: 'assets/malbec/3063703_f.jpg',
    },
    {
        id: 4,
        name: 'Catena Zapata',
        bid: 2000,
        category: 'malbec',
        cardImg: 'assets/malbec/vino-catena-zapata-malbec-argentino.jpg',
    },
    {
        id: 5,
        name: 'Rutini',
        bid: 3500,
        category: 'malbec',
        cardImg: 'assets/malbec/vino-rutini-malbec-750-ml-d_nq_np_712646-mla40086100314_122019-f1-ffb83a9130aa72bc6b15904192564586-640-0.jpg',
    },{
        id: 6,
        name: 'Novecento',
        bid: 750,
        category: 'cabernet',
        cardImg: 'assets/cabernet/D_NQ_NP_982282-MLA46706878444_072021-O.jpg',
    },{
        id: 7,
        name: 'HD',
        bid: 900,
        category: 'cabernet',
        cardImg: 'assets/cabernet/hd-cabernet-sauvignon.png',
    },{
        id: 8,
        name: 'El Origen',
        bid: 1500,
        category: 'cabernet',
        cardImg: 'assets/cabernet/reserva_CS.jpg',
    },{
        id: 9,
        name: 'Misterio',
        bid: 700,
        category: 'cabernet',
        cardImg: 'assets/cabernet/Vino misterio Cabernet 750cc__1.jpg',
    },{
        id: 10,
        name: 'Chacabuco',
        bid: 900,
        category: 'blanc',
        cardImg: 'assets/chenin dulce/3063599_f.jpg',
    },{
        id: 11,
        name: 'Santa Julia',
        bid: 900,
        category: 'blanc',
        cardImg: 'assets/chenin dulce/77915400445021-36a790b506b5ff31a815991382621821-640-0.png',
    },{
        id: 12,
        name: 'Mastroeni',
        bid: 900,
        category: 'blanc',
        cardImg: 'assets/chenin dulce/mastroeni-chenin-blanc-dulce-natural_preview_rev_11-27886390b10e1f1a5f16114239683861-640-0.png',
    },{
        id: 13,
        name: 'Nampe',
        bid: 900,
        category: 'blanc',
        cardImg: 'assets/chenin dulce/nampe-chenin-dulce-x750.jpg',
    },{
        id: 14,
        name: 'Terrazas',
        bid: 1200,
        category: 'rose',
        cardImg: 'assets/rose/1007119.png',
    },{
        id: 15,
        name: 'Marques',
        bid: 1400,
        category: 'rose',
        cardImg: 'assets/rose/3063567_f.jpg',
    },{
        id: 16,
        name: 'Humberto Canale',
        bid: 1700,
        category: 'rose',
        cardImg: 'assets/rose/blush-ok1-2b24ce82cc3a665d3516270604638728-640-0.png',
    },{
        id: 17,
        name: 'Cafayate',
        bid: 750,
        category: 'rose',
        cardImg: 'assets/rose/D_NQ_NP_848272-MLA45296376294_032021-O.jpg',
    }, 
]; 

// Para hacer paginacion de Ver Mas , usamos el array de productos y lo dividimos
// const splitProducts = size => {
//     let dividirProductos = [];
//     for (let i = 0; i < productsData.length; i += size){
//         dividirProductos.push(productsData.slice(i, i + size));
//     }
//     return dividirProductos;
// }; 

// const productsController = {
//     dividirProductos: splitProducts(3),
//     nextProductsIndex: 1,
//     productsLimit: splitProducts(6).length,
// };