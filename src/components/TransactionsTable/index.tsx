import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { formatPrice, formatDate } from '../../util/format';

import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([] as Transaction[]);

  useEffect(() => {
    api.get('transactions')
      .then(reaponse => setTransactions(reaponse.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatPrice(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {formatDate(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
