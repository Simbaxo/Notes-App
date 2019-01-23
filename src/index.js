import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// // removeNote()
// // updateNote()
// console.log(getNotes())

console.log(getFilters())
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
})
console.log(getFilters())