<template>
  <div class="row">
    <button  type="button" class="btn btn-danger btn-circle btn-lg" id="addStore" v-link="'/createshop'">
      <i class="fa fa-pencil-square-o"></i>
    </button>
    <h2 >
      <p class="text-centre" v-if="noAvailableStores">You do not have any stores please create one</p>
    </h2>
    <div class="col-sm-12">
      <div class="row text-center">
        <div class="col-md-3 col-sm-6 hero-feature" v-for="shop in shops">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">{{shop.shop_name}}</h3>
            </div>
            <div class="panel-body">
              {{shop.shop_description}}
              <p>
                  <a v-link="`/shop/${shop.shop_id}`" class="btn btn-success">Visit the shop</a>
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
      shopId: [],
      noAvailableStores: false,
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
      console.log('logged in');
      const userid = localStorage.getItem('online_store_uid');
      console.log(userid);
      firebaseApp.firebaseDB.ref(`/users/${userid}`)
      .once('value')
      .then((snapshot) => {
        console.log(snapshot.val().stores);
        if (snapshot.val().stores !== null && typeof snapshot.val().stores !== 'undefined') {
          for (const key in snapshot.val().stores) {
            if (snapshot.val().stores.hasOwnProperty(key)) {
              this.shopId.push(key);
            }
          }
        } else if (snapshot.val().stores === null || typeof snapshot.val().stores === 'undefined') {
          this.noAvailableStores = true;
        }

        this.shopId.forEach((element) => {
          firebaseApp.firebaseDB
          .ref(`/stores/${element}`)
          .once('value').then((snapshot2) => {
            const stores = snapshot2.val();
            const shopValue = {
              shop_id: element,
              shop_name: stores.store_name,
              shop_description: stores.store_description,
            };
            this.shops.push(shopValue);
          });
        });
      });
    }
  },
};
</script>
