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
import {typography} from '../utils/typography';
import setFontStyles from '../utils/setFontStyles';
import useTheme from '../hooks/useTheme';
import {setStorage} from '../utils/storage';

type Props = NativeStackScreenProps<BottomStackParamList, 'Tab2'>;

const Tab2 = ({}: Props) => {
  const {colors, dark} = useTheme();

  const [postData, setPosData] = useState({
    title: '',
    description: '',
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

  const handleDarkModeSwitch = (value: boolean) => {
    dispatch(setIsDark(value));
    setStorage('darkMode', value);
  };

  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.card1, {borderColor: colors.border}]}>
        <Text style={{color: colors.font}}>Dark</Text>
        <Switch
          trackColor={{false: '#767577', true: '#e9e9e9'}}
          thumbColor={true ? colors.primary : '#767577'}
          ios_backgroundColor="#c6c6c6"
          onValueChange={handleDarkModeSwitch}
          value={dark}
        />
      </View>
      <TextInput
        placeholder="Title"
        placeholderTextColor={colors.grayFont}
        style={[styles.input, {color: colors.font, borderColor: colors.border}]}
        onChangeText={value => setPosData(prev => ({...prev, title: value}))}
      />
      <TextInput
        placeholder="Description"
        placeholderTextColor={colors.grayFont}
        style={[styles.input, {color: colors.font, borderColor: colors.border}]}
        onChangeText={value =>
          setPosData(prev => ({...prev, description: value}))
        }
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.primary}]}
        onPress={onPressAddPost}>
        <Text style={{color: '#fff'}}>Добавить пост</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        renderItem={({item}) => {
          return (
            <View style={[styles.itemView, {borderColor: colors.border}]}>
              <Text style={{...setFontStyles(14, '500', colors.font)}}>
                id: {item.id}
              </Text>
              <Text style={{...typography('contentBold', colors.font)}}>
                title: title{item.title}
              </Text>
              <Text style={{...setFontStyles(14, '500', colors.font)}}>
                description: {item.description}
              </Text>
              <TouchableOpacity onPress={() => onPressDeletePost(item.id)}>
                <Text style={{color: 'red'}}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id + ''}
        ListEmptyComponent={
          <View style={styles.emptyView}>
            <Text style={{color: colors.font}}>List empty</Text>
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
