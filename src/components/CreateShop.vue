<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <form>
        <div class="form-group">
          <label for="shopname">Shop Name</label>
          <input type="text" class="form-control" id="shopname" placeholder="Shop Name" v-model="shopName">
        </div>
        <div class="form-group">
          <label for="shopdescription">Shop Description</label>
          <textarea class="form-control" rows="3" id="shopname" v-model="shopDescription"></textarea>
        </div>
        <button type="submit" class="btn btn-success" v-on:click.stop.stop.prevent="createShop">Submit</button>
      </form>
      <p class="text-centre">{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import VueRouter from '../router/index';
import firebaseApp from '../firebase';

const router = VueRouter.router;
export default{
  data() {
    return {
      uid: localStorage.getItem('online_store_uid'),
      shopName: '',
      shopDescription: '',
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
    createShop() {
      if (this.shopName.length > 0 && this.shopDescription.length > 0) {
        // l
        const payload = {
          created_by: this.uid,
          store_name: this.shopName,
          store_description: this.shopDescription,
        };
        const storeId = firebaseApp.firebaseDB.ref().child('stores').push().key;
        console.log(storeId);
        console.log(payload);
        firebaseApp.firebaseDB.ref(`/stores/${storeId}`).set(payload);

        const userPayload = {};
        userPayload[storeId] = true;
        // console.log(userPayload);
        firebaseApp.firebaseDB.ref(`/users/${this.uid}/stores/`).update(userPayload);
        router.go({ path: '/shops' });
      } else {
        this.errorMessage = 'Please enter a name and a description!!!';
      }
    },
  },
  ready() {
    this.checkAuth();
  },
};
</script>
