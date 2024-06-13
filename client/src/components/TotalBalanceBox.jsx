import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import BankCard from "./BankCard";

const cards = [
  {
    bankName: "Horizon Banking",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  /* {
    bankName: "Bank of Australia",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  {
    bankName: "Bank of India",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  {
    bankName: "Bank of America",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  {
    bankName: "Bank of Canada",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  {
    bankName: "Bank of Pakistan",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  }, */
];

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
  user,
}) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
      <div className="ml-20">
        {cards.map((card, index) => (
          <BankCard key={index} account={card} userName={user} />
        ))}
      </div>
    </section>
  );
};

export default TotalBalanceBox;
