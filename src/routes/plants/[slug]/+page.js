import client from '../../../lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url';

export const getPosts = async ({ params }) => {
	const { slug } = params;
	const posts = await client.fetch(`*[_type == 'post']`, { slug });
	return posts;
};

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
