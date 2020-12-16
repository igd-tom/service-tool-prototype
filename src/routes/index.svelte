<script>
	import successkid from "images/successkid.jpg";
	import Nested from "../components/Nested.svelte";
	import Modal from "../components/Modal.svelte";
	import GeneralForm from "../components/GeneralForm.svelte";
	import { init, rd } from "../components/TwoWireComms.js";
	import { onMount } from "svelte";

	import { store } from "../components/stores.js";

	let __pcbType = "";

	let __version = "";
	let __checksum = "";
	let __swDate = "";

	let __displayModal = false;
	let __modalType = "general";

	onMount(async () => {
		try {
			await init();

			// for (let i = 0; i < 100; i++) {
			// 	try {
			// 		let serial = await rd.settings.serial({ addr: 255 });

			// 		console.log(serial);
			// 	} catch (e) {
			// 		console.log("e:", e);
			// 		break;
			// 	}
			// }

			let serial = await rd.settings.serial({ addr: 255 });

			store.setSerial(serial);

			let baseSettings = await rd.settings.baseSettings({ addr: 255 });
			store.setBaseAddr(baseSettings.baseAddr);
			store.setChannelIndex(baseSettings.channelIndex);
			store.setTotalChannels(baseSettings.totalChannels);

			let pcbType = await rd.settings.pcbType({ addr: 255 });
			__pcbType = pcbType.pcbType;

			let program = await rd.version.program({ addr: 255 });
			__version = program.version;
			__checksum = program.checksum;

			let progDate = await rd.version.programDate({ addr: 255 });
			__swDate = progDate;
		} catch (e) {
			console.log("error: ", e);
		}
	});

	let closeModal = () => {
		__displayModal = false;
	};

	let showModal = (arg) => {
		__displayModal = true;
		__modalType = arg;
	};
</script>

<style>
	section {
		cursor: pointer;
		padding: 10px;
	}

	section .row {
		color: #666666;
		font-size: 13px;
		padding: 10px 0px;
		border-bottom: 0.1px solid #eeeeee;
		margin: 10px 0;
		display: grid;
		grid-template-columns: 2fr 0.8fr;
	}

	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	h3 {
		color: #666666;
		font-size: 13px;
		font-weight: bold;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Service Tool Prototype</title>
</svelte:head>

<Modal
	showModal={__displayModal}
	on:click={() => {
		closeModal();
	}}>
	{#if __modalType == 'general'}
		<GeneralForm {closeModal} />
	{/if}
</Modal>

<section
	on:click={() => {
		showModal('general');
	}}>
	<h3>General</h3>
	<br />

	<div class="row">
		<div>Serial</div>
		<div>{$store.serial}</div>
	</div>

	<div class="row">
		<div>Base Address</div>
		<div>{$store.baseAddr}</div>
	</div>
</section>

<br />
<br />

<section>
	<h3>Board Details</h3>
	<br />

	<div class="row">
		<div>PCB Type</div>
		<div>{__pcbType}</div>
	</div>

	<div class="row">
		<div>Software Version</div>
		<div>{__version}</div>
	</div>

	<div class="row">
		<div>Software Checksum</div>
		<div>{__checksum}</div>
	</div>

	<div class="row">
		<div>Software Date</div>
		<div>{__swDate}</div>
	</div>
</section>

<!-- <h1>The count is {$count}</h1> -->

<!-- <figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure> -->
