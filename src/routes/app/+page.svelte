<script>
    import IconSettings from "~icons/mdi/cog";
    export let data;
    const { nickname } = data.session.user.user_metadata; // Replace with actual user name
</script>

<a href="/app/settings" class="icon"><IconSettings /></a>
<h1>Welcome, {nickname}</h1>
<div class="menu">
    <p>Log your</p>
    <a href="/app/sleep" class="btn-secondary">Sleep</a>
    <a href="/app/diet" class="btn-secondary">Diet</a>
    <a href="/app/mood" class="btn-secondary">Mood</a>
    <a href="/app/symptoms" class="btn-secondary">Symptoms</a>
</div>
<div id="graph">
    <!--TODO Implement graph component-->
    <img
        src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-ppt-data-line-chart-illustration-image_2296398.jpg"
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
