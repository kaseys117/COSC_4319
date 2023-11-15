<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let mood_data = data.data; // receives repackaged data {today: ..., history: ...}

    let today_data = mood_data.today;
    let history_data = mood_data.history;
</script>

<Today page="mood" data={today_data} />
<HistoryList col_name="Mood" data={history_data} />
