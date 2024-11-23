import { Router, Request, Response } from "express";

import livroRoutes from "./Livro";

const routes = Router();

routes.use("/livro", livroRoutes);

routes.use((_: Request, res: Response) =>
  res.status(404).json({ error: "Requisição desconhecida" })
);

export default routes;
