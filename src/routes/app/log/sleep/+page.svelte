<script>
    import TodayDate from "$lib/components/date.svelte";
    import { enhance } from "$app/forms";
    export let data;
    const uid = data.session.user.id;

    let today = new Date().toISOString().split("T")[0];
</script>

<h1>How long did you sleep?</h1>
<TodayDate />

<form method="POST" use:enhance>
    <input type="hidden" name="date" value={today} required />
    <input type="hidden" name="uid" value={uid} required />
    <label class="bedtime">
        Bedtime:
        <br />
        <input class="border" type="time" name="bedtime" required />
    </label>
    <br />
    <br />
    <label class="wakeup">
        Wakeup:
        <br />
        <input class="border" type="time" name="wakeup" required />
    </label>
    <br />
    <br />
    <br />
    <a href="/app/sleep" class="btn-secondary">Cancel</a>
    <input type="submit" class="btn-secondary submit" />
</form>

<style>
    h1 {
        font-weight: 400;
        text-align: center;
        font-size: 1.5em;
        margin: 2em 0;
    }
    label {
        font-size: 1.5em;
        align-self: stretch;
    }
    .border {
        padding: 0.5em;
    }
    form {
        margin: 1.5em 0;
        width: 100%;
    }
    a {
        text-decoration: none;
    }
    .submit {
        height: 52px;
    }
</style>
