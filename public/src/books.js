function findAuthorById(authors, id) {
  let authorName = authors.find((author) => author.id === id)
  return authorName
}

function findBookById(books, id) {
   let bookNames = books.find((book) =>  book.id === id)
  return bookNames
}

function partitionBooksByBorrowedStatus(books) {
  let arr1 = books.filter((book) => book.borrows[0].returned === false);
  let arr2 = books.filter((book) => book.borrows[0].returned !== false)
  return [arr1,arr2 ]  
}

function getBorrowersForBook(book, accounts) {
  
  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id )
   result.returned = borrower.returned 
   
   return result
  })
   return result.slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
