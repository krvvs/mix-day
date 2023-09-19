import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

export default async function getContent(query: string) {
  try {
    const { data } = await getClient().query({
      query: gql`
        ${query}
      `,
    });
    return data;
  } catch (error) {
    console.error("GraphQL query error:", error);
    return null;
  }
}