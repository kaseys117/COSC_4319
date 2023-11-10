<script>
    export let col_name = "Value";
</script>

<div class="table-scroll">
    <table>
        <tr>
            <th class="date">Date</th>
            <th class="hours">{col_name}</th>
        </tr>
        <tbody>
            {#each Array(20) as _, i}
                <tr>
                    <td class="date"
                        >{new Date(
                            Date.now() + i * 24 * 60 * 60 * 1000
                        ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        })}</td
                    >
                    <td class="hours">{(Math.random() * 10).toFixed(2)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .table-scroll {
        overflow-y: auto;
        width: 100%;
        height: auto;
    }
    .table-scroll > table {
        width: 100%;
        border-collapse: collapse;
    }
    td {
        border-bottom: 0.25em solid var(--color-surface-50);
        padding: 0.5em;
    }

    .hours {
        text-align: right;
    }
    tbody > tr {
        background-color: var(--color-surface-100);
    }
    th {
        position: sticky;
        top: 0;
        background-color: var(--color-surface-50);
        padding: 0.5em;
    }
    th.date {
        text-align: left;
    }
    th.hours {
        text-align: right;
    }
</style>
