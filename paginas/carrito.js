let formulario = document.getElementById("formularioCarrito");
formulario.innerHTML+=`
<form>
  <div class="mb-3">
    <label for="exampleInputFormControl" class="form-label">Ingrese su nombre</label>
    <input class="form-control" type="text" placeholder="Ingrese su nombre" aria-label="default input example">
  </div>
  <div class="mb-3">
    <label for="exampleInputFormControl2" class="form-label">Ingrese su Apellido</label>
    <input class="form-control" type="text" placeholder="Ingrese su nombre" aria-label="default input example">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`
let messi = JSON.stringify(localStorage.getItem("carrito"));
console.log(JSON.parse(messi))
document.getElementById("productoCarrito").innerText = `Producto en carrito:  ${messi}`;
let listaF = document.getElementById("listaF");
listaF.innerHTML =
  `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;