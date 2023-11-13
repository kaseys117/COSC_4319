<script>
    import IconAdd from "~icons/mdi/plus-circle-outline";
    import { duration } from "$lib/utils.js";
    export let page;
    export let value = "-";

    if (value.hasOwnProperty("start") && value.hasOwnProperty("end")) {
        let { start, end } = value;
        value = duration(start, end);
    }
</script>

<div class="box">
    <span>{value}</span>
</div>
<a class="icon-add" href="/app/log/{page}">
    <IconAdd />
</a>

<style>
    .box {
        background-color: var(--color-surface-100);
        text-align: center;
        padding: 0.5em;
        width: 100%;
    }
    .icon-add {
        color: inherit;
        font-size: 2em;
    }
</style>
