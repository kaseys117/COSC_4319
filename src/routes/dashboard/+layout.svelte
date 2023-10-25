<slot />
<footer>
    <a href="/dashboard/diet"><button>Diet</button></a>
    <a href="/dashboard/mood"><button>Mood</button></a>
    <a href="/dashboard/sleep"><button>Sleep</button></a>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        position: sticky;
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
    }
</style>
