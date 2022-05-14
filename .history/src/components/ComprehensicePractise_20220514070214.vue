<template>
  <section class="ComprehensicePractise">
      <button @click="changeOneRecord">更改第一条记录</button>
    <ul>
        <li v-for="item in hobby" :key="item">
            {{item}}
        </li>
    </ul>
  </section>
</template>

<script>
export default {
 name: 'ComprehensicePractise',
  data() {
    return {
        hobby:['抽烟致癌','喝酒肥胖','烫头坐牢']
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
      changeOneRecord(){
          this.hobby[0]='学习'
      }
  }
}
</script>

<style>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
}
li{
    flex:1;
    line-height: 50px;
}
</style>
