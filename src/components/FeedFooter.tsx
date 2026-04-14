import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { tokens } from '../theme/tokens';

export const FeedFooter = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <View style={styles.wrap}>
      <ActivityIndicator color={tokens.color.brand.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: tokens.spacing.lg,
    alignItems: 'center',
  },
});
