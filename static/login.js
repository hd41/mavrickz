
function logIn(){
    document.getElementById("body").innerHTML = `  <div class="login">
        <form class="" action="/login" method="post">
          <label for="input-1">
            <span>Username or Phone No.</span><br>
            <input id="usr" type="text" name="usr" value="" placeholder="Enter username or phone" required>
          </label><br>
          <label for="input-2">
            <span>Password</span><br>
            <input id="pwd" type="password" name="pwd" value="" placeholder="Enter Password" required>
          </label><br>
          <input class="semi-transparent-button sub" type="submit" name="" value="Log In">
        </form>
        <center><a onclick="signUp()">Create an account</a></center>
      </div>`;
}

function signUp(){
    document.getElementById("body").innerHTML = ` <div class="signUpForm">
    <form class="" action="/login" method="post">
        <label for="input-1">
          <span>First Name</span><br>
          <input id="firstName" type="text" name="fname" value="" placeholder="First Name" required>
        </label><br>
        <label for="input-2">
          <span>Last Name</span><br>
          <input id="lastName" type="text" name="lname" value="" placeholder="Last Name" required>
        </label><br>
        <label for="input-3">
          <span>Email</span><br>
          <input id="email" type="email" name="mail" value="" placeholder="foo@bill.com" required>
        </label><br>
        <label for="input-7">
          <span>Phone</span><br>
          <input id="phone" type="tel" name="phone" value="" placeholder="9894513154" required>
        </label><br>
        <label for="input-4">
          <span>Password</span><br>
          <input id="pwd" type="password" name="pass" value="" placeholder="********" required>
        </label><br>
        <label for="input-5">
          <span>Retype Password</span><br>
          <input id="rpwd" type="password" name="rpass" value="" placeholder="********" required>
        </label><br>
        <label for="input-6">
          <span style="float:center;">Gender</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="male" type="radio" name="gender" value="Male" >Male
          <input id="female" type="radio" name="gender" value="Female" >Female
        </label><br>
        <input class="semi-transparent-button sub" type="submit" name="" value="Create Account">
        <center><a onclick="logIn()">Login</a> &ensp; <a onclick="vendorSignUp()">Sign Up as a Vendor</a></center>
      </form>
      </div>
    `;
}

function vendorSignUp(){
  document.getElementById("body").innerHTML = ` <div class="signUpForm">
  <form class="" action="/newVendor" method="post">
      <label for="input-1">
        <span>First Name</span><br>
        <input id="firstName" type="text" name="fname" value="" placeholder="First Name" required>
      </label><br>
      <label for="input-2">
        <span>Shop&apos; Name</span><br>
        <input id="shopName" type="text" name="shName" value="" placeholder="Shop's Name" required>
      </label><br>
      <label for="input-3">
        <span>Email</span><br>
        <input id="email" type="email" name="mail" value="" placeholder="foo@bill.com" required>
      </label><br>
      <label for="input-7">
        <span>Phone</span><br>
        <input id="phone" type="tel" name="phone" value="" placeholder="9894513154" required>
      </label><br>
      <label for="input-4">
        <span>Password</span><br>
        <input id="pwd" type="password" name="pass" value="" placeholder="********" required>
      </label><br>
      <label for="input-5">
        <span>Retype Password</span><br>
        <input id="rpwd" type="password" name="rpass" value="" placeholder="********" required>
      </label><br>
      
      <input class="semi-transparent-button sub" type="submit" name="" value="Create Account">
      <center><a onclick="logIn()">Login</a> &ensp; <a onclick="signUp()">Customer Sign Up</a></center>
    </form>
    </div>
  `;
}