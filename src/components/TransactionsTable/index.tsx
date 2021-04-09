import { useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('transactions')
      .then(reaponse => console.log(reaponse.data))
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
