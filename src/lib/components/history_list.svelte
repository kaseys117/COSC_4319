<script>
    import { duration, formatDate } from "$lib/utils.js";
    export let col_name = "Value";
    export let data = [];

    function process_row(row) {
        if (col_name == "Hours") {
            // Sleep Data
            return duration(row.start, row.end);
        } else if (col_name == "Mood") {
            // Mood Data
            return row.mood;
        }
    }
</script>

<div class="table-scroll">
    <table>
        <tr>
            <th class="date">Date</th>
            <th class="value">{col_name}</th>
        </tr>
        <tbody>
            {#if data.length === 0}
                <tr>
                    <td colspan="2" style="text-align: center">No data</td>
                </tr>
            {/if}
            {#each data as row}
                <tr>
                    <td class="date">{formatDate(row.date)}</td>
                    <td class="value">{process_row(row)}</td>
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
        border-bottom: 0.5em solid var(--color-surface-50);
        padding: 0.75em;
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
    .date {
        text-align: left;
    }
    .value {
        text-align: right;
    }
</style>
