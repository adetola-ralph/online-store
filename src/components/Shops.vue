<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="row text-center">
        <div class="col-md-3 col-sm-6 hero-feature" v-for="shop in shops">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">{{shop.shop_name}}</h3>
            </div>
            <div class="panel-body">
              {{shop.shop_name}}
              <p>
                  <a v-link="'/shop'" class="btn btn-success">Visit the shop</a>
              </p>
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
      shops: [],
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
  },
  ready() {
    console.log(this.checkAuth());
    if (this.checkAuth() === false) {
      firebaseApp.firebaseDB.ref('/stores').on('child_added', (data) => {
        console.log(data.val());
        const uid = data.val().created_by;

        const storeId = data.key;
        const storeName = data.val().store_name;
        const storeDescription = data.val().store_description;

        const shopValue = {
          shop_id: storeId,
          shop_name: storeName,
          shop_description: storeDescription,
        };

        firebaseApp.firebaseDB.ref(`/users/${uid}`).once('value').then((snapshot) => {
          const userName = snapshot.val().name;
          shopValue.createdBy = userName;
          this.shops.push(shopValue);
        });
      });
      firebaseApp.firebaseDB.ref('/stores').on('child_changed', (data) => {
        console.log(data.val());
      });
    } else {
      // get the shops that belongs to the user
      console.log('logged in');
    }
  },
};
</script>
