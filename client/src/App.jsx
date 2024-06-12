import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import RecentTransactions from './components/RecentTransactions';
import "./globals.css";


function App() {
  const loggedIn = { firstName: "John" };
  return (
    <section className="flex h-screen w-full font-inter gap-2">
        <Sidebar />
        <Dashboard 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
    
    </section>
  );
}

export default App;
