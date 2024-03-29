import css from './Trans.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tableData}>
            <td className={css.tableDataCell}>{item.type}</td>
            <td className={css.tableDataCell}>{item.amount}</td>
            <td className={css.tableDataCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};