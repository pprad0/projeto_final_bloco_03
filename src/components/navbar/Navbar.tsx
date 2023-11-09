import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="container flex justify-between text-lg">
          <Link to='/home' className="pl-12 text-2x1 font-bold font-mono">DevFarma </Link>

          <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar