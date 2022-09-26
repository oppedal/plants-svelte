<script>
	import { getPosts } from './+page';
	import { urlFor } from './+page';

	const allPosts = getPosts();
</script>

<div class="grid h-screen grid-cols-12 custom-padding">
	<ol id="list-items" class="col-start-1 col-span-12 pt-14 lg:pt-24">
		{#await allPosts then posts}
			{#each posts as post, i}
				<li
					data-cursor-img={urlFor(post.mainImage)}
					class="pb-4 flex nowrap items-baseline plant-links lg:py-4 text-lightGreen"
				>
					<span class="text-h8">{i < 10 ? '0' + (i + 1) : i}</span>
					<a
						href={`plants/${post.slug.current}`}
						class="italick plant-link text-h3 pl-4 lg:pl-8 text-left"
					>
						{post.title}
					</a>
					<img
						src={urlFor(post.mainImage)}
						alt={post.mainImage.alt}
						class="mouse-image object-cover"
					/>
				</li>
			{/each}
		{/await}
	</ol>
</div>
