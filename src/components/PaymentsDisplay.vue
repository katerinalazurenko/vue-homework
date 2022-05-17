<template>
  <div class="paymentsList">
    <div class="paymmentItem" v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span><span class="cursor" @click="openContextMenuClick($event, item)">...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: ()=>[]
    }
  },
  methods: {
    editItem(item){
      this.$modal.show('addform', {title: "Add New Payment", component: "AddPaymentForm", props: {
        item
      }})    },
    deleteItem(id){
      this.$contextMenu.hide()
      this.$store.getters.getPaymentsList.forEach((item, i) => {
        if (item.id == id) this.$store.getters.getPaymentsList.splice(i, 1)
      })
    },
    openContextMenuClick(event,item){
      const items = [
        {
          text: "Edit", action: ()=> {this.editItem(item)}
        },
        {
          text: "Delete item", action: ()=> {this.deleteItem(item.id)}
        }
      ]
      this.$contextMenu.show({event,items})
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor{
  cursor: pointer;
}
</style>