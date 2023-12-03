<script>
    import HistoryList from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let diet_data = data.data; // receives repackaged data {today: ..., history: ...}

    let today_data = diet_data.today;
    let history_data = diet_data.history;
</script>

<Today data={today_data} />
<HistoryList col_name="Calories" data={history_data} />
