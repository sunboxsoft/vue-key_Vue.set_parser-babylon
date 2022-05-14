<template>
  <section class="ComprehensicePractise">
    <ul>
      <li><button @click="addAge">新增年龄属性</button></li>
      <li v-if="student.age">年龄{{ student.age }}</li>
    </ul>

    <!-- 操作数组 -->
    <button @click="changeOneRecord">更改第一条记录</button>
    <button @click.once="addOneRecord">在第一行加入一条记录</button>
    <button @click.once="addOneLastRecord">在最后行加入一条记录</button>

    <ul>
      <li v-for="item in hobby_" :key="item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
import Vue from "vue";
export default {
  name: "ComprehensicePractise",
  data() {
    return {
      student: {
        hobby: ["抽烟致癌", "喝酒肥胖", "烫头坐牢"]
      }
    };
  },
  components: {},
  computed: {
    hobby_() {
      return this.student.hobby.reverse();
    }
  },
  watch: {},
  mounted() {},
  methods: {
    // 改变一条记录
    changeOneRecord() {
      //this.hobby[0]='学习'  //不生效
      // 方法一
      //this.hobby.splice(0,1,'学习this.hobby.splice')
      // 方法二
      this.$set(this.student.hobby, 0, "学习this.$set(");
      Vue.set(this.student.hobby, 0, "学习 Vue.set(");
    },
    addOneRecord() {
      this.student.hobby.unshift("居家办公");
    },
    addOneLastRecord() {
      this.student.hobby.push("单词语法");
    },
    addAge() {
      // 两种新增属性的方式
      Vue.set(this.student, "age", 77);
      this.$set(this.student, "age", 88);
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
  flex-direction: column;
}
li {
  flex: 1;
  line-height: 50px;
}
</style>
