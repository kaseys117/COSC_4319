<script>
    import Register from "$lib/components/forms/register.svelte";
    import IconBack from "~icons/mdi/chevron-left";
</script>

<a href="/" class="row-1 back-arrow">
    <IconBack class="border icon" />
</a>
<a href="/auth/login" class="row-1 register">Log In</a>

<Register />

<style>
    .row-1 {
        grid-row: 1;
        grid-column: 1;
    }

    a.back-arrow {
        font-size: 4em;
        color: inherit;
    }

    .register {
        padding: 1em 0;
        justify-self: end;
    }
</style>
