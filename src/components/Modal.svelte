<script>
    export let showModal = false;
    
</script>

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
    }
    .modal {
        padding: 30px 25px;
        max-width: 400px;
        margin: 10% auto;
        text-align: right;
        background: white;
        font-size: 13px;
    }

</style>

{#if showModal}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <slot />
        </div>
    </div>
{/if}
