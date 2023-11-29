<script>
    import DateToday from "$lib/components/date.svelte";
    import { enhance } from "$app/forms";

    export let data;
    const uid = data.session.user.id;
</script>

<h1>What did you feel?</h1>
<!-- TODO: make date editable -->
<DateToday />

<form method="POST" use:enhance>
    <input type="hidden" name="uid" value={uid} required />

    <label>
        Where was it located?
        <input
            class="input-field"
            type="text"
            name="location"
            list="pain-location"
        />
        <datalist id="pain-location">
            <option value="Head" />
            <option value="Neck" />
            <option value="Shoulder" />
            <option value="Back" />
            <option value="Arm" />
            <option value="Elbow" />
            <option value="Wrist" />
            <option value="Hand" />
            <option value="Finger" />
            <option value="Hip" />
            <option value="Knee" />
            <option value="Shin" />
            <option value="Ankle" />
            <option value="Foot" />
            <option value="Heel" />
            <option value="Toe" />
        </datalist>
    </label>
    <label>
        How did it feel?
        <input class="input-field" type="text" name="feel" list="pain-feel" />
        <datalist id="pain-feel">
            <option value="Burning"
                >A sensation of heat or scalding, often accompanied by
                discomfort.</option
            >
            <option value="Sharp"
                >Sudden and intense, causing a piercing or stabbing feeling.</option
            >
            <option value="Aching"
                >Persistent discomfort that is typically dull and continuous.</option
            >
            <option value="Dull"
                >A muted, lingering pain that lacks sharpness or intensity.</option
            >
            <option value="Stabbing"
                >A sharp, stabbing sensation that may be brief but intense.</option
            >
            <option value="Radiating"
                >Pain that spreads or extends from a specific point to
                surrounding areas.</option
            >
            <option value="Throbbing"
                >Pulsating or rhythmic pain, often with a sense of expansion and
                contraction.</option
            >
            <option value="Cramping"
                >Constrictive and spasmodic pain, similar to muscle cramps.</option
            >
            <option value="Shooting"
                >Quick, sharp bursts of pain that may travel along a specific
                path.</option
            >
        </datalist>
    </label>
    <label>
        How long did it last?
        <input class="input-field" type="text" name="duration" />
    </label>
    <label>
        What made it worse?
        <input class="input-field" type="text" name="aggravate" />
    </label>
    <label>
        What made it better?
        <input class="input-field" type="text" name="relieve" />
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
    input {
        width: 100%;
        height: 2em;
    }
</style>
