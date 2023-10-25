<!-- Simple Sveltekit log in card with email and password field -->
<script>
    let email = '';
    let password = '';
    let errorMessage = '';
  
    function handleLogin() {
      if (!emailIsValid(email)) {
        errorMessage = 'Please enter a valid email address.';
        return;
      }
  
      if (password !== 'your_password_here') {
        errorMessage = 'Incorrect password. Please try again.';
        return;
      }
  
      // Your login logic can go here
      alert(`Logging in with email: ${email}`);
    }
  
    function emailIsValid(email) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    }
  </script>
  
  <div class="container">
    <div class="header">Login</div>
    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}
    <form on:submit|preventDefault={handleLogin}>
      <div class="input-group">
        <label for="email">Email:</label>
        <input class="input" type="text" id="email" bind:value={email} placeholder="Enter your email" />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input class="input" type="password" id="password" bind:value={password} placeholder="Enter your password" />
      </div>
      <button class="button" type="submit">Log In</button>
      <p class="forgot-password-link"><a href="#">Forgot Password?</a></p>
    </form>
  </div>
  
  <style>
    .container {
      background-color: #fff;
      padding: 50px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      text-align: left;
      width: 300px;
      margin: 0 auto;
    }
  
    .header {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 0.3em;
      text-align: center;
    }
  
    .input-group {
      margin-bottom: 1em;
    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    .input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1em;
    }
  
    .button {
      padding: 10px 20px;
      font-size: 1em;
      background-color: #CCCCCC;
      color: #000000;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .forgot-password-link {
      margin-top: -50px;
      text-align: right;
    }
  
    .forgot-password-link a {
      text-decoration: none;
      color: #007bff;
      font-size: 0.8em;
    }
  
    .error-message {
      color: red;
      font-size: 0.8em;
    }
  </style>
  