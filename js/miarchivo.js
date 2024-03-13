let eleccion = true;
let continuar = true;
let envio = 0;
let precioProducto = 0;

//Se crea función constructora de Producto
function Producto (id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

//Se crea arreglo de productos, donde por defecto ya tendrá ciertos productos
const producto1 = new Producto (1,"Figura Plástico derretida",4000);
const producto2 = new Producto (2,"Homero Simpson",6000);
const producto3 = new Producto (3,"Bob Esponja",10000);
const producto4 = new Producto (4,"Calamardo",8500);
const producto5 = new Producto (5,"Goku",15000);

const productos = [];
productos[0] = producto1;
productos[1] = producto2;
productos[2] = producto3;
productos[3] = producto4;
productos[4] = producto5;

//console.log(productos);

while (eleccion == true){

//La idea es que se elija entre la compra que efectuará el usuario o el mantenedor del Administrador de la Plataforma Ecommerce donde agregará productos en caso que requiera
let inicio = prompt ("Favor elija qué desea realizar: \n1.- Compra usuario \n2.- Mantenedor Administrador\n3.- Salir");
inicio = parseInt (inicio);

if (inicio == 1){

while(continuar == true){

// En primer lugar el usuario deberá escoger la opción de dirección de envío, puesto que el costo varía por lugar    
    let direccion = prompt ("Favor seleccionar donde vives:\n 1.- Región Metropolitana\n 2.- Región de Valparaíso o Región de Libertador Bernardo O'Higgins\n 3.- Otras regiones");
    direccion = parseInt (direccion);
    switch(direccion){
        case 1:
            envio = 2000;
            continuar = false;
        break;
        case 2:
            envio = 4000;
            continuar = false;
        break;
        case 3:
            envio = 8000;
            continuar = false;
        break;
        default:
            alert ("Opción incorrecta");
        break;
    }
}

let seguir = true;
let cantidad = 0;
//let precio = 0;
let precioTotal = 0;

function calcularPrecioTotal (precio, cantidad){
    precioTotal = precioTotal + (precio * cantidad)
}

let contador = 1;

while(seguir == true){

    let productosOfrecidos = "";

    //Recorre todos los productos que posee el arreglo
    for (const key in productos) {
        productosOfrecidos = productosOfrecidos + (productos[key].id + ".- " + productos[key].nombre + " " + productos[key].precio + "\n");
    }

    let pedido = prompt ("Favor seleccionar producto a comprar\n" + productosOfrecidos + "\n0.- Salir")
    //Muestra por pantalla todos los productos disponibles, incluso aquellos que han sido agregados por Mantenedor    let pedido = prompt ("Favor seleccionar figura a comprar:\n" + productosOfrecidos + "0.-Salir");
    pedido = parseInt (pedido);

    if (pedido > 0){
    cantidad = prompt ("Favor seleccionar cantidad");
    cantidad = parseInt (cantidad);
    precioProducto = productos [pedido-1].precio;
    calcularPrecioTotal (precioProducto, cantidad);
    alert ("El precio total sin envío es: " + precioTotal);
    contador ++;
    }

    if (pedido == 0){
        // Si usuario escoge opción "Salir" pero no ha escogido producto antes, el costo de envío será costo 0, si no se cobraría solo el costo de envío pero sin el producto
        if (contador == 1){
            envio = 0;
        }
        alert ("¡Nos vemos pronto!");
        // Si el usuario escoge opción "Salir" no debe mostrarse menú de productos nuevamente
        seguir = false;
    }

    if (pedido < 0){
        alert ("Opción no válida");
    }

}

let precioTotalConEnvio = precioTotal + envio;

alert ("Tu pedido tendrá el valor total de" + " " + precioTotalConEnvio)

}

if (inicio == 2){

    let nuevoNombreProducto = prompt ("Favor ingresar nombre del producto a agregar");
    let nuevoPrecioProducto = prompt ("Favor ingresar precio del producto a agregar");
    nuevoPrecioProducto = parseInt (nuevoPrecioProducto);

    //Se utilizará función "some" para encontrar si el producto existe o no en el arreglo productos
    const encontrado = productos.some ((el) => el.nombre == nuevoNombreProducto);
    console.log (encontrado);

    if (encontrado == false){
        //Si el producto no existe, lo agregará en el sistema
        let posicionArrayProductos= productos.length
        productos [posicionArrayProductos] = new Producto (posicionArrayProductos + 1, nuevoNombreProducto, nuevoPrecioProducto);
        alert ("Producto ingresado exitosamente en el sistema");
        console.log (productos);

    }else{
        //Si el producto existe en el sistema, no lo agregará y enviará un mensaje de que ya existe
        alert ("Producto ya se encuentra ingresado en el sistema");
    }

}else{
    
    eleccion = false;
    alert ("¡Que estés muy bien!");
}
}