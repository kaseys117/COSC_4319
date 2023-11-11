<script>
    export let data;
    console.log(data);
    const { nickname } = data.session.user.user_metadata; // Replace with actual user name
</script>

<h1>Welcome, {nickname}</h1>
<div class="menu">
    <p>Log your</p>
    <a href="/app/sleep"><button class="btn-secondary">Sleep</button></a>
    <a href="/app/diet"><button class="btn-secondary">Diet</button></a>
    <a href="/app/mood"><button class="btn-secondary">Mood</button></a>
    <a href="/app/symptoms"><button class="btn-secondary">Symptoms</button></a>
</div>
<div id="graph">
    <img
        src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-ppt-data-line-chart-illustration-image_2296398.jpg"
        alt="a graph"
    />
</div>

<style>
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
        width: 100%;
    }
    .menu > p,
    a,
    button {
        width: 100%;
    }
</style>
