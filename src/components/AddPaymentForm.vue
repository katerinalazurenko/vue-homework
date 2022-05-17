<template>
  <div class="form-wrapper">
    <input v-model="date"  placeholder="date"/>
    <select v-model="category" v-if="categoryList">
      <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
    </select>
    <input v-model.number="value" placeholder="value"/>
    <button @click="onClickSave">Save</button>
  </div>
</template>
<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object
  },
  data() {
    return {
      date: "",
      category: "",
      value: ""
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onClickSave(){
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
        id: this.id
      }
      if(this.value || this.category || this.date){
        const idx = this.$store.getters.getPaymentsList.indexOf(this.values.item)
        const item = {
          row: data,
          index: idx
        }
        console.log(idx);
        this.$store.commit('updateDataToPaymentsList', item)
      } else this.$store.commit('addDataToPaymentsList', data)
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    if(this.values?.item){
      const {category, date, value, id} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      this.id = id
    }
    const {category, section} = this.$route.params
    if(!category || !section) {
      return 
    }
    this.category = category
    const {value} = this.$route.query
    if(!value) return 
    this.value = value
    if(this.value && this.category) {
       this.onClickSave()
    }
  },
}
</script>
