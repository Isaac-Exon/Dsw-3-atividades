import mongoose, { Schema } from "mongoose";

export interface ILivro extends Document {
  titulo: string;
  autor: string;
  ano: number;
}

const LivroSchema: Schema = new Schema({
  titulo: { type: String, reuired: true },
  autor: { type: String, reuired: true },
  ano: { type: String, reuired: true },
});

export default mongoose.model<ILivro>("Livro", LivroSchema);
