import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'ml4267x4',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2022-09-21'
});

export default client;
