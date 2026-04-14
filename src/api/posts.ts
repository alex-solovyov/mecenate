import { apiClient } from './client';
import { PostsPage, PostsResponse } from './types';

export interface GetPostsFeedParams {
  limit?: number;
  cursor?: string;
  tier?: 'free' | 'paid';
  simulateError?: boolean;
}

export async function getPostsFeed(
  params: GetPostsFeedParams = {}
): Promise<PostsPage> {
  const { limit = 10, cursor, tier, simulateError } = params;
  const { data } = await apiClient.get<PostsResponse>('/posts', {
    params: {
      limit,
      ...(cursor ? { cursor } : {}),
      ...(tier ? { tier } : {}),
      ...(simulateError ? { simulate_error: true } : {}),
    },
  });
  return data.data;
}
