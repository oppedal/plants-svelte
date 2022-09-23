
export default {
  name: 'post',
  title: 'Planter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hva kaller du planten?',
      type: 'string',
    },
    {
      name: 'scientific_name',
      title: 'Hva slags plante er det? ',
      type: 'string',
    },
    {
      name: 'birthdate',
      title: 'Når er planten født?',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Her lager du en URL til bildet.',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Bilde',
      type: 'image',
      description: 'Hovedbilde til planten.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternativ tekst til bildet.',
          description: 'Beskriv bildet',
          type: 'string',
          validation: (Rule) => Rule.required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'body',
      title: 'Plante bio',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
