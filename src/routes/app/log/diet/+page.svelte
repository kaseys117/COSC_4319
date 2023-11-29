<script>
    import { enhance } from "$app/forms";
    import Add from "~icons/mdi/plus-circle-outline";
    export let data;

    let today = new Date().toJSON().slice(0, 10);
</script>

<!-- Use this API https://fdc.nal.usda.gov/api-guide.html#bkmk-6 -->

<h1>Diet</h1>
<label class="date-label">
    <input
        type="date"
        name="date"
        value={today}
        max={today}
        class="border"
        form="food-form"
        required
    />
</label>
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
                            <label class="submit-label">
                                <input
                                    name="food"
                                    type="submit"
                                    value={JSON.stringify(food)}
                                    form="food-form"
                                />
                                <div class="icon">
                                    <Add />
                                </div>
                            </label>
                        </td>
                    </tr>
                {/each}
                <form method="post" action="?/log" id="food-form" use:enhance>
                    <input
                        type="hidden"
                        name="uid"
                        value={data.session.user.id}
                        required
                    />
                </form>
            {/await}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">
                    <form
                        method="post"
                        action="?/search"
                        id="search-form"
                        use:enhance
                    >
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
    tfoot tr {
        border-bottom: none;
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
    input[type="submit"],
    #food-form {
        display: none;
    }
    .date-label > input {
        padding: 0.5em;
    }
</style>
