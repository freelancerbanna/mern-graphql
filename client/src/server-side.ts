import { gql } from "@apollo/client";
import client from "apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Clients {
        clients {
          id
          name
          email
          phone
        }
      }
    `,
  });

  return {
    props: {
      clients: data.clients,
    },
  };
}
