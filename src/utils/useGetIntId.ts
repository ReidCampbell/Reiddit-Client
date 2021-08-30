import { useRouter } from "next/router";

export const useGetPostId = (): string => {
  const router = useRouter();

  return router.query.id as string;
};
