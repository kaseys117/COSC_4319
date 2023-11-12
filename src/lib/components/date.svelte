<script>
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
</script>

<strong>
    {today}
</strong>

<style>
    strong {
        font-size: 1.25em;
    }
</style>
