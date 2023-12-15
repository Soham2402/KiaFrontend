
import { lazy, Suspense  } from 'react'

import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import CategoryPage from './pages/CategoryPage'
import ItemsPage from './pages/ItemsPage'
import SingleItem from './pages/SingleItem'
import Loading from './components/Loading'
import Hero from './components/Hero'
import CategoryItem from './pages/CategoryItem'





export default function App() {

  const LazyHeader = lazy(()=> import('./components/Header'))

  return (
    <div className=" text-text-primary  bg-primary-bg">
      <Suspense fallback = {<Loading/>}><LazyHeader /></Suspense>

      <Routes>
          <Route path='/' element = {<Landing/>} exact/>
          <Route path='/categories/' element = {<CategoryPage/>} />
          <Route path='/store/' element = {<ItemsPage/>} />
          <Route path='/' element = {<Hero/>} />
          <Route path='/store/:id' element = {<SingleItem/>} />
          <Route path='/categories/store/:id' element = {<CategoryItem/>} />
      </Routes>
    </div>
  )
}