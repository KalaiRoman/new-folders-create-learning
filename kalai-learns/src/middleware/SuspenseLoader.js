import React, { Suspense } from 'react'

function SuspenseLoader({children}) {
  return (
    <Suspense fallback={<>Loading...</>}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoader
