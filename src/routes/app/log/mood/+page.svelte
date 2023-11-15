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
        <input type="radio" name="mood" value="Happy" required />
        <div class="icon">
            <Happy />
        </div>
        Happy
    </label>
    <label>
        <input type="radio" name="mood" value="Neutral" required />
        <div class="icon">
            <Neutral />
        </div>
        Neutral
    </label>
    <label>
        <input type="radio" name="mood" value="Sad" required />
        <div class="icon">
            <Sad />
        </div>
        Sad
    </label>
    <label>
        <input type="radio" name="mood" value="Angry" required />
        <div class="icon">
            <Angry />
        </div>
        Angry
    </label>
    <label>
        <input type="radio" name="mood" value="Tired" required />
        <div class="icon">
            <Tired />
        </div>
        Tired
    </label>
    <label>
        <input type="radio" name="mood" value="Sick" required />
        <div class="icon">
            <Sick />
        </div>
        Sick
    </label>
    <label>
        <input type="radio" name="mood" value="Stressed" required />
        <div class="icon">
            <Stressed />
        </div>
        Stressed
    </label>
    <label>
        <input type="radio" name="mood" value="Confused" required />
        <div class="icon">
            <Confused />
        </div>
        Confused
    </label>
    <textarea class="border" name="notes" rows="4" placeholder="Notes" />
    <a href="/app/mood" class="btn-secondary">Cancel</a>
    <button type="submit" class="btn-secondary">Submit</button>
</form>

<style>
    /* TODO Fix styling (refer to the Figma design) */
    /* used to change the size of the icons/emoticons */
    h1 {
        font-weight: 400;
        font-size: 1.5em;
        margin-top: 1em;
    }
    .icon {
        font-size: 3.5em;
        /* justify-self: center; */
        /* align-self: center; */
        line-height: 0;

    }
    form {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    

    label {
        display: flex;
        flex-direction: column;
    }
    input[type="radio"]:checked + .icon {
        color: var(--color-success-500); /* Change the outline color as desired */
    }
   

    textarea {
        padding: 1em;
        grid-column: 1 / -1;
        margin: 1.5em 0;
        justify-self: stretch;
    }
    a {
        text-decoration: none;
    }
    /* hide style */
    input{
        display: none;
    }
    label {
        text-align: center;
        margin-bottom: 0.5em;
    }
</style>

