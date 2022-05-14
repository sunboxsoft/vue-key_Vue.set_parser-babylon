<template>
  <section class="CaculateRate">
    <ul>
      <li>File</li>
      <li>code</li>
      <li>comment</li>
      <li>blank</li>
      <li>total</li>
      <li>comment Rate</li>
      <li>comment Absent</li>
      <template v-for="item in dataSource">
        <li v-for="(itemChild, index) in Object.keys(item)" :key="index">
          <input
            v-if="['comment', 'total'].indexOf(itemChild) >= 0"
            type="text"
            v-model="item[itemChild]"
          />
          <template v-else> {{ item[itemChild] }}</template>
        </li>
        <li>
          {{ toPercent(item.comment / item.total) }}
        </li>
        <li :class="[{'red':item.comment / item.total<0.15}]">
          {{ Math.ceil((0.15 - item.comment / item.total) * item.total)>0?Math.ceil((0.15 - item.comment / item.total) * item.total) :0}}
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CaculateRate",
  data() {
    return {
      dataSource: [
        {
          File: "VFormDesignerModal.vue",
          code: 181,
          comment: 25,
          blank: 0,
          total: 206
        }
      ]
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    toPercent(point) {
      var percent = Number(point * 100).toFixed(2);
      percent += "%";
      return percent;
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}
li:nth-child(-n + 7) {
  background-color: skyblue;
}
li {
  width: calc(100% / 7);
  line-height: 50px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
}
.red {
  color: red;
}
</style>
