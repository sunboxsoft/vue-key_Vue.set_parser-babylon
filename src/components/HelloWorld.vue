<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="text" v-model="keywords" />
    <button @click.once="AddRecord">新增一条数据</button>
    <button @click="sortType = 1">升序</button>
    <button @click="sortType = 2">降序</button>
    <button @click="sortType = 0">原序</button>
    <button @click="updateOneRecord">修改一条数据</button>
    <ul>
      <li v-for="(item, index) in dataSource1" :key="item.id">
        {{ index }}-{{ item.name }}-{{ item.age }}
        <input type="text" name="" id="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      keywords: "",
      sortType: 0,
      dataSource: [
        { id: "001", name: "jiaguoqiang", age: 40 },
        { id: "002", name: "wanglin", age: 35 },
        { id: "003", name: "jiajindian", age: 10 }
      ]
      // dataSource1:[]  这里和watch搭配
    };
  },
  methods: {
    AddRecord() {
      this.dataSource.unshift({ id: "004", name: "jiajinming", age: 3 });
    },
    updateOneRecord(){
      this.dataSource[0]={ id: "001", name: "jiaguoqiang1111", age: 400 }
    }
  },
  watch: {
    //#region  搜索开始
    // keywords(val){
    //   console.log(val)
    //   this.dataSource1= this.dataSource.filter(item=>item.name.indexOf(val)!=-1)
    // }
    // 打开页面时立即查询
    // keywords:{
    //   immediate:true,
    //   handler(val){
    //     console.log(val)
    //     this.dataSource1= this.dataSource.filter(item=>item.name.indexOf(val)!=-1)
    //   }
    // }
    //#endregion
  },
  computed: {
    dataSource1() {
      //return this.dataSource.filter(item=>item.name.indexOf(this.keywords)!=-1)
      let arr = this.dataSource.filter(
        item => item.name.indexOf(this.keywords) != -1
      );
      if (this.sortType) {
        arr.sort((a, b) => {
         return this.sortType == 1 ? a.age - b.age : b.age - a.age;
        });
      }
      return arr;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
