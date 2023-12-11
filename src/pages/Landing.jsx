import { lazy, Suspense  } from 'react'


export default function Landing() {

  const LazyHero = lazy(()=> import('../components/Hero'))
  const LazyCategory = lazy(()=> import('../components/Categories'))
  const LazyProduct = lazy(()=>import('../components/ProductIntro') )
  const LazyFooter = lazy(()=> import('../components/Footer'))




  return (
    <div className=" text-text-primary  bg-primary-bg">
      <Suspense fallback = {<p>Loading......</p>}><LazyHero /></Suspense>
      <Suspense fallback = {<p>Loading......</p>}><LazyCategory /></Suspense>
      <Suspense fallback = {<p>Loading......</p>}><LazyProduct /></Suspense>
      <Suspense fallback = {<p>Loading......</p>}><LazyFooter /></Suspense>
    </div>
  )
}