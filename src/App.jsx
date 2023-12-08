
import { lazy, Suspense  } from 'react'

import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import CategoryPage from './pages/CategoryPage'
import ItemsPage from './pages/ItemsPage'
import About from './pages/About'





export default function App() {

  const LazyHeader = lazy(()=> import('./components/Header'))

  return (
    <div className=" text-text-primary  bg-primary-bg">
      <Suspense fallback = {<p>Loading......</p>}><LazyHeader /></Suspense>

      <Routes>
          <Route path='/' element = {<Landing/>} exact/>
          <Route path='/categories/' element = {<CategoryPage/>} />
          <Route path='/store/' element = {<ItemsPage/>} />
          <Route path='/about/' element = {<About/>} />

      </Routes>
    </div>
  )
}