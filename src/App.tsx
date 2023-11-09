import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>

            <Route path="/home" element={<Home />} />
            {/* <Route path="/temas" element={<ListaTemas />} /> */}
            {/* <Route path="/cadastroTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} /> */}

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App

