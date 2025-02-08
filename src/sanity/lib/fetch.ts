import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ixfbltny",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
});

// Correct function syntax
export async function sanityFetch(query: string, params: any = {}) {
    return await client.fetch(query, params);
}
 