<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let sleep_data = data.data;
</script>

<Today page="sleep" />
<HistoryList col_name="Hours Slept" data={sleep_data} />
