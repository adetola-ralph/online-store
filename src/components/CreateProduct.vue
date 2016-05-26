<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <form>
        <div class="form-group">
          <label for="productname">Product Name</label>
          <input type="text" class="form-control" id="productname" placeholder="Product Name" v-model="productName">
        </div>
        <div class="form-group">
          <label for="productdescription">Product Description</label>
          <textarea class="form-control" rows="3" id="productdescription" v-model="productDescription"></textarea>
        </div>
        <button type="submit" class="btn btn-success" v-on:click.stop.prevent="createProduct">Submit</button>
      </form>
      <p class="text-centre">{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import VueRouter from '../router/index';
import firebaseApp from '../firebase';

const router = VueRouter.router;

export default {
  data() {
    return {
      sid: '',
      productName: '',
      productDescription: '',
      errorMessage: '',
    };
  },
  methods: {
    checkAuth() {
      const authCondition = localStorage.getItem('online_store_user_authenticated');
      // alert(localStorage.getItem('online_store_user_authenticated'));
      if (authCondition === null || typeof authCondition === 'undefined') {
        router.go({ path: '/home' });
      }
    },
    createProduct() {
      if (this.productName.length > 0 && this.productDescription.length > 0) {
        const payload = {
          product_name: this.productName,
          product_description: this.productDescription,
        };

        const productId = firebaseApp.firebaseDB.ref().child('products').push().key;
        console.log(productId);
        console.log(payload);
        firebaseApp.firebaseDB.ref(`/products/${productId}`).set(payload);

        const storePayload = {};
        storePayload[productId] = true;
        firebaseApp.firebaseDB.ref(`/stores/${this.sid}/products/`).update(storePayload);
        router.go({ path: `/shop/${this.sid}` });
      } else {
        this.errorMessage = 'Please enter a name and a description!!!';
      }
    },
  },
  ready() {
    this.checkAuth();
  },
  route: {
    data(transition) {
      this.sid = transition.to.params.shopid;
    },
  },
};
</script>
