import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Color } from '../ui';

type ButtonProps = {
  onPress: () => void;
  styles?: Record<string, string>
}

export const ButtonPlus: React.FC<ButtonProps> = (props) => (
  <Pressable
    onPress={props.onPress}
    style={{ ...styles.ButtonPlus, ...props.styles }}
  >
    <Text style={styles.ButtonTextPlus}>+</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  ButtonPlus: {
    height: 64,
    width: 64,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: Color.BASIC_BLUE,
  },
  ButtonTextPlus: {
    fontSize: 50,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: 'white',
  },
})
