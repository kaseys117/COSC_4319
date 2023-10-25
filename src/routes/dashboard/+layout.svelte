<div class="container">
    <slot />
</div>
<footer>
    <a href="/dashboard/diet"><button>Diet</button></a>
    <a href="/dashboard/mood"><button>Mood</button></a>
    <a href="/dashboard/sleep"><button>Sleep</button></a>
</footer>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
    footer {
        display: flex;
        align-content: center;
        position: sticky;
        height: 10vh;
        top: 100vh;
    }

    button {
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 20px;
        width: 100%;
        font-size: 1.5em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        height: 100%;
    }
    a {
        width: 100%;
    }
</style>
