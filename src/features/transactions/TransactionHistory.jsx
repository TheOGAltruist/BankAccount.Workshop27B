import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal, transfer } from "./transactionsSlice";
import "./transactionHistory.scss";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const fullHistory = useSelector((state) => state.transaction.history);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col" colSpan={2}>Sender/Recipient</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            fullHistory.map((history, idx) => {
            return (<tr key={idx}>
                <td>{history.type}</td>
                <td colSpan={2}>{history.person}</td>
                <td>{history.amount}</td>
                <td>{history.balance}</td>
                <td>{history.status === true ? "Success" : "Failed"}</td>
            </tr>)
            })
          }
        </tbody>
      </table>
    </section>
  );
}
