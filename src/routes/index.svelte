<script>
	import successkid from "images/successkid.jpg";
</script>

<style>
	section .row {
		color: #666666;
		font-size: 13px;
		padding: 10px 0;
		border-bottom: 0.1px solid #eeeeee;
		margin: 10px auto;
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

<section>
	<h3>General</h3>
	<br />

	<div class="row">
		<div>Serial</div>
		<div>16784958</div>
	</div>

	<div class="row">
		<div>Base Address</div>
		<div>50</div>
	</div>
</section>

<br />
<br />

<section>
	<h3>Board Details</h3>
	<br />

	<div class="row">
		<div>PCB Type</div>
		<div>T750 Annunciator</div>
	</div>

	<div class="row">
		<div>Software Version</div>
		<div>4.5</div>
	</div>

	<div class="row">
		<div>Software Checksum</div>
		<div>0x567CF9</div>
	</div>

	<div class="row">
		<div>Software Date</div>
		<div>11/05/2020</div>
	</div>
</section>

<!-- <figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure> -->
