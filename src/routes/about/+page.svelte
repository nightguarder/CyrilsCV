<script>
    import AboutContent from '$lib/content/about.svx';
    import { base } from '$app/paths';
</script>

<nav class="mb-8">
    <a href={base} class="mr-4 hover:underline">Home</a>
    <a href={base + '/about'} class="hover:underline">About</a>
    <a href={base + '/frontmatter'} class="hover:underline">Frontmatter</a>
</nav>

<main class="prose max-w-none">
    <AboutContent class="prose-md" />
    
</main>
