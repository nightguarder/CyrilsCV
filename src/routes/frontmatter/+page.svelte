<script>
    import Content from '$lib/content/frontmatter.svx';
    export let data;
</script>

<main class="prose-md max-w-none p-4">
    <Content frontmatter={data} />
    
    {#if data}
        <div class="mt-8 p-4 bg-gray-100 rounded">
            <p class="font-semibold">Frontmatter Data:</p>
            <pre class="text-sm mt-2">{JSON.stringify(data, null, 2)}</pre>
        </div>
    {/if}
</main>