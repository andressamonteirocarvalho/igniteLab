import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4uesmol0wlp01t742om8jyw/master",
  cache: new InMemoryCache(),
});
