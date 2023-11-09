function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
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