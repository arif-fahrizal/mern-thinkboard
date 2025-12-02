import Note from "../models/Note.js"

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }) // 1 for asc, -1 for desc
    
    res.status(200).json({ message: "Successfully get all notes", notes })  
  } catch (error) {
    console.error("Error in getAllNotes controller", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)

    if (!note) return res.status(404).json({ message: "Note not found" })

    res.status(200).json({ message: "Successfully get not by id", note })  
  } catch (error) {
    console.error("Error in getNoteById controller", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body
    const note = new Note({ title, content })

    const savednNote = await note.save()

    res.status(201).json({ message: "Successfully created note", note: savednNote })  
  } catch (error) {
    console.error("Error in createNote controller", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true })

    if (!updatedNote) return res.status(404).json({ message: "Note not found" })
    
    res.status(200).json({ message: "Successfully updated note", note: updatedNote })  
  } catch (error) {
    console.error("Error in updateNote controller", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params
    const deletedNote = await Note.findByIdAndDelete(id)

    if(!deletedNote) return res.status(404).json({ message: "Note not found" })   

    res.status(200).json({ message: "Successfully deleted note" })  
  } catch (error) {
    console.error("Error in deleteNote controller", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}