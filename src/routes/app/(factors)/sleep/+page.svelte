<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let sleep_data = data.data; // receives repackaged data {today: ..., history: ...}

    let today_data = sleep_data.today;
    let history_data = sleep_data.history;
</script>

<Today data={today_data} />
<HistoryList col_name="Hours Slept" data={history_data} />
