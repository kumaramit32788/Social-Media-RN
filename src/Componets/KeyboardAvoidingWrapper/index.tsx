import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from "react-native";

type KeyboardAvoidingWrapperProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  /** Use when content may overflow (e.g. long forms). Default: false */
  scrollable?: boolean;
  /** keyboardVerticalOffset: useful when you have a header. Default: 0 */
  keyboardVerticalOffset?: number;
};

const KeyboardAvoidingWrapper: React.FC<KeyboardAvoidingWrapperProps> = ({
  children,
  style,
  scrollable = false,
  keyboardVerticalOffset = 0,
}) => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  const content = scrollable ? (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  return (
    <KeyboardAvoidingView
      style={[styles.wrapper, style]}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      {content}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default KeyboardAvoidingWrapper;
