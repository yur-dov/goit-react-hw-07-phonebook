import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contact'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6313b830a8d3f673ffcf6d94.mockapi.io',
    }),
    endpoints: builder => ({
        getContacts: builder.query({
            // method: 'GET',
            query: () => `/contacts`,
            providesTags: ['Contact']

        }),
        addContact: builder.mutation({
            query: ({ name, number }) => ({
                url: `/contacts`,
                method: 'POST',
                body: { name, number },
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
} = contactsApi;