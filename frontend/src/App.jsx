import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/UserContext'
import { useNoteService } from '../services/NoteService'

const App = () => {
  const user = useUser()
  const noteService = useNoteService()
  const [notes, setNotes] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const initialNotes = await noteService.getAll()
        console.log('Fetched notes:', initialNotes)
        console.log('Current user:', user)
        setNotes(initialNotes)
      } catch (error) {
        console.error('Error fetching notes:', error)
        setErrorMessage('Failed to fetch notes')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
    fetchNotes()
  }, [user])

  return (
    <div>
      {/* Render your component content here */}
    </div>
  )
}

export default App 