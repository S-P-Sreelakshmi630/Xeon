import React, { useEffect, useState } from 'react';
// import HeaderBox from '../../components/HeaderBox';
// import { Pagination } from '../../components/Pagination';
// import TransactionsTable from '../../components/TransactionsTable';
// import { getAccount, getAccounts } from '../../lib/actions/bank.actions';
// import { getLoggedInUser } from '../../lib/actions/user.actions';
// import { formatAmount } from '../../lib/utils/formatAmount';
import './TransactionHistory.css';

const TransactionHistory = ({ searchParams: { id, page } }) => {
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [loggedIn, setLoggedIn] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const loggedInUser = await getLoggedInUser();
      setLoggedIn(loggedInUser);

      const userAccounts = await getAccounts({ userId: loggedInUser.$id });
      if (!userAccounts) return;

      const accountsData = userAccounts?.data;
      setAccounts(accountsData);

      const appwriteItemId = id || accountsData[0]?.appwriteItemId;
      const accountData = await getAccount({ appwriteItemId });
      setAccount(accountData);
    };

    fetchData();
  }, [id]);

  const rowsPerPage = 10;
  const totalPages = account ? Math.ceil(account.transactions.length / rowsPerPage) : 1;

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account ? account.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction) : [];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
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
          <TransactionsTable 
            transactions={currentTransactions}
          />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={currentPage} />
              </div>
            )}
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;
