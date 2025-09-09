class Pedido {
  constructor({ id, cliente, telefono, fecha, items, domicilio, direccion, total }) {
    this.id = id;
    this.cliente = cliente;
    this.telefono = telefono;
    this.fecha = fecha;
    this.items = items;
    this.domicilio = domicilio;
    this.direccion = direccion;
    this.total = total;
  }
}

export default Pedido;
