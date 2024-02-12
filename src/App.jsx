import Signin from './page/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetData from './page/GetData'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signin />} />
          <Route path='/getdata' element={<GetData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
