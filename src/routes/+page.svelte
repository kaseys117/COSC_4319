<!-- Landing page for WellMo -->
<div class="container">
    <div class="header">WellMo</div>
    <a href="/auth/login">
        <button class="button">Log In</button>
    </a>
    <a href="/auth/register">
        <button class="button">Register</button>
    </a>
</div>

<style>
    /* TODO: Change to css grid */
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

    .button {
        padding: 10px 20px;
        font-size: 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: auto;
    }
</style>
