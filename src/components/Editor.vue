<template>
  <div id="note-editor">
    <label for="note">To leave a note</label>
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control"
      id="note"
    >
    </textarea>
    <!--<label for="comment">To leave a comment</label>-->
    <!--<textarea-->
      <!--:value="activeNoteComment"-->
      <!--@input="editComment"-->
      <!--class="form-control"-->
      <!--id="comment"-->
    <!--&gt;-->
    <!--</textarea>-->
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['activeNoteText']), //, ['activeNoteComment']
  methods: mapActions(['editNote']) //, ['editComment']
}
</script>
