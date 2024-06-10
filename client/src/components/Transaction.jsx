import Sidebar from "./Sidebar"
import TransactionHistory from "./TransactionHistory"

const Transaction = () => {
  return (
    <section className="flex gap-2">
        <Sidebar/>
        <TransactionHistory/>
    </section>
  )
}

export default Transaction