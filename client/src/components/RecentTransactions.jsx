/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";

//static data

// const RecentTransactions = ({
//   accounts,
//   transactions = [],
//   appwriteItemId,
//   page = 1,
// }) => {
//   return (
//     <section className="recent-transactions">
//       <header className="flex items-center justify-between">
//         <h2 className="recent-transactions-label">Recent transactions</h2>
//         <Link
//           href={`/transaction-history/?id=${appwriteItemId}`}
//           className="view-all-btn"
//         >
//           View all
//         </Link>
//       </header>
//       <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">Active</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>

//       </section>

//   );
// };
const RecentTransactions = ({ transactions = []}) => {

  (
  <div>
    <h2 className="recent-transactions-heading recent-transactions-label">
      Recent Transactions
    </h2>
    <div className="table-responsive ">
      {" "}
      {/* Added to make the table horizontally scrollable on smaller screens */}
      <table className="table table-striped table-hover mt-3 recent-transactions-table">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Transaction</th>
            <th scope="col">Status</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.accountId}>
              <td>{transaction.accountId}</td>
              <td
                className={
                  transaction.amount >= 0 ? "text-success" : "text-danger"
                }
              >
                ${Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td>{transaction.description}</td>
              <td
                className={
                  transaction.status == "success"
                    ? "text-success"
                    : "text-danger"
                }
              >
                {transaction.status}
              </td>
              <td>
                {Array.isArray(transaction.category) ? (
                  transaction.category.map((category, index) => (
                    <span
                      key={index}
                      className={`badge ${getCategoryBadgeClass(
                        category
                      )} border border-primary text-primary me-1 px-2 py-1`}
                    >
                      {category}
                    </span>
                  ))
                ) : (
                  <span
                    className={`badge ${getCategoryBadgeClass(
                      transaction.category
                    )} border border-primary text-primary me-1 px-2 py-1`}
                  >
                    {transaction.category}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)};

// Function to determine the CSS class for category badges and border color
const getCategoryBadgeClass = (category) => {
  switch (category.toLowerCase()) {
    case "deposit":
      return "border-success text-success";
    case "transfer":
      return "border-danger text-danger";
    default:
      return "border-primary text-primary";
  }
};

export default RecentTransactions;
