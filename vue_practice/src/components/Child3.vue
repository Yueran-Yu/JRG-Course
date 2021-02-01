<template>
  <div>
    Child3
  </div>
</template>

<script>
import log from '../mixins/log.js'

export default {
  data: function () {
    return {name: 'Child3'}
  },
  mixins: [log]
}
</script>