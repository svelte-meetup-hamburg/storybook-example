<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/Button.svelte';

	function doSmth() {
		console.log('DONE');
	}
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		onClick: { action: 'onClick' },
		disabled: { control: 'boolean' }
	}}
/>

<Template let:args>
	<!-- <div class="sb-reset"> </div> -->
	<Button {...args} on:click={args.onClick}>Hallo</Button>
</Template>

<Story name="Default" args={{}} />

<Story
	name="Disabled"
	args={{
		disabled: true
	}}
	play={doSmth}
/>
