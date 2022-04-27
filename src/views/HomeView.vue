<template>
  <div class="home">
    {{ text }}
    <br/>
    {{ arr }}
    <br/>
    <MyButton>
      <template #icon="{count, action}">
        <button @click="action">Click action</button>>
        + {{ count }} {{someMethod(count)}} раз 
      </template>
      Нажать
    </MyButton>
    <MyName msg="Hello" :text="text"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'

export default {
  name: 'HomeView',
  components: {
    MyName: HelloWorld,
    MyButton
},
  data() {
    return {
      text: "Some text",
      arr: [1,2,3,4,5]
    }
  },
  methods: {
    someMethod(data){
      console.log(data)
    }
  },
}
</script>

<style>
</style>