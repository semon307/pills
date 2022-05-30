import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Color } from '../styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  styles?: Record<string, string>
}

export const Button: React.FC<ButtonProps> = (props) => (
  <Pressable
    onPress={props.onPress}
    style={{ ...styles.Button, ...props.styles }}
  >
    <Text style={styles.ButtonTex}>{props.title}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  Button: {
    height: 50,
    width: '80%',
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginHorizontal: 20,
    borderRadius: 14,
    elevation: 3,
    backgroundColor: Color.BASIC_BLUE,
  },
  ButtonTex: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
