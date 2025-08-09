import { lazy, Suspense } from 'react'

const lazyLoading = (importFunc) => {
  const LazyComponent = lazy(importFunc)
  return (props) => (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-xl md:text-2xl font-generalsans-semibold">Loading...</h1>
        </div>
      }>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default lazyLoading
