<script>
    import { enhance } from "$app/forms";
    export let data;

    const uid = data.session.user.id;
    let today = new Date().toJSON().slice(0, 10);
</script>

<h1>How long did you sleep?</h1>

<form method="POST" use:enhance>
    <input type="hidden" name="uid" value={uid} required />
    <label class="date-label">
        Date:
        <input
            type="date"
            value={today}
            max={today}
            name="date"
            class="border"
            required
        />
    </label>
    <label>
        Bedtime:
        <input class="border" type="time" name="bedtime" required />
    </label>
    <label>
        Wakeup:
        <input class="border" type="time" name="wakeup" required />
    </label>
    <a href="/app/sleep" class="btn btn-secondary">Cancel</a>
    <button type="submit" class="btn-secondary">Submit</button>
</form>

<style>
    h1 {
        font-weight: 400;
        text-align: center;
        font-size: 1.5em;
        margin: 2em 0;
    }
    label {
        grid-column: span 2;

        font-size: 1.5em;
        align-self: stretch;
    }
    .border {
        padding: 0.5em;
    }
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        gap: 1em;
        margin: 1.5em 0;
        width: 100%;
    }
    a.btn {
        text-decoration: none;
        justify-self: center;
    }
    a.btn,
    button {
        height: inherit;
    }
</style>
