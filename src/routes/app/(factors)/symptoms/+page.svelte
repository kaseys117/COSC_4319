<script>
    import List from "$lib/components/history_list.svelte";
    import Today from "$lib/components/today_list.svelte";
    export let data;
    let symptoms_data = data?.data; // receives repackaged data {today: ..., history: ...}

    let today_data = symptoms_data?.today ?? {};
    let history_data = symptoms_data?.history ?? {};
</script>

<Today data={today_data} />
<List col_name="location" data={history_data} />
