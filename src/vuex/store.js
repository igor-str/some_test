import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  activeComment: {}
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'Write new note'
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  // ADD_COMMENT (state) {
  //   const newComment = {
  //     text: 'To leave a comment'
  //   }
  //   state.notes.push(newComment)
  //   state.activeComment = newComment
  // },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1)
    state.activeNote = state.notes[0] || {}
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeNoteText: state => state.activeNote.text
  // activeNoteComment: state => state.activeComment.text
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
