import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.2 +
    ')';

  return color;
};

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction__table}>
      <thead>
        <tr className={css.transaction__row} style={{ backgroundColor: createColor() }}>
          <th className={css.transaction__head}>Type</th>
          <th className={css.transaction__head}>Amount</th>
          <th className={css.transaction__head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.transaction__row} key={id} style={{ backgroundColor: createColor() }}>
              <td className={css.transaction__data}>{type}</td>
              <td className={css.transaction__data}>{amount}</td>
              <td className={css.transaction__data}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
  
};