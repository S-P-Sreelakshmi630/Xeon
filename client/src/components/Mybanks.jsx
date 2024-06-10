import Sidebar from './Sidebar';
import Bank from './MyBankAccounts'

const Mybanks = () => {
  const loggedIn = { firstName: "John" };
  return (
    <section className='flex gap-4'>
        <Sidebar />
        <Bank
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || "Guest"}
           subtext="Access and manage your account and transactions efficiently."


        />
    </section>
  )
}

export default Mybanks