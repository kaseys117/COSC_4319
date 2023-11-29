<script>
    import IconAdd from "~icons/mdi/plus-circle-outline";
    import { page } from "$app/stores";
    import { duration } from "$lib/utils.js";
    export let data;

    let value = "-";
    let page_name = $page.url.pathname.split("/").pop();

    if (data) {
        switch (page_name) {
            case "sleep":
                let { start, end } = data;
                value = duration(start, end);
                break;
            case "mood":
                value = data.mood;
                break;
            case "symptoms":
                value = data.symptom_data.location;
                break;
            case "diet":
                value = data.food.calories;
                break;
            default:
                console.log(data);
                break;
        }
    }
</script>

<div class="box">
    <span>{value}</span>
</div>
<a class="icon-add" href="/app/log/{page_name}">
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
