<script>
	export let segment;

	const handleClick = () => {
		console.log(segment);
	};
</script>

<style>
	nav {
		background: #f3f3f3;
		padding: 10px;
	}
	nav div {
		max-width: 960px;
		padding: 0 10px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	h1 {
		margin-top: 10px;
		font-size: 16px;
		font-weight: 700;
		color: #4d4d4d;
	}
	ul {
		padding: 0;
		margin: 0;
		text-align: right;
	}
	li {
		display: inline-block;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #4d4d4d;
		opacity: 50%;
		font-weight: 700;
		font-size: 14px;
	}
	a.current {
		color: #38beef;
		opacity: 100%;
	}
</style>

<nav>
	<div>
		<h1 on:click={handleClick}>Service Tool</h1>

		<ul>
			<li><a class:current={segment === undefined} href=".">Setup</a></li>

			<li>
				<a
					class:current={segment === 'service'}
					href="service">Service</a>
			</li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
			<li>
				<a
					rel="prefetch"
					class:current={segment === 'reports'}
					href="reports">Reports</a>
			</li>
		</ul>
	</div>
</nav>
