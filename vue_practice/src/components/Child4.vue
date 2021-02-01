<template>
  <div>
    Child4
  </div>
</template>

<script>
import log from '../mixins/log.js'

export default {
  data: function () {
    return {name: 'Child4'}
  },
  mixins: [log]
}
</script>