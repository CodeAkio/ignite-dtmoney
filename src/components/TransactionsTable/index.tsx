import { useContext } from 'react';

import { formatPrice, formatDate } from '../../util/format';
import { TransactionsContext } from '../../context/TransactionsContext';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

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
