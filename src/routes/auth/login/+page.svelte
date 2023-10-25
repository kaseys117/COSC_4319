<script>
    import { enhance } from "$app/forms";
    export let form;
</script>

<div class="container">
    <svg
        class="logo"
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17 86L85.9393 16.9393M17.9393 15.3955L88.6609 86M102 52C102 79.6142 79.6142 102 52 102C24.3858 102 2 79.6142 2 52C2 24.3858 24.3858 2 52 2C79.6142 2 102 24.3858 102 52Z"
            stroke="black"
            stroke-width="5"
        />
    </svg>
    <div class="header">WellMo</div>

    <form method="post" use:enhance>
        <!-- `form?.email ?? ""` store the email into the form.email attribute, and stores an empty string if no value.  -->
        <input
            name="email"
            type="email"
            placeholder="email"
            value={form?.email ?? ""}
        />
        <input name="password" type="password" placeholder="password" />
        <button>Log In</button>
    </form>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items: center;
        height: 100vh;
        gap: 1em;
    }

    .header {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 1em;
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
