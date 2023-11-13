<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let mood_data = data.data;
</script>

<Today page="mood" />
<HistoryList col_name="Mood" data={mood_data} />
