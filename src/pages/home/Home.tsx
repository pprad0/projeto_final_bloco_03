function Home() {
  return (
    <>
      <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",

      }}>
        <div>
          <div style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <h2 className="-tracking-wide font-medium font">Olá!</h2>
            <p>Temos os melhores preços em medicamentos, sempre!</p>
          </div>

          <div style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img
              src='https://img.freepik.com/vetores-premium/modelo-de-vetor-de-logotipo-de-farmacia-moderna_664675-756.jpg?w=996'
              alt="Imagem da Página Home"
              width="400px"

            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home