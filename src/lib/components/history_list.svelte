<script>
    export let col_name = "Value";
    export let data;

    function duration(start, end) {
        /* TODO Given two strings, start and end, in 24-hour format "HH:MM",
        calculate and return the hours in between.

        test 1:
        start = "22:00"
        end = "07:00:
        return 9

        test 2:
        start = "20:00"
        end = " "5:30"
        return 9.5 */
    }
</script>

<div class="table-scroll">
    <table>
        <tr>
            <th class="date">Date</th>
            <th class="hours">{col_name}</th>
        </tr>
        <tbody>
            {#each data as row}
                <tr>
                    <td class="date">{row.date}</td>
                    <td class="hours">{duration(row.start, row.end)}</td>
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
