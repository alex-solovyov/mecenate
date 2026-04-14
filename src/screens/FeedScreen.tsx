import React, { useCallback } from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePostsFeed } from '../hooks/usePostsFeed';
import { Post } from '../api/types';
import { PostCard } from '../components/PostCard';
import { FeedError } from '../components/FeedError';
import { FeedFooter } from '../components/FeedFooter';
import { tokens } from '../theme/tokens';

export const FeedScreen = () => {
  const {
    data,
    isError,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = usePostsFeed();

  const posts = data?.pages.flatMap((p) => p.posts) ?? [];

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.center} edges={['top']}>
        <ActivityIndicator color={tokens.color.brand.primary} size="large" />
      </SafeAreaView>
    );
  }

  if (isError && posts.length === 0) {
    return (
      <SafeAreaView style={styles.root} edges={['top']}>
        <FeedError onRetry={() => refetch()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <FlatList<Post>
        data={posts}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching && !isFetchingNextPage}
            onRefresh={() => refetch()}
            tintColor={tokens.color.brand.primary}
            colors={[tokens.color.brand.primary]}
          />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<FeedFooter visible={isFetchingNextPage} />}
      />
    </SafeAreaView>
  );
};

const Separator = () => <View style={{ height: tokens.spacing.lg }} />;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.color.bg.page,
  },
  center: {
    flex: 1,
    backgroundColor: tokens.color.bg.page,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: tokens.spacing.lg,
    gap: tokens.spacing.lg,
  },
});
