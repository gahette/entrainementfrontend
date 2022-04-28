export default {
    name: 'address',
    title: 'Address',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'adressePostale',
            title: 'AdressePostale',
            type: 'text',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },

        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        },
                {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'telephone',
            title: 'Telephone',
            type: 'number',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
