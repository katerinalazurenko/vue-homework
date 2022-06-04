<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 pb-3">My Personal cost</div>
        
        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on }">
            <v-btn v-on="on" class="mb-3" color="teal" dark>ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn>
          </template>

          <v-card>
            <AddPaymentForm @closeModal='dialog = false'/>
          </v-card>
        </v-dialog>

        <PaymentsDisplayVue :items="paymentsList" :dialog="dialog"/>
      </v-col>
      <v-col class="mt-10">
        <ChartPayments />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplayVue from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapMutations, mapGetters } from "vuex";
import ChartPayments from '@/components/ChartPayments.vue';
export default {
  name: "DashboardView",
  components: {
    PaymentsDisplayVue,
    AddPaymentForm,
    ChartPayments
},
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentsList;
    },
    ...mapGetters(['getFullPaymentValue', 'getPaymentsList'])
  },
  methods: {
    ...mapMutations({
      MyMutation: 'setPaymentsListData'
    }),
    addPaymentData(data) {
      this.paymentsList.push(data)
    }
  },
   created() {
    this.$store.dispatch('fetchData')
  },
  async mounted() {
    await this.$store.dispatch("fetchData");
  }
}
</script>