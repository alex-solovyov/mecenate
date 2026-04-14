import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { tokens } from '../theme/tokens';
import { HeartIcon } from './icons/HeartIcon';
import { CommentIcon } from './icons/CommentIcon';

interface Props {
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  onLikePress?: () => void;
  onCommentPress?: () => void;
}

export const PostCardActions = ({
  likesCount,
  commentsCount,
  isLiked,
  onLikePress,
  onCommentPress,
}: Props) => {
  const likeBg = isLiked ? tokens.color.like.active : tokens.color.action.bg;
  const likeFg = isLiked
    ? tokens.color.like.textActive
    : tokens.color.text.secondary;
  return (
    <View style={styles.row}>
      <Pressable
        style={[styles.chip, { backgroundColor: likeBg }]}
        onPress={onLikePress}
        hitSlop={4}
      >
        <View style={styles.iconBox}>
          <HeartIcon size={24} color={likeFg} filled={isLiked} />
        </View>
        <Text style={[styles.label, { color: likeFg }]}>{likesCount}</Text>
      </Pressable>
      <Pressable
        style={[styles.chip, { backgroundColor: tokens.color.action.bg }]}
        onPress={onCommentPress}
        hitSlop={4}
      >
        <View style={styles.iconBox}>
          <CommentIcon size={15} color={tokens.color.text.secondary} />
        </View>
        <Text style={[styles.label, { color: tokens.color.text.secondary }]}>
          {commentsCount}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.xs,
    paddingLeft: 6,
    paddingRight: tokens.spacing.md,
    paddingVertical: 6,
    borderRadius: tokens.radii.action,
  },
  iconBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...tokens.typography.action,
  },
});
