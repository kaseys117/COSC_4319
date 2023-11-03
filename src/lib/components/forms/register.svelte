<script>
    import { enhance } from "$app/forms";
    export let form;
    let password = "";
    let hasCapital;
    let hasLower;
    let hasSpecial;
    let hasNum;
    let minLength;
    let notValidPassword = true;

    function validatePassword() {
        // Checks if the password has at least 1 capital letter, 1 lowercase letter, 1 special character, 1 number, and is at least 8 characters long
        const capitalRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;

        hasCapital = capitalRegex.test(password);
        hasLower = lowercaseRegex.test(password);
        hasSpecial = specialCharRegex.test(password);
        hasNum = numberRegex.test(password);
        minLength = password.length >= 8;

        notValidPassword = !(
            hasCapital &&
            hasLower &&
            hasSpecial &&
            hasNum &&
            minLength
        );
    }
</script>

<h1>Register</h1>
<form method="POST" use:enhance>
    <!-- TODO: Use zod and SuperForms for validation -->
    <input
        name="email"
        type="email"
        placeholder="email"
        value={form?.email ?? ""}
        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        title="must be a valid email address"
        required
    />
    <input
        name="password"
        type="password"
        placeholder="password"
        bind:value={password}
        on:input={validatePassword}
        required
    />

    <button on:click={validatePassword} disabled={notValidPassword}
        >Register</button
    >
</form>
<ul>
    <!-- Change the class (which changes the ❌ to a ✅) if the password satisfies the requirement -->
    <li class:ok={minLength}>At least 8 characters</li>
    <li class:ok={hasCapital}>At least 1 capital letter</li>
    <li class:ok={hasLower}>At least 1 lowercase letter</li>
    <li class:ok={hasNum}>At least 1 number</li>
    <li class:ok={hasSpecial}>At least 1 special character</li>
</ul>

<style>
    ul {
        font-size: 0.75em;
    }
    li {
        color: hsl(0, 90%, 50%);
        list-style-type: "❌ ";
    }
    .ok {
        color: hsl(120, 90%, 40%);
        list-style-type: "✅ ";
    }
    button {
        padding: 10px 20px;
        width: 100%;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1em;
    }
    form {
        display: grid;
        grid-template-rows: repeat(2, 2em) 1fr;
        gap: 0.25em;
    }
</style>
