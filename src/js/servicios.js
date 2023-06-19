//lista de categorias de productos
export let nombresCategorias = [
    {
      categoria:'Musica',
      nombreImg: 'c_musica.jpg'
    },
    {
        categoria:'Cosina',
        nombreImg: 'c_cosina.jpg'
    },
    {
        categoria:'Portatiles',
        nombreImg: 'c_portatiles.jpg'
    },
    {
        categoria:'Juegos',
        nombreImg: 'c_juegos.jpg'
    },
    // {
    //     categoria:'Electrodomesticos',
    //     nombreImg: 'c_electrodomesticos.jpg'
    // },
    // {
    //     categoria:'Mejores ofertas',
    //     nombreImg: 'c_ofertas.jpg'
    // },
];

//data de productos
export async function getProductos(){
   const res = await fetch("/src/dataProductos.json")
   const data = await res.json();
   return data.products;
}

//productos o articulos que se añaden al carrito.
export const productosCarrito = [];

