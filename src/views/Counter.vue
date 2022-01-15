<template>
  <div>
    <h1>Counter</h1>
    <h1>{{ wellcome }}</h1>
    <input type="text" v-model="name" />
    <button @click="updtName">Update Name</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["username", "message"]),
    ...mapGetters(["wellcome"]),
  },
  methods: {
    ...mapActions(["updateUserName"]),
    updtName() {
      this.updateUserName(this.name);
      console.log(this.name);
    },
  },
};
</script>

<style></style>
