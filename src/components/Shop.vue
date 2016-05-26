<template>
  <div>
    the id is {{id}}
    <header class="jumbotron hero-spacer">
        <h2>Welcome to {{}}</h2>
        <p v-if="">by {{}}</p>
        <p>{{}} </p>
    </header>
  </div>
</template>

<script>
// import firebaseApp from '../firebase';
// import VueRouter from '../router/index';
// const router = VueRouter.router;

export default {
  data() {
    return {
      // id: router.$router.params.shopid,
      id: '',
    };
  },
  route: {
    data(transition) {
      const shopId = transition.to.params.shopid;
      this.id = shopId;
    },
  },
};
</script>
