import "dotenv/config.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import pedidoRoutes from "./interfaces/routes/pedidoRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/pedidos", pedidoRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});
