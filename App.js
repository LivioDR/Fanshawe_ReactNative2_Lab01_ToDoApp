import uuid from 'react-native-uuid';
import { StyleSheet, Text, View } from 'react-native';
import TodoListScreen from './screens/TodoListScreen';
import { useEffect, useState } from 'react';

const placeholder = [
  {
    id: uuid.v4(),
    name: 'Test Item',
    status: true,
  },
  {
    id: uuid.v4(),
    name: 'Test Item 2',
    status: false,
  },
  {
    id: uuid.v4(),
    name: 'Test Item 3',
    status: true,
  }
]

export default function App() {

  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    setTodoItems(placeholder)
  },[])

  const removeItemById = (idToRemove) => {
    setTodoItems(prev => {
      let newList = prev.filter(item => item.id != idToRemove)
      return newList
    })
  }

  const toggleItemById = (idToToggle) => {
    setTodoItems(prev => {
      let newList = [...prev]
      for(let i=0; i<newList.length; i++){
        if(newList[i].id == idToToggle){
          newList[i].status = !newList[i].status
          break
        }
      }
      return newList
    })
  }


  return (
    <View style={styles.container}>
      <TodoListScreen todoItems={todoItems} remove={removeItemById} toggle={toggleItemById}/>
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
