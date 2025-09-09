import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
});

const PedidoSchema = new mongoose.Schema({
  cliente: String,
  telefono: String,
  fecha: { type: Date, default: Date.now },
  items: [ItemSchema],
  domicilio: Boolean,
  direccion: {
    calle: String,
    ciudad: String,
  },
  total: Number,
});

const PedidoModel = mongoose.model("Pedido", PedidoSchema);

class PedidoRepositoryMongo {
  async create(data) { return await new PedidoModel(data).save(); }
  async findAll() { return await PedidoModel.find(); }
  async findById(id) { return await PedidoModel.findById(id); }
  async update(id, data) { return await PedidoModel.findByIdAndUpdate(id, data, { new: true }); }
  async delete(id) { return await PedidoModel.findByIdAndDelete(id); }
}

export default PedidoRepositoryMongo;
