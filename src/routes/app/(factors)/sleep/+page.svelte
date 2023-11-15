<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    import { get_today_data } from "$lib/utils.js";
    export let data;
    let sleep_data = data.data;

    let today_data = sleep_data.today;
    let history_data = sleep_data.history;
</script>

<!-- TODO Pass the sleep data for today into `value` -->
<Today page="sleep" data={today_data} />
<HistoryList col_name="Hours Slept" data={history_data} />
