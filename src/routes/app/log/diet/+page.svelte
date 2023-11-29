<script>
    import { enhance } from "$app/forms";
    export let data;
</script>

<p>log diet</p>
<!-- Use this API https://fdc.nal.usda.gov/api-guide.html#bkmk-6 -->

<!-- <div class="table-scroll">
    <table>
        <thead>
            <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Protein</th>
            </tr>
        </thead>
        <tbody>
            {#each data as item}
                <tr>
                    <td>{item.name}</td>
                    <td>{item.calories}</td>
                    <td>{item.carbs}</td>
                    <td>{item.fat}</td>
                    <td>{item.protein}</td>
                </tr>
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
                    <input
                        name="query"
                        type="text"
                        placeholder="food item (eg. pepperoni pizza)"
                        form="search-form"
                        required
                    />
                </td>
            </tr>
        </tfoot>
    </table>
</div> -->

<form method="post" id="search-form" use:enhance>
    <input
        name="query"
        type="text"
        placeholder="food item (eg. pepperoni pizza)"
        required
    />
    <button type="submit" class="btn-primary">Search</button>
</form>

{#if data}
    <p>{JSON.stringify(data.foodSearchCriteria)}</p>
    <br />
    <p>{JSON.stringify(data.foods)}</p>
{/if}

<style>
    /* .table-scroll {
        overflow-y: auto;
        width: 100%;
        height: auto;
    }
    .table-scroll > table {
        width: 100%;
        border-collapse: collapse;
    }
    tfoot {
        position: sticky;
        bottom: 0;
        background-color: var(--color-surface-50);
        width: 100%;
    } */
    p {
        overflow-wrap: break-word;
        width: 100%;
    }
</style>
