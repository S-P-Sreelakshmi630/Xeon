//import React from 'react';
import './MyBankAccounts.css';

const cards = [
  {
    bankName: "Horizon Banking",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  },
  {
    bankName: "Bank of Australia",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  },
  {
    bankName: "Bank of India",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  },
  {
    bankName: "Bank of America",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  },
  {
    bankName: "Bank of Canada",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  },
  {
    bankName: "Bank of Pakistan",
    cardHolder: "OLIVIA BYRNE",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40"
  }
];

const MyBankAccounts = () => {
  return (
    <div className="my-bank-accounts">
      <h1>My Bank Accounts</h1>
      <p>Effortlessly Manage Your Banking Activities</p><br></br>
      <h1>Your Cards</h1>

      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="bank-name">{card.bankName}</span>
            </div>
            <div className="card-body">
              <span className="card-holder">{card.cardHolder}</span>
              <span className="card-number">{card.cardNumber}</span>
            </div>
            <div className="card-footer">
              <span className="spending">Spending this month</span>
              <span className="amount">{card.spending}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBankAccounts;
