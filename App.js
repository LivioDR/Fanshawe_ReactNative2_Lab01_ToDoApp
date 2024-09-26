import { StyleSheet, View } from 'react-native';
import TodoListScreen from './screens/TodoListScreen';
import { useState } from 'react';

export default function App() {

  const [todoItems, setTodoItems] = useState([])

  // useEffect(() => {
  //  Here I would get data from a storage 
  //  setTodoItems() 
  // },[])

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

  const addItem = (data) => {
    setTodoItems(prev => {
      let newList = [...prev]
      newList.push(data)
      return newList
    })
  }


  return (
    <View style={styles.container}>
      <TodoListScreen todoItems={todoItems} remove={removeItemById} toggle={toggleItemById} add={addItem}/>
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
