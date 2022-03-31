import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Post} from './Post/Post'
import {Consulta} from './Consulta/Consulta'
import {Filtro} from './Filtro/Filtro'
import {Login} from './Login/Login'
import {VerUsuario} from './Datos/VersUsuarios'
import {Crear} from './Crear/Crear'
import {CrearPublicacion} from './CrearPublicacion/CrearPublicacion'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Filtro' element={<Filtro/>}/>
      </Routes>
      <Routes>
        <Route path='/Posteo' element={<Post/>}/>
      </Routes>
      <Routes>
        <Route path='/Consulta' element={<Consulta></Consulta>}/>
      </Routes>
      <Routes>
        <Route path='/datos' element={<VerUsuario/>}/>
      </Routes>

      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path='/Crear' element={<Crear/>}/>
      </Routes>

      <Routes>
        <Route path='/CrearPublicacion' element={<CrearPublicacion/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;