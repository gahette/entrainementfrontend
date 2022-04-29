export default {
    name: 'galery',
    title: 'Galery',
    type: 'document',
    fields: [

        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'string',
            options: {
                list: [
                    {value: 'baptême', title: 'Baptême'},
                    {value: 'bébé', title: 'Bébé'},
                    {value: 'couple', title: 'Couple'},
                    {value: 'famille', title: 'Famille'},
                    {value: 'grossesse', title: 'Grossesse'},
                    {value: 'mariage', title: 'Mariage'},
                    {value: 'portrait', title: 'Portrait'},
                    ]
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
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
            const {author} = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
