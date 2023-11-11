<script>
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
</script>

<button class="error" on:click={handleSignOut}>Sign out</button>
