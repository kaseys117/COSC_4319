<script>
    import DateToday from "$lib/components/date.svelte";
    import { enhance } from "$app/forms";

    export let data;
    const uid = data.session.user.id;
</script>

<h1>What did you feel?</h1>
<DateToday />

<form method="POST" use:enhance>
    <input type="hidden" name="uid" value={uid} required />
    
    <label>
        Where was it located?
        <input class='border' type="text" name="location" />
    </label>
    <label>
        How did it feel?
        <input class='border' type="text" name="feel" />
    </label>
    <label>
        How long did it last?
        <input class='border' type="text" name="duration" />
    </label>
    <label>
        What made it worse?
        <input class='border' type="text" name="aggravate" />
    </label>
    <label>
        What made it better?
        <input class='border' type="text" name="relieve" />
    </label>
    <textarea class="border" name="notes" rows="5" placeholder="Notes" />
    <a href="/app/symptoms" class="btn-secondary last-row">Cancel</a>
    <button type="submit" class="btn-secondary last-row submit">Submit</button>
</form>

<style>
    /* TODO fix styling (refer to Figma doc) */
    h1 {
        font-weight: 400;
        font-size: 1.5em;
        margin-top: 1em;
    }
    label {
        font-size: 1.2em;
    }
    form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }
    form > label,
    textarea {
        grid-column: span 3;
    }
    textarea {
        padding: 1em;
    }
    a {
        text-decoration: none;
    }
    .last-row {
        grid-column: 1;
        grid-row-end: 0;
    }
    .submit {
        grid-column: 3;
        justify-self: end;
    }
    input{
        width: 100%;
        height: 2em;
    }
</style>
