import React from "react";
import { Box, IconButton, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { useDeletePostMutation } from "../generated/graphql";
import { Tooltip } from "@chakra-ui/core";

interface EditDeletePostButtonsProps {
  id: string;
  creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId
}) => {
  // const { data: meData } = useMeQuery();
  const [deletePost] = useDeletePostMutation();
  // if (meData?.me?.id !== creatorId) {
  //   return null;
  // }

  return (
    <Box>
      <Tooltip label="Edit Post" aria-label="Edit Post">
        <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
          <IconButton
            as={Link}
            icon="edit"
            aria-label="Edit Post"
            variant="link"
            size="sm"
            color="#aaaaaa"
          />
        </NextLink>
      </Tooltip>
      <Tooltip label="Delete Post" aria-label="Delete Post">
        <IconButton
          icon="delete"
          aria-label="Delete Post"
          variant="link"
          size="sm"
          color="#aaaaaa"
          onClick={() => {
            deletePost({
              variables: { input: { id } },
              update: cache => {
                cache.evict({ id: "Post:" + id });
              }
            });
          }}
        />
      </Tooltip>
    </Box>
  );
};
