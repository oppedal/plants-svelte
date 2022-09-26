<script>
	import '../app.postcss';
	// import { page } from '$app/stores';
	// let pageUrl;
	// let pageName;
	// const currentPage = $page.path;

	//Change nav-button based on current page
	// if (currentPage == '/') {
	// 	pageName = 'list';
	// 	pageUrl = '/plants';
	// } else if (currentPage == '/plants') {
	// 	pageName = 'slides';
	// 	pageUrl = '/';
	// } else {
	// 	pageName = 'back';
	// 	pageUrl = '/plants';
	// }
</script>

<div class="logo fixed nav-center left-0 right-0 w-full px-0 lg:px-4 z-20">
	<div class="grid grid-cols-12 custom-padding pt-4 lg:pt-8">
		<nav class="col-span-12 flex items-center contrast-bg justify-between">
			<a href="/" class="logo uppercase text-[16px] lg:text-2xl">Skogen Plants</a>
			<a
				href="/plants/"
				class="logo uppercase text-[14px] lg:text-[16px] px-3 rounded-full py-1 font-bold border border-darkGreen"
				>list
			</a>
		</nav>
	</div>
</div>
<slot />
