<script>
    import { enhance } from "$app/forms";
    let password = "";
    let hasCapital;
    let hasLower;
    let hasSpecial;
    let hasNum;
    let minLength;
    let notValidPassword = true;
    let showRequirements = false;

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
        class="input-field"
        type="email"
        placeholder="email"
        autocomplete="email"
        pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9.\-]+$"
        title="must be a valid email address"
        required
    />
    <input
        name="password"
        class="input-field"
        type="password"
        placeholder="password"
        autocomplete="new-password"
        bind:value={password}
        on:input={validatePassword}
        on:focusin={() => {
            showRequirements = true;
        }}
        on:focusout={() => {
            showRequirements = false;
        }}
        required
    />
    {#if showRequirements}
        <ul>
            <!-- Change the class (which changes the ❌ to a ✅) if the password satisfies the requirement -->
            <li class:ok={minLength}>At least 8 characters</li>
            <li class:ok={hasCapital}>At least 1 capital letter</li>
            <li class:ok={hasLower}>At least 1 lowercase letter</li>
            <li class:ok={hasNum}>At least 1 number</li>
            <li class:ok={hasSpecial}>At least 1 special character</li>
        </ul>
    {/if}
    <input
        name="nickname"
        class="input-field"
        type="text"
        placeholder="first name"
        required
    />
    <select name="sex" class="input-field">
        <option value="">sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <label for="dob" class="dob-label">Date of birth</label>
    <input
        name="dob"
        class="input-field dob"
        type="date"
        id="dob"
        min="1923-01-01"
        max="2023-12-31"
    />
    <input
        name="height-ft"
        type="number"
        inputmode="numeric"
        pattern="[0-9]+"
        class="input-field height-ft"
        min="3"
        max="8"
        placeholder="height (ft)"
        required
    />
    <input
        name="height-in"
        type="number"
        inputmode="numeric"
        pattern="[0-9]+"
        class="input-field height-in"
        min="0"
        max="11"
        placeholder="height (in)"
        required
    />
    <input
        name="weight"
        type="number"
        pattern="[0-9]+[.]?[0-9]?"
        inputmode="numeric"
        class="input-field weight"
        min="40"
        max="600"
        placeholder="weight (lbs)"
        required
    />
    <!-- Using enumerated type "activity level" on the database -->
    <select name="activity-level" class="input-field activity">
        <option value="">Activity Level</option>
        <option value="sedentary">Sedentary</option>
        <option value="light">Light (1-2 days/week)</option>
        <option value="moderate">Moderate (3-5 days/week)</option>
        <option value="high">High (6-7 days/week)</option>
        <option value="intense"
            >Intense (strenuous exercise/sports & physical job or training twice
            a day)</option
        >
    </select>
    <button type="submit" class="btn-primary" class:disabled={notValidPassword}>
        Register
    </button>
</form>

<style>
    h1 {
        font-size: 3em;
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
        grid-template-rows: auto auto 1fr;
        gap: 0.5em;
    }
    .dob {
        grid-column: 1;
        grid-row: 5;
        justify-self: end;
    }
    .dob-label {
        grid-row: 5;
        grid-column: 1;
        align-self: center;
        width: max-content;
    }
    .disabled {
        background-color: #cccccc;
        color: #666666;
        font-weight: 500;
    }
    .activity {
        width: 100%;
    }
</style>
