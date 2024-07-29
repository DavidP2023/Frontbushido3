import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../../Features/products/Presentation/Pages/homepage'
import { Layout } from '../utils/layout'
import { ProcesorsPage } from '../../Features/products/Presentation/Pages/Procesors_page'

export const AppRouter = () => {

    return (

        <BrowserRouter>
            <Layout>
            <Routes>
                 <Route  path='/dashboard' element={<Homepage/>}/>
                 <Route  path='/procesadores' element={<ProcesorsPage/>}/>    

            </Routes>
            </Layout>
        </BrowserRouter>
  )


}