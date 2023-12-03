<script>
    import IconSettings from "~icons/mdi/cog";
    export let data;
    const { nickname } = data.session.user.user_metadata; // Replace with actual user name
</script>

<a href="/app/settings" class="icon"><IconSettings /></a>
<h1>Welcome, {nickname}</h1>
<div class="menu">
    <p>Log your</p>
    <a href="/app/sleep" class="btn btn-secondary">Sleep</a>
    <a href="/app/diet" class="btn btn-secondary">Diet</a>
    <a href="/app/mood" class="btn btn-secondary">Mood</a>
    <a href="/app/symptoms" class="btn btn-secondary">Symptoms</a>
</div>
<div id="graph">
    <!--TODO Implement graph component-->
    <img
        src="https://quickchart.io/chart?bkg=white&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27Q1%27%2C%20%27Q2%27%2C%20%27Q3%27%2C%20%27Q4%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20label%3A%20%27%20%27%2C%0A%20%20%20%20%20%20data%3A%20%5B50%2C%2060%2C%2070%2C%20180%5D%0A%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20label%3A%20%27%20%27%2C%0A%20%20%20%20%20%20data%3A%20%5B100%2C%20200%2C%20300%2C%20400%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D"
        alt="a graph"
    />
</div>

<style>
    h1 {
        margin-top: 0;
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
        width: 100%;
    }
    .menu > p,
    a {
        width: 100%;
        text-align: center;
        text-decoration: none;
    }

    .icon {
        font-size: 2em;
        line-height: 0;
        width: fit-content;
        align-self: flex-end;
        color: inherit;
        text-decoration: none;
    }
</style>
