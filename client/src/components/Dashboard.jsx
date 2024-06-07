import React from "react";

import RightSidebar from "./RightSidebar";
import TotalBalanceBox from "./TotalBalanceBox";
//HeaderBox
const Dashboard = ({ type = "title", title, subtext, user }) => {
  return (
    <section className="flex flex-row gap-6 relative">
      <header className="flex flex-col ml-14 mt-10">
        <div className="header-box">
          <div className="mb-10 font-serif">
            <h1 className="header-box-title">
              {title}
              {type === "greeting" && (
                <span className="text-bankGradient">&nbsp;{user}</span>
              )}
            </h1>
            <p className="header-box-subtext">{subtext}</p>
          </div>

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </div>
        Transaction
      </header>

      <RightSidebar user={user} transactions={[]} banks={[]} />
    </section>
  );
};

export default Dashboard;
