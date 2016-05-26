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
        // get all the stores available
      } else {
        // get uid and get stores for the user
      }
    },
    getShops() {

    },
  },
};
</script>
