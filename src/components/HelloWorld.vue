<template>
  <div class="hello">
    {{ obj }}
    <h1>{{ msg }} - {{ msg.length }}</h1>
    <hr />
    <input v-model="textValue" @focus="onFocus" />
    <input v-model.trim="textValue2" type="text" />
    <button v-on:click="result = 1 + 9">Click</button>
    <!-- <button @click="obj.text='some text'">Change</button> -->
    <hr />
    <input v-model.number.lazy="operand1"/>
    <input v-model.number="operand2"/>
    = {{ result }}
    <br>
    <button @click="sum">+</button>
    <button @click="result = operand1 - operand2">-</button>
    <button @click="sub">/</button>
    <button @click="multiply">*</button>
    <button @click="pow">pow</button>
    <button @click="subInt" :disabled='operand2===0'>subInt</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
    },
    text: {
      type: String,
    },
    obj: Object
  },
  data() {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
      textValue: "",
      textValue2: "",
    };
  },
  methods: {
    onBlur() {
      console.log(this.textValue);
    },
    onFocus() {
      console.log("focus");
    },
    sum(){
      this.result = this.operand1 + this.operand2
    },
    sub(){
      const {operand1, operand2} = this
      this.result = operand1 / operand2
    },
    multiply(){
      this.result = this.operand1 * this.operand2
    },
    pow(){
      this.result = Math.pow(this.operand1, this.operand2)
    },
    subInt(){
      if (Number.isInteger(this.operand1) && Number.isInteger(this.operand2)){
        this.result = this.operand1 / this.operand2
      } 
    },
  },
};
</script>
