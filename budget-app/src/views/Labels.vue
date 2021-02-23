<template>
  <div>
    <Layout>
      <ol class="tags">
        <li><span>'Residence'</span>
          <Icon name="arrow"/>
        </li>
        <li><span>'Food'</span>
          <Icon name="arrow"/>
        </li>
        <li><span>'Wear'</span>
          <Icon name="arrow"/>
        </li>
        <li><span>Transportation'</span>'
          <Icon name="arrow"/>
        </li>
        <li><span>'Utilities'</span>
          <Icon name="arrow"/>
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag">New Tag</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "label"
}
</script>

<style lang="scss" scoped>
.createTag {
  background: #de2f76;
  color: white;
  font-weight:bolder;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  //表示父元素
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

.tags {
  background: #ffe3eb;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #fcc5d1;
    justify-content: space-between;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
</style>