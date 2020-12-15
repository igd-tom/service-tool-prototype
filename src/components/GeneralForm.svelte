<script>
    

    export let serial;
    export let baseAddr;

    const handleSubmit = () => {
        console.log(serial);
        // console.log(name, beltColour, age, skills);
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
        <input type="number" bind:value={serial} />
        <div>Base Address</div>
        <input type="number" bind:value={baseAddr} />
    </div>

    <br />
    <br />

    <button type="submit">Apply</button>
</form>
