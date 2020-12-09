<!-- Content.svelte -->
<script>
    import { getContext } from "svelte";
    import Surprise from "../../components/modal/Suprise.svelte";

    const { open, close } = getContext("simple-modal");

    const showSurprise = () => {
        open(Surprise, { message: "It's a modal!", onClose: close });
    };
</script>

<p><button on:click={showSurprise}>Show me a surprise!</button></p>
