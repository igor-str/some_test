<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([

  ]),
  methods: {
    ...mapActions([
      'addNote',
      'deleteNote'
    ])
  }
}
</script>
