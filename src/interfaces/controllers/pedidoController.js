import CreatePedido from "../../application/use-cases/CreatePedido.js";
import GetPedidos from "../../application/use-cases/GetPedidos.js";
import GetPedidoById from "../../application/use-cases/GetPedidoById.js";
import UpdatePedido from "../../application/use-cases/UpdatePedido.js";
import DeletePedido from "../../application/use-cases/DeletePedido.js";
import PedidoRepositoryMongo from "../../infrastructure/repositories/PedidoRepositoryMongo.js";

const pedidoRepository = new PedidoRepositoryMongo();

export const createPedido = async (req, res) => {
  try {
    const useCase = new CreatePedido(pedidoRepository);
    const pedido = await useCase.execute(req.body);
    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPedidos = async (req, res) => {
  try {
    const useCase = new GetPedidos(pedidoRepository);
    const pedidos = await useCase.execute();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPedidoById = async (req, res) => {
  try {
    const useCase = new GetPedidoById(pedidoRepository);
    const pedido = await useCase.execute(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePedido = async (req, res) => {
  try {
    const useCase = new UpdatePedido(pedidoRepository);
    const pedido = await useCase.execute(req.params.id, req.body);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePedido = async (req, res) => {
  try {
    const useCase = new DeletePedido(pedidoRepository);
    const result = await useCase.execute(req.params.id);
    if (!result) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
