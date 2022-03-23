//eventos Dom
document
.getElementById("producto-formulario")
.addEventListener("submit",function(evento){
 //evaluar el comportamiento del formulario
 evento.preventDefault();// para fuardar sin refrescar en la pagina 
 //obtener  los valores del formulario
 const nombre = document.getElementById("nombre").value,
 precio = document.getElementById("precio").value,
 año = document.getElementById("año").value;
 //crear un nuevo  objeto "producto"

 const product = new product(nombre,precio,año)
 // crear un nuevo usuario de interfaz
 const ui =  new UI();
 //input de validacion de usuario
 if(nombre=== "" || precio === "" || año === ""){
    ui.showMessage("por favor inserte datos");

 }
 // guardar producto

 ui.addProducto(producto);
 ui.showMessage("Producto agregado");
 ui.resetForm();


});
 
document.getElementById("producto-lista").addEventListener("click",(e)=>

{ 
    const ui  = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();


}
);
//clase producto

class Producto{
    constructor(nombre,precio,año){
        this.nombre = nombre;
        this.precio=precio;
        this.año=año;

    }
}
//clase usuario interfaz
class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = ` 
        <div class="tarjeta texto margen4">
    <div class="tarjeta-body">
        <strong>producto</strong> : ${producto.nombre}-
        <strong>precio</strong> : ${producto.precio}-
        <strong>año</strong> : ${producto.año}-
        <a href="#" class="btn btn error" name="eliminar">Eliminar</a>

    </div>
</div>

`;  

productoLista.appendChild(Element);// appendchild = objeto hijo
   }
//Resetear valores del formulario
resetForm(){
    document.getElementById("formulario-producto").reset();

            }
            deleteProducto(elemento){


                if(elemento.nombre === "eliminar"){
                    elemento.parentElement.parentElement.remove();
                    this.showMessage("El producto se a eliminado")
                }
            }
            showMessage(mesaje,cssClass){

                const div = document.createElement("div");
                div.className = `alert alert-${cssClass}`;
                div.appendChild(document.createTextNode(mesaje));
                //mostrar el dom
                
                const contenido=document.querySelector(".container");
                const app= document.querySelector("#App");
                //Insertar mensaje en el interfaz de usuario
               container.insertBefore(div,app);
               // remover el mensaje luego de 3 segundos

               setTimeout(function(){
                   document.querySelector(".alert").remove();

               }, 3000);


               


            }
}