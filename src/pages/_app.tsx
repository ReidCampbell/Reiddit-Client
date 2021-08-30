import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import theme from "../theme";
import "../index.css";
import Amplify from "aws-amplify";
import awsExports from "../utils/aws-exports";
import { AmplifyAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

Amplify.configure(awsExports);

const client = new ApolloClient({
  uri:
    "https://22ho52tqtremfi3fkcdneqg6aa.appsync-api.eu-west-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "eyJraWQiOiJVcFdvUzFpS3BjZFM0ZG1HXC9PNVVnMGMzb2pUYkQzOHdHZllTdUdCNVN1VT0iLCJhbGciOiJSUzI1NiJ9"
  }
});

function MyApp({ Component, pageProps }: any) {
  return (
    <AmplifyAuthenticator>
      {/* <ApolloProvider client={client}> */}
      <ThemeProvider theme={theme}>
        {/* <ColorModeProvider> */}
        <CSSReset />
        <Component {...pageProps} />
        {/* </ColorModeProvider> */}
      </ThemeProvider>
      {/* </ApolloProvider> */}
    </AmplifyAuthenticator>
  );
}

export default withAuthenticator(MyApp);
