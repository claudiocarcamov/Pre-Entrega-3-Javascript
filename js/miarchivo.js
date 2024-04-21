let eleccion = true;
let continuar = true;
let envio = 0;
let precioProducto = 0;
const productosAgregados = [];
const productos = [];
let posicionLS = 0;
//const prodEnJson = JSON.stringify(productos);
//Si se debe agregar o quitar
const prodDesdeObj = JSON.parse(localStorage.getItem("productos"))

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

//const productos = [];
productos[0] = producto1;
productos[1] = producto2;
productos[2] = producto3;
productos[3] = producto4;
productos[4] = producto5;

/*posicionProductos = 5
for (let i=0; i<prodDesdeObj.length; i++){
    productos[posicionProductos] = prodDesdeObj[i];
    posicionProductos++
}

console.log(productos)*/

/*const prodEnJson = JSON.stringify(productos)
localStorage.setItem("productos", prodEnJson)
const prodDesdeLS= JSON.parse(localStorage.getItem('productos'));
console.log(prodDesdeLS)*/

//console.log(productos);

/*while (eleccion == true){

//La idea es que se elija entre la compra que efectuará el usuario o el mantenedor del Administrador de la Plataforma Ecommerce donde agregará productos en caso que requiera
let inicio = prompt ("Favor elija qué desea realizar: \n1.- Compra usuario \n2.- Mantenedor Administrador\n3.- Salir");
inicio = parseInt (inicio);

if (inicio == 1){

while(continuar == true){*/

// En primer lugar el usuario deberá escoger la opción de dirección de envío, puesto que el costo varía por lugar    
/*    let direccion = prompt ("Favor seleccionar donde vives:\n 1.- Región Metropolitana\n 2.- Región de Valparaíso o Región de Libertador Bernardo O'Higgins\n 3.- Otras regiones");
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
}*/

//console.log (document.head);
//const regiones = document.getElementsByClassName("region");
//console.log (regiones);

let seguir = true;
let cantidad = 0;
//let precio = 0;
//let precioTotal = 0;

function calcularPrecioTotal (precio, cantidad){
    precioTotal = precioTotal + (precio * cantidad)
}

let contador = 1;

/*while(seguir == true){

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

}*/

//let precioTotalConEnvio = precioTotal + envio;

//alert ("Tu pedido tendrá el valor total de" + " " + precioTotalConEnvio)

//}

//if (inicio == 2){

    //let nuevoNombreProducto = prompt ("Favor ingresar nombre del producto a agregar");
    //let nuevoPrecioProducto = prompt ("Favor ingresar precio del producto a agregar");
    //nuevoPrecioProducto = parseInt (nuevoPrecioProducto);

    //Se utilizará función "some" para encontrar si el producto existe o no en el arreglo productos
    //const encontrado = productos.some ((el) => el.nombre == nuevoNombreProducto);
    //console.log (encontrado);

    //if (encontrado == false){
        //Si el producto no existe, lo agregará en el sistema
    //    let posicionArrayProductos= productos.length
    //    productos [posicionArrayProductos] = new Producto (posicionArrayProductos + 1, nuevoNombreProducto, nuevoPrecioProducto);
    //    alert ("Producto ingresado exitosamente en el sistema");
    //    console.log (productos);

    //}else{
        //Si el producto existe en el sistema, no lo agregará y enviará un mensaje de que ya existe
    //    alert ("Producto ya se encuentra ingresado en el sistema");
    //}

/*}else{
    
   eleccion = false;
   alert ("¡Que estés muy bien!");
}*/
//}
const seleccionar = document.getElementById("seleccionar");
const regiones = document.getElementsByClassName("region");
let valueRegion;
let precioEnvio = 0; //simil a variable envio
let mensaje;
let ingresado = false;

document.getElementById("region").addEventListener('change', (event) => {
    console.log(event.target.value)
    valueRegion = event.target.value
    if (ingresado == true){
        mensaje.remove();
        ingresado = false;
    }
    if (valueRegion == "metropolitana"){
        precioEnvio = 2000;
    }
    if (valueRegion == "valpoohigins"){
        precioEnvio = 4000;
    }
    if (valueRegion == "otrasregiones"){
        precioEnvio = 8000;
    }
    mensaje = document.createElement("p")
    mensaje.innerText = "El precio del envío es " + precioEnvio ;
    seleccionar.append (mensaje)
    ingresado = true;
    //alert (precioEnvio)
    return precioEnvio;
})

//console.log(precioEnvio)

const agregarCantidad = document.getElementById("prod");
const cantidadfigder = document.getElementById("cantidadfigder")
const formControl = document.getElementsByClassName("form-control")
let precioTotalSinEnvio;
let precioTotalConEnvio;
let precioTotal;
let calculoIngresado = false;

//nombreProducto.addEventListener('input', () =>{
//    console.log(nombreProducto.value)
//})

agregarCantidad.addEventListener ('submit', (e) =>{
    e.preventDefault();
    let precioSinEnvio = 0;
    
    for (let i=0; i<productos.length; i++){
    cantidad = formControl[i].value;
    //alert (formControl[i].value)
    precioProducto = productos [i].precio;
    //alert (precioProducto*cantidad);
    precioSinEnvio = precioSinEnvio + (precioProducto * cantidad)
    console.log(cantidad);
    console.log(precioProducto);
    }

    if (calculoIngresado == true){
        precioTotalSinEnvio.remove();
        precioTotalConEnvio.remove();
        calculoIngresadoIngresado = false;
    }

    //alert ("El precio total sin envío es: " + precioSinEnvio);
    precioTotalSinEnvio = document.createElement("p");
    precioTotalSinEnvio.innerText = "El precio total sin envío es " + precioSinEnvio;
    agregarCantidad.append (precioTotalSinEnvio);
    precioTotal = precioSinEnvio + precioEnvio;
    precioTotalConEnvio = document.createElement("p");
    precioTotalConEnvio.innerText = "El precio total con envío es " + precioTotal;
    agregarCantidad.append (precioTotalConEnvio);
    calculoIngresado = true;

})

const listaProductos = document.getElementById("listaproductos");

//for (const producto of productos) {
//    const li = document.createElement('li');
//    li.innerHTML = producto.nombre;
//    listaProductos.append(li);
//}
//}

let aviso;
let productoIngresado = false;

const agregarProducto = document.getElementById("formulario");
const nombreProducto = document.getElementById("nombreproducto");
const valorProducto = document.getElementById("valorproducto")
//nombreProducto.addEventListener('input', () =>{
//    console.log(nombreProducto.value)
//})
//const prodDesdeObj = JSON.parse(localStorage.getItem("productos"))

//Esto si se debe agregar o quitar
for (i=5; i<prodDesdeObj.length; i++){
    productos[i] = prodDesdeObj[i];
    const prodDesdeLS = document.createElement('li');
    prodDesdeLS.innerHTML = "Nombre Producto: " + prodDesdeObj[i].nombre + "; Costo: " + prodDesdeObj[i].precio + '<div class="mb-2 mt-2"> <label for="nuevo" class="form-label">Cantidad</label> <input type="text" class="form-control" id="nuevo" placeholder="Ej: 10" name="nuevo"> </div>'
    listaProductos.append(prodDesdeLS);
}

agregarProducto.addEventListener ('submit', (e) =>{
    e.preventDefault();
    //alert(nombreProducto.value);
    const nuevoNombreProducto = nombreProducto.value;
    //console.log (valorProducto.value);
    //console.log(valorProducto.value);
    const nuevoValorProducto = parseInt (valorProducto.value);
    const encontrado = productos.some ((el) => el.nombre == nuevoNombreProducto);

    //console.log(prodDesdeObj)

    if (productoIngresado == true){
        aviso.remove();
        productoIngresado = false;
    }
    console.log (encontrado);

    if (encontrado == false){
        //Si el producto no existe, lo agregará en el sistema

        let posicionArrayProductos= productos.length
        productos [posicionArrayProductos] = new Producto (posicionArrayProductos + 1, nuevoNombreProducto, nuevoValorProducto);
        console.log(productos)
        //alert ("Producto ingresado exitosamente en el sistema");
        aviso = document.createElement("p");
        aviso.innerText = "Producto ingresado exitosamente en el sistema";
        agregarProducto.append (aviso);
        //const prodDesdeObj = JSON.parse(localStorage.getItem("productos"))
        //console.log(prodDesdeObj)
        const li = document.createElement('li');
        li.innerHTML = "Nombre Producto: " + productos[posicionArrayProductos].nombre + "; Costo: " + productos[posicionArrayProductos].precio + '<div class="mb-2 mt-2"> <label for="nuevo" class="form-label">Cantidad</label> <input type="text" class="form-control" id="nuevo" placeholder="Ej: 10" name="nuevo"> </div>'
        //li.innerHTML = `<h3> ID: ${producto.id}</h3>
        //                <p>  Producto: ${producto.nombre}</p>
        //                <b> $ ${producto.precio}</b>`;
        console.log(productos)
        listaProductos.append(li);
        productosAgregados[posicionLS] = productos[posicionArrayProductos];
        console.log(productosAgregados);
        //console.log("hola a todoooooooos")
        posicionLS++;
        const prodEnJson = JSON.stringify(productos);
        localStorage.setItem("productos", prodEnJson)
        console.log(prodEnJson)
        //localStorage.setItem("productos", prodEnJson)
        //Esto si se debe agregar
        
        //console.log(prodEnJson)
        //localStorage.setItem("productos", prodEnJson);
        //console.log(prodEnJson);

    }else{
        //Si el producto existe en el sistema, no lo agregará y enviará un mensaje de que ya existe
        
        aviso = document.createElement("p");
        aviso.innerText = "Producto ya se encuentra ingresado en el sistema";
        agregarProducto.append (aviso);
    }
    productoIngresado = true;
    return productos;

    //const listaP = document.getElementById("listaP");
    //listaP.remove()
    
    //for (const producto of productos) {
    //    const li = document.createElement('li');
        //li.innerHTML = producto.nombre;
    //    li.remove();
    //}

    //const li_inicial = document-getelementById("li_inicial");
    //li_inicial.remove()

    //listaProductos.remove();

    //for (const producto of productos) {
    //}

});
console.log(productosAgregados);
console.log("hola")
console.log(productos)
//for(i=4; i<productos.length; i++){
//    productosAgregados[posicionLS] = productos[i];
//    console.log(productos[i])
//    console.log("hola")
//    posicionLS++
//}

//console.log (regiones);
//console.log(regiones[1].value);
//console.log(regiones[1]);
//const regionValpo = regiones[1].value;
//regionValpo.addEventListener('click', () =>{
//    alert("Escogiste región de valpo")
//})

const seleccionarRegion = document.getElementById("regionvalpo")
console.log(seleccionarRegion);

//seleccionarRegion.addEventListener('change', () =>{
//    alert("Escogiste región de valpo")
//})


//const clickProducto = document.getElementById("boton");
//boton.addEventListener ("click",() =>{
//    alert ("Enviaste")
//})

//const nombreProducto = document.getElementById("nombreproducto").value;

//alert(nombreProducto)

function validarFormulario (e){
    e.preventDefault();
//    alert ("Formulario enviado");
//    const nombreProducto = document.getElementById("nombreproducto").value;
//    alert (nombreProducto);
}

//if (valueRegion == "metropolitana"){
//    console.log ("Has escogido la Región Metropolitana")
//}

//const seleccionarRegion = document.getElementById("region")
//console.log(seleccionarRegion);
//seleccionarRegion.addEventListener('click', () =>{
//    alert("Escogiste región")
//})
//document.body.addEventListener('click', ()=>{
//    console.log("Escogiste región de valpo")
//})

//const metropolitana = regiones[0].value
//const prodEnJson = JSON.stringify(productos)
//localStorage.setItem("productos", prodEnJson)

//Esto si se debe agregar
//const prodDesdeLS= JSON.parse(localStorage.getItem("productos"));
//console.log(prodDesdeLS)

console.log(productos)

console.log(productosAgregados)
//console.log(prodEnJson)
//const prodEnJson = JSON.stringify(productos);
//localStorage.setItem("productos", prodEnJson)