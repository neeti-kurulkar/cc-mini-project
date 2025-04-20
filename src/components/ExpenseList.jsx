const ExpenseList = ({ expenses }) => {
    return (
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.title} - ${e.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ExpenseList;  