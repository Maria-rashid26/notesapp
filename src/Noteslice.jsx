import { createSlice } from "@reduxjs/toolkit";

let nextId = 2;

const NotesList = [
  {
    id: 1,
    title: "Title",
    subtitle: "SubTitle",
    content: "Content",
    color: "#000000",
  },
];

const Noteslice = createSlice({
  name: "users",
  initialState: {
    value: NotesList,
  },
  reducers: {
    addNotes(state, action) {
      const { title, subtitle, content } = action.payload;
      state.value.push({
        id: nextId++,
        title,
        subtitle,
        content,
      });
    },
    deletNotes(state, action) {
      state.value = state.value.filter((note) => note.id !== action.payload.id);
    },
    editNotes(state, action) {
      const { id, title, subtitle, content } = action.payload;
      const note = state.value.find((note) => note.id === id);
      if (note) {
        note.title = title;
        note.subtitle = subtitle;
        note.content = content;
      }
    },
  },
});

export default Noteslice;
export const { addNotes, deletNotes, editNotes } = Noteslice.actions;
