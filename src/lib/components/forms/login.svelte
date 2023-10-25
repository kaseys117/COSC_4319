<script>
    import { enhance } from "$app/forms";
    export let form;
</script>

<h1>Log In</h1>
<form method="POST" use:enhance>
    <!-- `form?.email ?? ""` store the email into the form.email attribute, and stores an empty string if no value.  -->
    <input
        name="email"
        type="email"
        placeholder="email"
        value={form?.email ?? ""}
        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        title="must be a valid email address"
        required
    />
    <input name="password" type="password" placeholder="password" required />
    <button>Log In</button>
</form>

<style>
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
