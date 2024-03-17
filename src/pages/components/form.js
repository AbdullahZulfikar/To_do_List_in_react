import React from 'react';
import { useGetTransactions } from "../../customs/hooks/useGetTransaction"; // Update with the correct path

export const TransactionTable = () => {
  const { transactions } = useGetTransactions();

  return (
    <div className="container mx-auto p-4 ">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b font-bold">{transaction.description}</td>
              <td className="py-2 px-4 border-b">${transaction.transactionAmount}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`text-sm font-semibold ${
                    transaction.transactionType === 'expense' ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {transaction.transactionType}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


