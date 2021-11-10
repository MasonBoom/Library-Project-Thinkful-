function findAccountById(accounts, id) {
  let account = accounts.find((account) => id === account.id);
  return account
}

function sortAccountsByLastName(accounts) {
const result = accounts.sort((nameA, nameB) => nameA.name.last < nameB.name.last ? -1 : 1 );
return result
}

function getTotalNumberOfBorrows(account, books) {
let borrow = 0
for (let i = 0; i < books.length; i++) {
  if (books[i].borrows.some(borrow => borrow.id === account.id)) {
    borrow += 1
  }
}
  return borrow
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (!borrow.returned && borrow.id == account.id) {
        book.author = authors.find((author) => author.id == book.authorId);
        result.push(book);
      }
    });
  });
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
