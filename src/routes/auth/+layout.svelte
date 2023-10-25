<div class="container">
    <slot />
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
</style>
