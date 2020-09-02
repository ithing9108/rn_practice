import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Loading from "./Loading";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useClick } from "./useClick";

export default function App() {

  
  //useState
  const [item, setItem] = useState(1);      //init = 1
  const onlyValue = useState(1)[0];
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  
  //useEffect - ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate
  const sayHello = () => console.log("hello"); 
  useEffect(sayHello, [item]);          // 두번째 인자에 값이 있고 해당 값이 변했을 때, useEffect 활성화
                                        // 컴포넌트 마운트 시에만 = [], 항상 = 인자X

  //useinput
  const name = useInput("lbc");           // <input placeholder="input" {...name}/> , name.value, name.onChange
  //useTabs
  const content = [{tab: "sec1", content: "content1"}, {tab:"sec2", content: "content2"}];
  const {currentItem} = useTabs(0, content);  
  //content.map((section, idx) => ( <button onclick={() => changeItem(idx)}></button>))
  
  //useTitle
  // const titleUpdater = useTitle("Loading...");
  // setTimeout(()=> titleUpdater("Home"));

  //useRef  == getElementById();
  const ref = useRef();
  setTimeout(()=> console.log(ref.current), 1000);
  //useClick
  const button = useClick(() => console.log("buttonClick"));

  return(
    <View>
      <Text ref={ref}>{item}</Text>
      <Button ref={button} onPress = {incrementItem} title="increment"></Button>
      <TouchableOpacity 
        style = {styles.decrement} onPress = {decrementItem}>
        <Text style={styles.text}>decrement</Text>  
      </TouchableOpacity> 
      <Loading/>
    </View>
  );
}

  const styles = StyleSheet.create({
    decrement:{
      backgroundColor: "#1E6738",
    },
    text: {
      color: "grey"
    }
  });