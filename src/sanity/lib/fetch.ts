import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ixfbltny",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
});

// Correct function syntax with proper type definition
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
    return await client.fetch<T>(query, params);
}
