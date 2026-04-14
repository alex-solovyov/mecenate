import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { tokens } from '../theme/tokens';

export const PostCardCover = ({ uri }: { uri: string }) => {
  const { width } = useWindowDimensions();
  const size = width - tokens.spacing.lg * 2;
  return (
    <Image
      source={{ uri }}
      style={[styles.image, { width: size, height: size }]}
      contentFit="cover"
      transition={200}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: tokens.color.skeleton,
  },
});
