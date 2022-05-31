import { StyleSheet } from 'react-native';
import { Button } from '../commmon';
import { ButtonPlus } from '../commmon/components/ButtonPlus';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TemplatesScreen({ navigation }: RootTabScreenProps<'Templates'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEMPLATES SCREEN</Text>
      <Button title={'Add'} onPress={() => console.log('add pills')}/>
      <ButtonPlus onPress={() => console.log('add pills')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
