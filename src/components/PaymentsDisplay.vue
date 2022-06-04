<template>
<div>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
    class="elevation-1"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <AddPaymentForm :values="values" v-if="show" @closeModal='show = false'/>
         
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <div class="text-center">
    <v-pagination
    v-model="page"
    :length="pageCount"
    ></v-pagination>
  </div>
</div> 
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
export default {
  name: "PaymentsDisplay",
  components: {
    AddPaymentForm
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: 'Id', value: 'id', sortable: false },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'value' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      values:{},
      show: this.dialog
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    dialog: Boolean
  },

  methods: {
    editItem (item) {
      this.values = item
      this.show = true
    },

    deleteItem(id){
      this.$store.commit('deleteDataToPaymentsList', id)
    }
  }
}
</script>
