// js/app.js
import { getTransactions, saveTransactions } from './storage.js';
import { renderTransactions, updateBalance } from './ui.js';

const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const totalBalanceElement = document.getElementById('total-balance');

let transactions = getTransactions();

const initializeApp = () => {
  renderTransactions(transactions, transactionList);
  updateBalance(transactions, totalBalanceElement);
};

const addTransaction = (transaction) => {
  transactions.push(transaction);
  saveTransactions(transactions);
  renderTransactions(transactions, transactionList);
  updateBalance(transactions, totalBalanceElement);
};

transactionForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const typeElement = document.getElementById('transaction-type');
  const amountElement = document.getElementById('transaction-amount');
  const dateElement = document.getElementById('transaction-date');
  const descriptionElement = document.getElementById('transaction-description');

  const type = typeElement.value;
  const amount = parseFloat(amountElement.value);
  const date = dateElement.value;
  const description = descriptionElement.value.trim();

  if (!isNaN(amount) && amount > 0 && date && description) {
    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      date,
      description
    };

    addTransaction(newTransaction);
    transactionForm.reset();
  } else {
    alert("Lütfen tüm alanları doğru doldurun.");
  }
});

document.addEventListener("DOMContentLoaded", initializeApp);
