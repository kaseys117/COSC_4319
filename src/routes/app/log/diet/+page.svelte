<script>
    import { enhance } from "$app/forms";
    import Add from "~icons/mdi/plus-circle-outline";
    export let data;

    let food_macros = data?.food_macros ?? [];
    console.log(data);
</script>

<h1>Diet</h1>
<!-- Use this API https://fdc.nal.usda.gov/api-guide.html#bkmk-6 -->

<div class="table-scroll">
    <table>
        <tbody>
            {#await data}
                <tr>
                    <td> Loading... </td>
                </tr>
            {:then data}
                {#each data.food_macros as food}
                    <tr>
                        <td>
                            <div>
                                <b>{food.food}</b>
                                <p>
                                    {food.calories}cal {food.carbs}C {food.fat}F {food.protein}P
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="icon">
                                <Add />
                            </div>
                        </td>
                    </tr>
                {/each}
            {/await}
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <form method="post" id="search-form" use:enhance>
                        <input
                            name="query"
                            type="text"
                            placeholder="food item (eg. pepperoni pizza)"
                            form="search-form"
                            required
                        />
                    </form>
                </td>
            </tr>
        </tfoot>
    </table>
</div>

<!-- {#if data}
    <p>{JSON.stringify(data.food_macros)}</p>
{/if} -->

<style>
    .table-scroll {
        overflow-y: auto;
        height: auto;
        width: 100%;
    }
    tfoot {
        position: sticky;
        bottom: 0;
        background-color: var(--color-surface-50);
        width: 100%;
    }
    p {
        overflow-wrap: break-word;
        width: 100%;
    }
    .icon {
        font-size: 2em;
        line-height: 0;
    }
    tr {
        border-bottom: 1px solid var(--color-surface-200);
    }
    td {
        padding: 1em 0;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    input {
        width: 100%;
    }
</style>
