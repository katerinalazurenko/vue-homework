<template>
  <v-card class="pa-8">
    <v-text-field v-model="date" placeholder="date" label="Date" />
    <v-text-field v-model="value" label="Value"/>
    <v-select v-model="category" :items="categoryList"/>
    <v-btn class="mr-5" color="teal" dark @click="onClickSave">Save</v-btn>
    <v-btn color="teal" dark @click="onClickClose">Close</v-btn>
  </v-card>
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
      value: "",
      id: ""
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
      return new Intl.DateTimeFormat('ru', options).format(today)
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
        id: this.id || Math.floor(Math.random()* Math.floor(Math.random() * Date.now()))
      }
      if(this.values){
        const idx = this.$store.getters.getPaymentsList.indexOf(this.values)
        const item = {
          row: data,
          index: idx
        }
        this.$store.commit('updateDataToPaymentsList', item)
      } else this.$store.commit('addDataToPaymentsList', data)
      this.onClickClose()
    },
    onClickClose(){
      this.date = "",
      this.category = "",
      this.value = "",
      this.id = ""
      this.$emit('closeModal')
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    this.date = this.getCurrentDate
    this.id = Math.floor(Math.random()* Math.floor(Math.random() * Date.now()))
    if(this.values) {
      const {category, date, value, id} = this.values
      this.value = value
      this.date = date
      this.category = category
      this.id = id
      return 
    }
  },
  updated() {
    this.date = this.getCurrentDate
  }
}
</script>
