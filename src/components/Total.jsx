const Total = ({ expenses }) => {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    return <h3>Total: ${total.toFixed(2)}</h3>;
  };
  
  export default Total;  