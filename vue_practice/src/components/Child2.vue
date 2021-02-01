<template>
  <div>
    Child2
  </div>
</template>

<script>
import log from '../mixins/log.js'

export default {
  data: function () {
    return {name: 'Child2'}
  },
  mixins: [log]
}
</script>