import PaymentFund from "./PaymentFund"
import Sidebar from "./Sidebar"

const Payment = () => {
  return (
    <section className="flex gap-4">
        <Sidebar/>
        <PaymentFund/>
    </section>
  )
}

export default Payment