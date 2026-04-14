import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { tokens } from '../theme/tokens';

export const PaidOverlay = ({ onPress }: { onPress?: () => void }) => (
  <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill}>
    <View style={styles.inner}>
      <View style={styles.iconBox}>
        <Text style={styles.iconGlyph}>$</Text>
      </View>
      <Text style={styles.caption}>
        Контент скрыт пользователем.{'\n'}Доступ откроется после доната
      </Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>Отправить донат</Text>
      </Pressable>
    </View>
  </BlurView>
);

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    backgroundColor: tokens.color.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: tokens.color.brand.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlyph: {
    color: tokens.color.text.inverse,
    fontSize: 22,
    fontWeight: '700',
  },
  caption: {
    ...tokens.typography.button,
    color: tokens.color.text.inverse,
    textAlign: 'center',
  },
  button: {
    height: tokens.size.buttonHeight,
    paddingHorizontal: tokens.spacing.xxl,
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
