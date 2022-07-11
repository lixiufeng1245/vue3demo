<template>
  <div class="home">
    <div class="wew" @click="clickON"><van-icon name="chat-o" />{{ bads }}</div>
    <div>{{ a }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="s" @exly="gous" />
    <ul>
      <li v-for="item in obs" :key="item">
        {{ item
        }}<span>
          <svg-icon icon="zhouzi" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
// import {useStore,mapActions} from 'vuex'
let bads = ref(0)
let obs = reactive({ a: 0, b: 1 })
let toA = toRefs(obs)
let { a, b } = toA
const st = useStore()
console.log(st)
console.log(a.value, b.value)
let gous = (news) => {
  st.commit('getNumS', 789)
  console.log(st.getters.getUsers)
  bads.value = news
  b.value = news
  toA.a = news
}
// let setArticleDetail = async () => {
//   console.log('haha')
// }
// getArticleDetail()
</script>
<style scoped>
.wew {
  width: 75px;
  height: 30px;
}
</style>
