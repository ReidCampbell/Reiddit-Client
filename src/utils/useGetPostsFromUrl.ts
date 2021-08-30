import { useGetPostQuery } from "../generated/graphql";
import { useGetPostId } from "./useGetIntId";

export const useGetPostFromUrl = () => {
  const postID = useGetPostId();

  return useGetPostQuery({
    skip: !postID,
    variables: {
      id: postID
    }
  });
};
