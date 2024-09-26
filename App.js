import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoListScreen from './screens/TodoListScreen';

const placeholder = [
  {
    id: 1,
    name: 'Test Item',
    status: true,
  },
  {
    id: 2,
    name: 'Test Item 2',
    status: false,
  },
  {
    id: 3,
    name: 'Test Item 3',
    status: true,
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <TodoListScreen todoItems={placeholder}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
