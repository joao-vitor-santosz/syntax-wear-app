import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container">
      <h1 className='text-black'>OLÁ</h1>

      <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nobis earum adipisci blanditiis nesciunt quis omnis quisquam at. Laboriosam quis odit eum animi repellat nesciunt soluta, fuga quos obcaecati? Facilis?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nobis earum adipisci blanditiis nesciunt quis omnis quisquam at. Laboriosam quis odit eum animi repellat nesciunt soluta, fuga quos obcaecati? Facilis?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nobis earum adipisci blanditiis nesciunt quis omnis quisquam at. Laboriosam quis odit eum animi repellat nesciunt soluta, fuga quos obcaecati? Facilis?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nobis earum adipisci blanditiis nesciunt quis omnis quisquam at. Laboriosam quis odit eum animi repellat nesciunt soluta, fuga quos obcaecati? Facilis?</p>
      <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nobis earum adipisci blanditiis nesciunt quis omnis quisquam at. Laboriosam quis odit eum animi repellat nesciunt soluta, fuga quos obcaecati? Facilis?</p>
    </div>
  )
}
