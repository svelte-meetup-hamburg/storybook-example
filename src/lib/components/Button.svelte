<script lang="ts">
	export let disabled: boolean = false;
</script>

<button class="bg-blue-400 rounded-lg px-4 py-2" {disabled}>
	<slot />
</button>

<style>
	button:disabled {
		@apply bg-gray-400;
		@apply cursor-not-allowed;
	}
</style>
