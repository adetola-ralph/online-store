<template>
  <div>
    <button v-if="authenticated" type="button" class="btn btn-danger btn-circle btn-lg" id="addButton" v-link="'/createproduct'">
      <i class="fa fa-plus"></i>
    </button>
    <header class="jumbotron hero-spacer">
        <h2>Welcome to {{storeName}}</h2>
        <p>{{storeOwner}}</p>
        <p>{{storeDescription}} </p>
    </header>
    <div class="row">
      <div class="col-sm-12">
        <div class="row text-center">
          <div class="col-md-3 col-sm-6 hero-feature" v-for="product in productsDetails">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">{{product.product_name}}</h3>
              </div>
              <div class="panel-body">
                {{product.product_description}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '../firebase';
// import VueRouter from '../router/index';
// const router = VueRouter.router;

export default {
  data() {
    return {
      // id: router.$router.params.shopid,
      id: '',
      storeName: '',
      storeOwner: '',
      storeOwnerId: '',
      storeDescription: '',
      productsId: [],
      productsDetails: [],
      authenticated: false,
    };
  },
  route: {
    data(transition) {
      const shopId = transition.to.params.shopid;
      this.id = shopId;

      firebaseApp.firebaseDB.ref(`/stores/${shopId}`).once('value').then((snapshot) => {
        this.storeName = snapshot.val().store_name;
        this.storeDescription = snapshot.val().store_description;
        this.storeOwnerId = snapshot.val().created_by;

        if (snapshot.val().products) {
          console.log(snapshot.val().products);
          for (const key in snapshot.val().products) {
            if (snapshot.val().products.hasOwnProperty(key)) {
              this.productsId.push(key);
              console.log(key);
            }
          }
        }

        this.productsId.forEach((element) => {
          firebaseApp.firebaseDB
          .ref(`/products/${element}`)
          .once('value').then((snapshot2) => {
            const products = snapshot2.val();
            this.productsDetails.push(products);
          });
        });

        firebaseApp.firebaseDB
        .ref(`/users/${this.storeOwnerId}`)
        .once('value').then((snapshot1) => {
          const userName = snapshot1.val().name;
          this.storeOwner = userName;
        });
      });
    },
  },
  methods: {
    checkAuth() {
      const authCondition = localStorage.getItem('online_store_user_authenticated');

      if (authCondition !== null && authCondition) {
        this.authenticated = true;
        return true;
      }
      return false;
    },
  },
  ready() {
    this.checkAuth();
  },
};
</script>
