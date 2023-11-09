import Categoria from './Categoria';

export default interface Produto {
  id: number
  descricao: string
  laboratorio: string
  preco: number
  foto: string
  categoria: Categoria | null
} 