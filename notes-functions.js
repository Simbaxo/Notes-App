// Read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // Setup the remove note button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.setAttribute('href', `edit.html#${note.id}`)
  noteEl.appendChild(textEl)

  return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}

// Sort Notes
const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

// Find Note
const findNote = function (notes, noteTitle) {
  return notes.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// Find Notes
const findNotes = function (notes, query) {
  return filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}