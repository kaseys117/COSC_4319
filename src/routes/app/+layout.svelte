<div class="container">
    <slot />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100svh;
        padding: 2em;
        gap: 1em;
    }
</style>
