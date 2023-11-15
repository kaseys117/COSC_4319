<script>
    import IconBack from "~icons/mdi/chevron-left";
    import { goto } from "$app/navigation";
    export let data;

    let { supabase } = data;
    $: ({ supabase } = data);

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
        } else {
            goto("/");
        }
    };

    const uid = data.session.user.id;

    let name = "John";
    let email = "sample@mail.com";
</script>

<a class="icon border" href="/app"><IconBack /></a>
<form>
    <fieldset>
        <legend>Account</legend>
        <input type="hidden" name="uid" value={uid} />
        <input type="text" name="name" value={name} />
        <input type="text" value={email} disabled />
    </fieldset>
</form>
<button class="error" on:click={handleSignOut}>Sign out</button>

<style>
    .icon {
        font-size: 3em;
        line-height: 0;
        width: fit-content;
        align-self: flex-start;
        color: inherit;
        text-decoration: none;
        border-width: 2px;
    }
    legend {
        align-self: flex-start;
    }
    fieldset {
        border: 0;
        box-shadow: none;
    }
</style>
