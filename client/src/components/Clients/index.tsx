import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import { client } from "pages/_app";

const Clients = (props: any) => {
  console.log(props);

  return <div></div>;
};

export default Clients;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await client.query({
    query: gql`
      query clients {
        id
        name
        email
        phone
      }
    `,
  });
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
