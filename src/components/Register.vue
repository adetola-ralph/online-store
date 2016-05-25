<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <form>
        <div class="form-group">
          <label for="firstname">FirstName:</label>
          <input type="text" class="form-control" id="firstname" placeholder="First Name">
        </div>
        <div class="form-group">
          <label for="lastname">LastName:</label>
          <input type="text" class="form-control" id="lastname" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email_field" placeholder="Email Address">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password_field" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <input type="password" class="form-control" id="confirm_password_field" placeholder="Confirm Password">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</template>
