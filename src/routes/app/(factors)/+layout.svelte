<script>
    import IconBack from "~icons/mdi/arrow-left-circle-outline";
    import { page } from "$app/stores";
    import TodayDate from "$lib/components/date.svelte";
    let feature = $page.url.pathname.split("/").pop();
</script>

<a class="icon-back" href="/app">
    <IconBack style="font-size: 2em" />
</a>
<span>Log your {feature}</span>
<TodayDate />

<slot />

<style>
    .icon-back {
        color: inherit;
        align-self: flex-start;
    }
    span {
        font-size: 1.25em;
    }
</style>
