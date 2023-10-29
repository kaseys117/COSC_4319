<script>
    import { enhance } from "$app/forms";
    export let form;
</script>

<h1>Log In</h1>
<form method="POST" use:enhance>
    <!-- `form?.email ?? ""` store the email into the form.email attribute, and stores an empty string if no value.  -->
    <input
        class="input-field"
        name="email"
        type="email"
        placeholder="email"
        value={form?.email ?? ""}
        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        title="must be a valid email address"
        required
    />
    <input
        class="input-field"
        name="password"
        type="password"
        placeholder="password"
        required
    />
    <button class="btn-primary">Log In</button>
</form>

<style>
    h1 {
        font-size: 3em;
    }
    button {
        margin-top: 1em;
        width: 100%;
        height: 4em;
    }
    form {
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 0.5em;
        height: fit-content;
        /* justify-items: stretch; */
    }
</style>
