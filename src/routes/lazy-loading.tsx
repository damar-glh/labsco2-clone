import { lazy, Suspense } from 'react'

const lazyLoading = (importFunc: () => Promise<{ default: React.ComponentType<any> }>) => {
  const LazyComponent = lazy(importFunc)
  return (props: any) => (
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
