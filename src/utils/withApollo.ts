import { createWithApollo } from "./createWithApollo";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { PaginatedPosts } from "../generated/graphql";
import { NextPageContext } from "next";
import { API, Auth } from "aws-amplify";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL as string
});

async function Authy() {
  const user = (await Auth.currentSession()).getAccessToken();
  // @ts-ignore
  return user.jwtToken;
}

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await Authy();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token
    }
  };
});

const createClient = (ctx: NextPageContext) => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
    // {
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       posts: {
    //         keyArgs: [],
    //         merge(
    //           existing: PaginatedPosts | undefined,
    //           incoming: PaginatedPosts
    //         ): PaginatedPosts {
    //           return {
    //             ...incoming,
    //             posts: [...(existing?.posts || []), ...incoming.posts]
    //           };
    //         }
    //       }
    //     }
    //   }
    // }
    // }
  });
};

export const withApollo = createWithApollo(createClient);
