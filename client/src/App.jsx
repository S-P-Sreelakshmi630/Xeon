import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";


import "./globals.css";
function App(){
  
const loggedIn = {firstName: 'John', email : 'john@example.com'};
  return (
    <section className="flex h-screen w-full font-inter gap-">
        <Sidebar />
        <div className="flex size-full flex-col">
        <Dashboard 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
        
        </div>

        
      
    </section>
  );
}

export default App;
