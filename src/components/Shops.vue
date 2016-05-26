<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="row text-center">
        <div class="col-md-3 col-sm-6 hero-feature">
            <div class="thumbnail">
                <img src="http://placehold.it/800x500" alt="">
                <div class="caption">
                    <h3>Register!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '../firebase';

export default{
  data() {
    return {
      shops: {},
    };
  },
  methods: {
    checkAuth() {
      const authCondition = localStorage.getItem('online_store_user_authenticated');

      if (authCondition !== null && authCondition) {
        return true;
      }
      return false;
    },
    getShops() {

    },
  },
  ready() {
    const firebaseDB = firebaseApp.firebaseDB;
    console.log(this.checkAuth());
    if (this.checkAuth() === false) {
      const storeRef = firebaseDB.ref('/stores');
      storeRef.on('child_added', (data) => {
        console.log(data.val());
        // this.stores.push(data);
      });
      storeRef.on('child_changed', (data) => {
        console.log(data.val());
      });
    } else {
      // get the shops that belongs to the user
    }
  },
};
</script>
