<template>
  <div id="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>
                <a class="navbar-brand" v-link="'/home'">Oreofe.me</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li v-if="this.getAuthenticate===true">
                      <a>Welcome {{user_name}}</a>
                    </li>
                    <li>
                        <a v-link="'/shops'">Shops</a>
                    </li>
                    <li v-if="this.getAuthenticate===false">
                        <a v-link="'/login'">Login</a>
                    </li>
                    <li v-if="this.getAuthenticate===true">
                      <a class="btn btn-clear" v-on:click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                    </li>
                </ul>
                <form class="navbar-form navbar-right" v-if="this.getAuthenticate===false">
                  <div class="form-group">
                    <button v-link="'/register'" class="btn btn-success">Register</a>
                  </div>
                </form>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container">
        <!-- Jumbotron Header -->
        <router-view></router-view>

    </div>
    <!-- Footer -->
    <!--<hr>-->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import firebaseApp from './firebase';

export default{
  computed: {
    getAuthenticate() {
      const authCondition = localStorage.getItem('online_store_user_authenticated');

      if (authCondition !== null && authCondition) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      // authenticated: this.getAuthenticate,
      user_id: localStorage.getItem('online_store_uid'),
      user_name: localStorage.getItem('online_store_user_name'),
      user_email: localStorage.getItem('online_store_user_email'),
    };
  },
  methods: {
    logout() {
      firebaseApp.firebaseAuth.signOut().then(() => {
        alert('You have been Logged out');
        localStorage.removeItem('online_store_uid');
        localStorage.removeItem('online_store_user_authenticated');
        localStorage.removeItem('online_store_user_name');
        localStorage.removeItem('online_store_user_email');
        location.reload();
        console.log(firebaseApp.firebaseAuth.currentUser.uid);
      }, (error) => {
        console.log(error.message);
      });
    },
  },
  ready() {
  },
};
</script>
