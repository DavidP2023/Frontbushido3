import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../../Features/products/Presentation/Pages/homepage'
import { Layout } from '../utils/layout'
import { ProcesorsPage } from '../../Features/products/Presentation/Pages/Procesors_page'
import { PlacavideoPage } from '../../Features/products/Presentation/Pages/Placavideos_page'
import { MotherboardsPage } from '../../Features/products/Presentation/Pages/Motherboards_page'
import { PerifericosPage } from '../../Features/products/Presentation/Pages/Perifericos_page'

export const AppRouter = () => {

    return (

        <BrowserRouter>
            <Layout>
            <Routes>
                 <Route  path='/dashboard' element={<Homepage/>}/>
                 <Route  path='/procesadores' element={<ProcesorsPage/>}/> 
                 <Route  path='/placadevideo' element={<PlacavideoPage/>}/> 
                 <Route  path='/motherboards' element={<MotherboardsPage/>}/> 
                 <Route  path='/perifericos' element={<PerifericosPage/>}/> 
            </Routes>
            </Layout>
        </BrowserRouter>
  )


}