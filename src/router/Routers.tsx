import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Recipe_Detail from '../pages/Recipe_Detail'

const Routers = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:slug' element={<Recipe_Detail />} />
        </Routes>
    )
}

export default Routers