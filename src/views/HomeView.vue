<template>
  <div class="home">
    {{ text }}
    <br/>
    {{ arr }}
    <MyName msg="Hello" :text="text" :obj="obj"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    MyName: HelloWorld
  },
  data() {
    return {
      obj: {
        text: 'asdas'
      },
      text: "Some text",
      arr: [1,2,3,4,5]
    }
  },
}
</script>

<style>
</style>