export const getTransactions = () => {
    const storedData = localStorage.getItem('transactions');
    return storedData ? JSON.parse(storedData) : [];
  };
  
  export const saveTransactions = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  