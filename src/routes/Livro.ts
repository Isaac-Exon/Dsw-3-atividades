import { Router } from "express";
import { livroController } from "../controllers/livroController";

const router = Router();

// Rotas para Livro
router.post("/", livroController.create); // Criar livro
router.get("/", livroController.list); // Listar livros
router.delete("/:id", livroController.delete); // Deletar livro por ID
router.put("/:id", livroController.update); // Atualizar livro por ID

export default router;
