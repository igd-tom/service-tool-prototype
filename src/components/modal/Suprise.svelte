<!-- Surprise.svelte -->
<script>
    export let message;
    export let onClose;
</script>

<input type="text" />
<p>🎉 {message} 🍾</p>
<button on:click={onClose}>Custom Close Button</button>
