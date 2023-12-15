import { lazy, Suspense  } from 'react'
import Loading from '../components/Loading'


export default function Landing() {

  const LazyHero = lazy(()=> import('../components/Hero'))
  const LazyCategory = lazy(()=> import('../components/Categories'))
  const LazyProduct = lazy(()=>import('../components/ProductIntro') )
  const LazyFooter = lazy(()=> import('../components/Footer'))




  return (
    <div className=" text-text-primary  bg-primary-bg">
      <Suspense fallback = { <Loading/>}><LazyHero /></Suspense>
      <Suspense fallback = { <Loading/>}><LazyCategory /></Suspense>
      <Suspense fallback = { <Loading/>}><LazyProduct /></Suspense>
      <Suspense fallback = { <Loading/>}><LazyFooter /></Suspense>
    </div>
  )
}