<script lang="ts">
	import '../app.pcss';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	initializeStores();
</script>

<Drawer>
	<Navigation />
</Drawer>
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
