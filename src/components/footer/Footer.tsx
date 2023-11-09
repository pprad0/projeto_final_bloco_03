function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-700 text-white">

        <div className="container flex flex-col items-center py-4">

          <p className='text-xl font-bold'>
            Farmácia top de linha | Copyright ©️ Pedro Melo {data}
          </p>

          <p className='text-lg'>A melhor farmácia da esquina</p>

        </div>
      </div>
    </>
  )
}

export default Footer