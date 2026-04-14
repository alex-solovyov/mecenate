import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { tokens } from '../theme/tokens';

export const FeedError = ({ onRetry }: { onRetry: () => void }) => (
  <View style={styles.root}>
    <View style={styles.illustration}>
      <Text style={styles.glyph}>⚠️</Text>
    </View>
    <Text style={styles.title}>Не удалось загрузить публикации</Text>
    <Pressable style={styles.button} onPress={onRetry}>
      <Text style={styles.buttonLabel}>Повторить</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
    gap: tokens.spacing.lg,
    backgroundColor: tokens.color.bg.card,
    borderRadius: tokens.radii.card,
    marginHorizontal: tokens.spacing.lg,
    marginTop: tokens.spacing.lg,
    paddingVertical: tokens.spacing.xxl,
  },
  illustration: {
    width: 112,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    fontSize: 72,
  },
  title: {
    ...tokens.typography.title,
    color: tokens.color.text.primary,
    textAlign: 'center',
  },
  button: {
    height: tokens.size.buttonHeight,
    width: '100%',
    borderRadius: tokens.radii.button,
    backgroundColor: tokens.color.brand.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    ...tokens.typography.button,
    color: tokens.color.text.inverse,
  },
});
