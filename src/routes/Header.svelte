<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		position: 'right',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};
	const drawerStore = getDrawerStore();

	function openDrawer() {
		drawerStore.open(drawerSettings);
	}
</script>

<AppBar background="transparent">
	<svelte:fragment slot="lead">
		<a class="font-bold" href="/">🌎 DenneyDigitalSolutions</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<button type="button" class="btn btn-sm mr-4 !bg-transparent lg:hidden" on:click={openDrawer}>
			☰
			<!-- <span> -->
			<!-- 	<svg viewBox="0 0 100 80" class="fill-token h-4 w-4"> -->
			<!-- 		<rect width="100" height="20" /> -->
			<!-- 		<rect y="30" width="100" height="20" /> -->
			<!-- 		<rect y="60" width="100" height="20" /> -->
			<!-- 	</svg> -->
			<!-- </span> -->
		</button>
		<button class="hidden lg:block"><a href="#Home">Home</a></button>
		<button class="hidden lg:block"><a href="#About">About</a></button>
		<button class="hidden lg:block"><a href="#Blog">Blog</a></button>
		<button class="hidden lg:block"><a href="#Contact">Contact</a></button>
		<LightSwitch class="hidden lg:block" />
	</svelte:fragment>
</AppBar>
