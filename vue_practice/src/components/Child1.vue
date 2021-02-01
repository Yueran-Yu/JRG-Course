<template>
  <div>
    Child1
  </div>
</template>

<script>
import log from '../mixins/log.js'

export default {
  data: function () {
    return {name: 'Child1'}
  },
  mixins: [log]
}
</script>