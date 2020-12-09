<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 100px 0.5em;
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
