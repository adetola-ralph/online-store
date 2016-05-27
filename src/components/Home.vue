<template>
<header id="home-jumbotron" class="jumbotron hero-spacer">
    <h2>Start your shop online Today!</h2>
    <p>Ever though starting your own shop online was hard </p>
    <p>It's completely free </p>
    <p><a v-link="'/register'" class="btn btn-primary btn-xlg">Get Started </a>
    </p>
</header>

<hr>

<!-- Title -->
<div class="row">
    <div class="col-lg-12">
        <h3 class="text-center">Getting started is easy</h3>
    </div>
</div>
<!-- /.row -->
<hr>
<!-- Page Features -->
<div class="row text-center">

    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <i class="fa-5x material-icons">account_circle</i>
            <div class="caption">
                <h3>Register!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <a v-link="'/register'" class="btn btn-primary">Get started!</a>
                </p>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <i class="fa-5x material-icons">store</i>
            <div class="caption">
                <h3>Start your shop</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <a v-link="'/register'" class="btn btn-primary">Get started!</a>
                </p>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <i class="fa-5x material-icons">system_update_alt</i>
            <div class="caption">
                <h3>Add products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <a v-link="'/register'" class="btn btn-primary">Get started!</a>
                </p>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <i class="material-icons fa-5x">done</i>
            <div class="caption">
                <h3>You're Ready</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <a v-link="'/register'" class="btn btn-primary">Get started!</a>
                </p>
            </div>
        </div>
    </div>

</div>
<!-- /.row -->
</template>
