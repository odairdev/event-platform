import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}


export const client = new ApolloClient({
    uri: import.meta.env.VITE_CONTENT_API,
    cache: new InMemoryCache(),
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
    },
    defaultOptions: defaultOptions,
})