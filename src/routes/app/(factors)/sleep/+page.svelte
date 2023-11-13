<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let sleep_data = data.data;
</script>

<!-- TODO Pass the sleep data for today into `value` -->
<Today page="sleep" value="-" />
<HistoryList col_name="Hours Slept" data={sleep_data} />
