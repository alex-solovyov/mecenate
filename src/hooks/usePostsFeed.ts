import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostsFeed } from '../api/posts';
import { PostsPage } from '../api/types';

export const POSTS_QUERY_KEY = ['posts'] as const;

export function usePostsFeed() {
  return useInfiniteQuery<PostsPage, Error>({
    queryKey: POSTS_QUERY_KEY,
    queryFn: ({ pageParam }) =>
      getPostsFeed({ limit: 10, cursor: pageParam as string | undefined }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextCursor ?? undefined : undefined,
  });
}
