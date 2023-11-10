<script>
    import IconBack from "~icons/mdi/arrow-left-circle-outline";
    import { page } from "$app/stores";
    let feature = $page.url.pathname.split("/").pop();
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
</script>

<a class="icon-back" href="/app">
    <IconBack style="font-size: 2em" />
</a>
<span>Log your {feature}</span>
<strong>
    {today}
</strong>

<slot />

<style>
    .icon-back {
        color: inherit;
        align-self: flex-start;
    }
</style>
