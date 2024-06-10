//import React from 'react';
import BankCard from "./BankCard";
import HeaderBox from "./HeaderBox";


const cards = [
  {
    bankName: "Horizon Banking",
    cardHolder: "ADRIAN HAIGHT",
    cardNumber: "1234 1234 1234 1234",
    spending: "$2,840.40",
  },
  {
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
  },
];

const MyBankAccounts = ({ title, user, type, subtext }) => {
  return (
    <div className="flex w-full">
      <div className="my-banks">
        <HeaderBox title={title} user={user} subtext={subtext} type={type} />
        <div className="space-y-4">
          <h2 className="header-2">
              Your cards
          </h2>
          <div className= "flex flex-wrap gap-6">
          {cards.map((card, index) => (

            <BankCard 
              key={index}
              account={card}
              userName={user}
            />
            
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBankAccounts;
