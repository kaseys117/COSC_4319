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

    <form method="post" use:enhance>
        <input name="email" value={form?.email ?? ""} />
        <input type="password" name="password" />
        <button>Sign up</button>
    </form>
</div>

<style>
</style>
