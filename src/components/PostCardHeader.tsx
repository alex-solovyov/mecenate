import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Author } from '../api/types';
import { tokens } from '../theme/tokens';

export const PostCardHeader = ({ author }: { author: Author }) => (
  <View style={styles.row}>
    <Image
      source={{ uri: author.avatarUrl }}
      style={styles.avatar}
      contentFit="cover"
      transition={150}
    />
    <Text style={styles.name} numberOfLines={1}>
      {author.displayName}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.md,
    width: '100%',
  },
  avatar: {
    width: tokens.size.avatar,
    height: tokens.size.avatar,
    borderRadius: tokens.radii.avatar,
    backgroundColor: tokens.color.skeleton,
  },
  name: {
    ...tokens.typography.author,
    color: tokens.color.text.primary,
    flexShrink: 1,
  },
});
