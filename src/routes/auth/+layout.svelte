<div class="container">
    <slot />
</div>

<style>
    .container {
        /* display: flex;
        flex-direction: column;
        justify-content: center; */
        display: grid;
        grid-template-columns: 1fr;
        padding: 2em;
        height: 100vh;
        gap: 2em;
    }
</style>
