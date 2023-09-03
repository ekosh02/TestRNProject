import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {setIsDark} from '../featutes/darkMode/darkMode';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from '../navigation/BottomNavigation';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import {postAdd, postDelete} from '../featutes/posts/posts';
import {v4 as uuidv4} from 'uuid';

type Props = NativeStackScreenProps<BottomStackParamList, 'Tab2'>;

const Tab2 = ({}: Props) => {
  const [postData, setPosData] = useState({
    title: '',
    description: '',
  });

  const isDark = useAppSelector(state => {
    return state.darkMode.value;
  });
  const posts = useAppSelector(state => {
    return state.posts;
  });
  const dispatch = useAppDispatch();

  const onPressAddPost = () => {
    if (postData.title && postData.description) {
      dispatch(
        postAdd({
          id: uuidv4(),
          title: postData.title,
          description: postData.description,
        }),
      );
    } else {
      Alert.alert('Заполните все поля');
    }
  };

  const onPressDeletePost = (id: number) => {
    dispatch(postDelete(id));
  };

  return (
    <View style={styles.view}>
      <View style={styles.card1}>
        {isDark ? (
          <Text style={{color: 'white'}}>Dark</Text>
        ) : (
          <Text>Light</Text>
        )}
        <Switch
          trackColor={{false: '#767577', true: '#f1f1f1'}}
          thumbColor={true ? '#81b0ff' : '#c6c6c6'}
          ios_backgroundColor="#c6c6c6"
          onValueChange={value => dispatch<any>(setIsDark(value))}
          value={isDark}
        />
      </View>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={value => setPosData(prev => ({...prev, title: value}))}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={value =>
          setPosData(prev => ({...prev, description: value}))
        }
      />
      <TouchableOpacity style={styles.button} onPress={onPressAddPost}>
        <Text>Добавить пост</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        renderItem={({item}) => {
          return (
            <View style={styles.itemView}>
              <Text>id: {item.id}</Text>
              <Text>title: title{item.title}</Text>
              <Text>description: {item.description}</Text>
              <TouchableOpacity onPress={() => onPressDeletePost(item.id)}>
                <Text style={{color: 'red'}}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id + ''}
        ListEmptyComponent={
          <View style={styles.emptyView}>
            <Text>List empty</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  card1: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#81b0ff',
  },
  emptyView: {
    marginTop: 10,
    alignItems: 'center',
  },
  itemView: {
    marginTop: 10,
    marginHorizontal: 16,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Tab2;
