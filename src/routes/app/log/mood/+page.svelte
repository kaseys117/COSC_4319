<script>
    import Happy from "~icons/mdi/emoticon-excited-outline";
    import Neutral from "~icons/mdi/emoticon-neutral-outline";
    import Sad from "~icons/mdi/emoticon-cry-outline";
    import Angry from "~icons/mdi/emoticon-angry-outline";
    import Tired from "~icons/mdi/sleep";
    import Sick from "~icons/mdi/emoticon-sick-outline";
    import Stressed from "~icons/mdi/emoticon-dead-outline";
    import Confused from "~icons/mdi/emoticon-confused-outline";
    import Today from "$lib/components/date.svelte";
    import { enhance } from "$app/forms";

    export let data;
    const uid = data.session.user.id;
</script>

<h1>How are you feeling?</h1>

<Today {data} />

<form method="POST" use:enhance>
    <input type="hidden" name="uid" value={uid} required />
    <label>
        <i><Happy /></i>
        Happy
        <input type="radio" name="mood" value="Happy" required />
    </label>
    <label>
        <i><Neutral /></i>
        Neutral
        <input type="radio" name="mood" value="Neutral" required />
    </label>
    <label>
        <i><Sad /></i>
        Sad
        <input type="radio" name="mood" value="Sad" required />
    </label>
    <label>
        <i><Angry /></i>
        Angry
        <input type="radio" name="mood" value="Angry" required />
    </label>
    <label>
        <i><Tired /></i>
        Tired
        <input type="radio" name="mood" value="Tired" required />
    </label>
    <label>
        <i><Sick /></i>
        Sick
        <input type="radio" name="mood" value="Sick" required />
    </label>
    <label>
        <i><Stressed /></i>
        Stressed
        <input type="radio" name="mood" value="Stressed" required />
    </label>
    <label>
        <i><Confused /></i>
        Confused
        <input type="radio" name="mood" value="Confused" required />
    </label>
    <textarea class="border" name="notes" rows="5" placeholder="Notes" />
    <a href="/app/mood" class="btn-secondary">Cancel</a>
    <button type="submit" class="btn-secondary">Submit</button>
</form>

<style>
    /* TODO Fix styling (refer to the Figma design) */
    /* used to change the size of the icons/emoticons */
    i {
        font-size: 3.5em;
    }
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    textarea {
        padding: 1em;
        grid-column: 1 / -1;
    }
    a {
        text-decoration: none;
    }
</style>
