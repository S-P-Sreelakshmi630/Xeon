import { useState } from 'react'; 
import PropTypes from 'prop-types';
//import './TransactionHistory.css';



const sampleAccounts = [
  {
    appwriteItemId: 'account123',
    data: {
      name: 'Main Account',
      officialName: 'Main Checking Account',
      mask: '1234',
      currentBalance: 5000.00,
      transactions: [
        { id: 1, date: '2024-01-01', description: 'Grocery Store', amount: -50.25 },
        { id: 2, date: '2024-01-02', description: 'Gas Station', amount: -40.00 },
        { id: 3, date: '2024-01-03', description: 'Electricity Bill', amount: -75.00 },
        
      ],
    },
  },

];

const formatAmount = amount => `$${amount.toFixed(2)}`;

const TransactionHistory = ({ searchParams }) => {
  const { id, page } = searchParams || {};
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const account = sampleAccounts.find(acc => acc.appwriteItemId === id) || sampleAccounts[0];

  const rowsPerPage = 10;
  const totalPages = account ? Math.ceil(account.data.transactions.length / rowsPerPage) : 1;

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account ? account.data.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction) : [];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <div className="header-box">
          <h1>Transaction History</h1>
          <p>See your bank details and transactions.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
            <p className="text-14 text-blue-25">
              {account?.data.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="my-4 w-full pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)} disabled={index + 1 === currentPage}>
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  searchParams: PropTypes.shape({
    id: PropTypes.string,
    page: PropTypes.number,
  }),
};

export default TransactionHistory;
