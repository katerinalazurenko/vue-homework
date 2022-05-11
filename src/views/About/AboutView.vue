<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 200}}">Food 200</router-link>
    <br />
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 50}}">Transport 50</router-link>
    <br />
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 200}}">Entertainment 200</router-link>
    <br />
    {{ status }}
    <MyVideoPlayer />
  </div>
</template>

<script>
import MyVideoPlayer from "@/components/MyVideoPlayer.vue"
export default {
    name: "AboutView",
    component: {},
    data() {
        return {
          status: 'stop'
        };
    },
    components: { MyVideoPlayer }
}
</script>