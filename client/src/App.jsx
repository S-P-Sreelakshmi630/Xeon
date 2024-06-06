
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import TotalBalanceBox from './components/TotalBalanceBox'
import './globals.css';

function App() {
  const loggedIn = { firstName: 'John' }; 
  return (
   <section>
        <Sidebar/>
        <Dashboard //HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and transactions efficiently."
        />

        <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
   </section>
  )
}

export default App;
