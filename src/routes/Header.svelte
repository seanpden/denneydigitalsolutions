<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="transparent">
	<svelte:fragment slot="lead">🌎</svelte:fragment>
	DenneyDigitalSolutions
	<svelte:fragment slot="trail">
		<button type="button" class="btn !bg-transparent">Button</button>
		<LightSwitch />
	</svelte:fragment>
</AppBar>
