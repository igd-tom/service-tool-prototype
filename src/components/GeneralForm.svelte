<script>
    import { store } from "../components/stores.js";
    import { wr } from "../components/TwoWireComms.js";

    let __serial = $store.serial;
    let __baseAddr = $store.baseAddr;
    let __channelIndex = $store.channelIndex;
    let __totalChannels = $store.totalChannels;

    export let closeModal;

    const handleSubmit = async () => {
        try {
            await wr.settings.serial({
                addr: 255,
                serial: __serial,
            });
            store.setSerial(__serial);

            await wr.settings.baseSettings({
                addr: 255,
                baseAddr: __baseAddr,
                channelIndex: __channelIndex,
                totalChannels: __totalChannels,
            });
            store.setBaseAddr(__baseAddr);
        } catch (e) {
            console.log(e);
        }

        closeModal();
    };
</script>

<style>
    h3 {
        color: #4d4d4d;
        font-size: 16px;
        font-weight: 300;
        text-align: left;
    }

    div {
        color: #4d4d4d;
        text-align: left;
    }

    form .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 20px;
        text-align: left;
    }

    button {
        background: #808080;
        color: #ffffff;
        border: none;
        padding: 15px 25px;
    }

    input {
        border: none;
        background: #f3f3f3;
        color: #4d4d4d;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        padding: 5px;
        text-align: left;
    }
</style>

<h3>General</h3>

<br />
<br />

<form on:submit|preventDefault={handleSubmit}>
    <div class="inputs">
        <div>Serial</div>
        <input type="number" bind:value={__serial} />
        <div>Base Address</div>
        <input type="number" bind:value={__baseAddr} />
    </div>

    <br />
    <br />

    <button type="submit">Apply</button>
</form>
