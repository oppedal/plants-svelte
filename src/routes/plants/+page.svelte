<script>
	import { getPosts } from './+page';
	import { urlFor } from './+page';
	const allPosts = getPosts();
</script>

<h1>PLants list page</h1>
<button><a href="/">Home</a></button>
<ul>
	{#await allPosts then posts}
		{#each posts as post}
			<li>
				{post.title}
			</li>
			{console.log(post.mainImage)}
			<img src={urlFor(post.mainImage)} alt={post.mainImage.alt} />
		{/each}
	{/await}
	<!-- {#each posts as post}
		<li>{post.title}</li>
	{/each} -->
</ul>
