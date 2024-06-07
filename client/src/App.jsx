import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import "./globals.css";

function App() {
  const loggedIn = { firstName: "John" };
  return (
    <section className="flex h-screen w-full font-inter">
        <Sidebar />
        <div className="flex size-full flex-col">
        <Dashboard //HeaderBox
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
