// js/ui.js
import { saveTransactions, getTransactions } from './storage.js';

export const renderTransactions = (transactions, tableBody) => {
  tableBody.innerHTML = '';

  transactions.forEach(transaction => {
    const tr = document.createElement('tr');

    const formattedAmount = transaction.type === 'income'
      ? `+${transaction.amount}`
      : `-${transaction.amount}`;

    tr.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.type === 'income' ? 'Gelir' : 'Gider'}</td>
      <td>${transaction.description}</td>
      <td>${formattedAmount} TL</td>
      <td>
        <button class="btn btn-danger btn-sm delete-btn" data-id="${transaction.id}">Sil</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  attachDeleteEvents(tableBody);
};

const attachDeleteEvents = (tableBody) => {
  const deleteButtons = tableBody.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      deleteTransaction(id);
    });
  });
};

const deleteTransaction = (id) => {
  let transactions = getTransactions();
  transactions = transactions.filter(transaction => transaction.id !== id);
  saveTransactions(transactions);

  const tableBody = document.getElementById('transaction-list');
  renderTransactions(transactions, tableBody);

  const balanceElement = document.getElementById('total-balance');
  updateBalance(transactions, balanceElement);
};

export const updateBalance = (transactions, balanceElement) => {
  let total = 0;
  transactions.forEach(transaction => {
    total += transaction.type === 'income' ? transaction.amount : -transaction.amount;
  });
  balanceElement.textContent = `${total.toFixed(2)} TL`;
};
