import React, { useState } from 'react'

const Note = ({ note, toggleImportance, onEdit, user }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(note.content)
  const label = note.important ? 'make not important' : 'make important'

  console.log('Note component - note:', note)
  console.log('Note component - user:', user)
  console.log('Note component - isNoteOwner:', user && note.user && note.user.id === user.id)

  const isNoteOwner = user && note.user && note.user.id === user.id

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <div>
      {/* Rest of the component code */}
    </div>
  )
}

export default Note 