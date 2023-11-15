<script>
    import IconBack from "~icons/mdi/chevron-left";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
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
    const user_data = data.session.user;

    let original_name = user_data.user_metadata.nickname;
    let email = user_data.email;

    let name = original_name;
    $: disabled = name === original_name;
</script>

<a class="icon border" href="/app"><IconBack /></a>
<form
    method="POST"
    use:enhance={() => {
        return async ({ update }) => {
            update({ reset: false });
        };
    }}
>
    <fieldset>
        <legend>Account</legend>
        <input type="text" name="name" bind:value={name} required />
        <input type="text" value={email} disabled />
        <button type="submit" class="btn-secondary" {disabled}>Apply</button>
    </fieldset>
</form>
<button class="error" on:click={handleSignOut}>Sign out</button>
```

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
    legend{
        font-size: 2em;
    }
    input{
        font-size: 1.4em;
        line-height: 2;
        width: 100%;
        
    }
    button{
        width: 100%;
        height: 3em;
        font-size: 1.5em;
    }
   
    button:disabled,
    button[disabled] {
        background-color: #cccccc;
        color: #666666;
        font-weight: 500;
    }
</style>
