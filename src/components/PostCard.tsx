import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Post } from '../api/types';
import { tokens } from '../theme/tokens';
import { PostCardHeader } from './PostCardHeader';
import { PostCardCover } from './PostCardCover';
import { PostCardActions } from './PostCardActions';
import { PaidOverlay } from './PaidOverlay';

const PREVIEW_LINES = 2;

export const PostCard = ({ post }: { post: Post }) => {
  const isPaid = post.tier === 'paid';
  const bodyText = post.preview || post.body;
  const [isTruncated, setIsTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMeasureLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const lines = e.nativeEvent.lines.length;
    setIsTruncated(lines > PREVIEW_LINES);
  };

  return (
    <View style={styles.card}>
      <PostCardHeader author={post.author} />
      <View style={styles.media}>
        <View style={styles.coverWrap}>
          <PostCardCover uri={post.coverUrl} />
          {isPaid && <PaidOverlay />}
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {post.title}
        </Text>
        {isPaid || !bodyText ? null : (
          <View style={styles.bodyWrap}>
            <Text
              style={styles.bodyMeasure}
              onTextLayout={handleMeasureLayout}
              accessible={false}
              importantForAccessibility="no-hide-descendants"
            >
              {bodyText}
            </Text>
            <Text
              style={styles.body}
              numberOfLines={isExpanded ? undefined : PREVIEW_LINES}
            >
              {bodyText}
            </Text>
            {isTruncated && !isExpanded && (
              <View style={styles.showMoreRow} pointerEvents="box-none">
                <LinearGradient
                  colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', '#FFFFFF']}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.fade}
                />
                <Pressable
                  style={styles.showMoreBtn}
                  onPress={() => setIsExpanded(true)}
                  hitSlop={8}
                >
                  <Text style={styles.showMore}>Показать еще</Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
      </View>
      <PostCardActions
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        isLiked={post.isLiked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.color.bg.card,
    borderRadius: tokens.radii.card,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    gap: tokens.spacing.lg,
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },
  coverWrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    ...tokens.typography.title,
    color: tokens.color.text.primary,
    width: '100%',
  },
  bodyWrap: {
    width: '100%',
    position: 'relative',
  },
  body: {
    ...tokens.typography.body,
    color: tokens.color.text.primary,
    width: '100%',
  },
  bodyMeasure: {
    ...tokens.typography.body,
    position: 'absolute',
    left: 0,
    right: 0,
    opacity: 0,
  },
  showMoreRow: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: tokens.typography.body.lineHeight,
  },
  fade: {
    width: 20,
    height: '100%',
  },
  showMoreBtn: {
    backgroundColor: tokens.color.bg.card,
    paddingLeft: 2,
  },
  showMore: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 15,
    lineHeight: 20,
    color: tokens.color.brand.primary,
  },
});
