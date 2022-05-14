<template>
  <section class="ComprehensicePractise">
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
  methods: {}
}
</script>

<style>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}
</style>
