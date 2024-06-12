/* eslint-disable react/prop-types */

import TotalBalanceBox from "./TotalBalanceBox";
import RecentTransactions from "./RecentTransactions";
import HeaderBox from "./HeaderBox";
import { useEffect } from "react";
import axios from "axios";

//Static Data

const staticAccounts = [];

const staticTransactions = [];
axios.defaults.baseURL = "http://localhost:3001";
const staticAppwriteItemId = "item123";
const staticPage = 1;
const Dashboard = ({ type, title, subtext, user, accessToken }) => {

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`/transdb?accessToken=${accessToken}`);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    };

    fetchTransaction();
  }, [accessToken]);
  return (
    //Removed this bcoz main width is effected.
    //flex flex-row gap-6 relative
    // <section className="flex flex-row gap-6 relative home-content">
    <section className="home">
      <div className="home-content">
        {/* <header className="flex flex-col "> */}
        <header className="home-header">
          <header className="header-box">
            <HeaderBox
              title={title}
              type={type}
              subtext={subtext}
              user={user}
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
        </header>
        <button onClick={()=> fetch}>ReLoad</button>
        <RecentTransactions
          accounts={staticAccounts}
          transactions={staticTransactions}
          page={staticPage}
        />
      </div>
    </section>
  );
};

export default Dashboard;
