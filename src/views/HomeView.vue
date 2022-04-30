<template>
  <div class="home">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="paymentsList"/>
      <AddPaymentForm @addNewPayment="addPaymentData" v-show="clicked"/>
      <br />
      <button class="btn" @click="clicked = !clicked">ADD NEW COST +</button>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
export default {
  name: "HomeView",
  components: {
    PaymentsDisplay,
    AddPaymentForm
},
  data() {
    return {
      paymentsList: [],
      clicked: false,
    };
  },
  methods: {
    addPaymentData(data) {
      this.paymentsList.push(data)
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData()
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
}
.btn{
  background-color: lightseagreen;
  border: none;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
}
</style>
