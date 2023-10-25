<script>
    import { page } from "$app/stores";
    import EmailAuth from "$lib/components/forms/login.svelte";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    const url = $page.url;

    let showModal = url.searchParams.get("emailSent");
    let progress = 0;

    onMount(() => {
        if (showModal) {
            const interval = setInterval(() => {
                progress += 10;
                if (progress >= 115) {
                    clearInterval(interval);
                    showModal = false;
                }
            }, 500);
        }
    });
</script>

<EmailAuth />

<a href="/auth/register">Register</a>

{#if showModal}
    <div class="modal" transition:fade>
        <p>
            Check your email for confirmation to finish creating your account.
        </p>
        <div class="progress" style="width: {progress}%" />
    </div>
{/if}

<style>
    .modal {
        width: 80%;
        background-color: white;
        border: 3px solid black;
        /* padding: 0.5em; */
        font-family: sans-serif;
        font-weight: bold;
    }
    .progress {
        transition: width 1s linear;
        border-bottom: 4px solid orange;
        position: relative;
    }
    p {
        margin: 1em;
    }
</style>
