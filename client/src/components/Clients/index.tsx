import { gql } from "@apollo/client";
import { client } from "pages/_app";

const Clients = ({ clients }: any) => {
  console.log(clients);

  return <div></div>;
};

export default Clients;

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
