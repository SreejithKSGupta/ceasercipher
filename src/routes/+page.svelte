<script lang="ts">
    
    import Sidebar from "./components/sidebar.svelte";
    import Content from "./components/content.svelte";
	
	let x = 0;
	let y = 0;
</script>

<svelte:body 
	on:mousemove={(e) => {
		x = e.clientX / window.innerHeight;
		y = e.clientY / window.innerWidth;
	}}
/>

<div class="container" style="background-color: rgb({x * 20},{y * 20},{(y + x) * 20};">
	<Content />
	<Sidebar />

</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: row;
		background-color: #000220;
		color: white;
		height: 80vh;
	}
	@media only screen and (max-width: 600px) {
		.container {
			flex-direction: column;
		}
	}
	
</style>
