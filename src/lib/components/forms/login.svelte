<script>
    import { enhance } from "$app/forms";
</script>

<h1>Log In</h1>
<!-- TODO: Make form into reusable component -->
<form method="POST" use:enhance>
    <input
        class="input-field"
        name="email"
        type="email"
        placeholder="email"
        pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9.\-]+$"
        title="must be a valid email address"
        autocomplete="email"
        required
    />
    <input
        class="input-field"
        name="password"
        type="password"
        placeholder="password"
        autocomplete="current-password"
        required
    />
    <button type="submit" class="btn-primary">Log In</button>
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
