import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, Pressable} from 'react-native';

type FrogProps = {
  name: string;
  color?: string;
};

const Frog = (props: FrogProps) => {
  const frogStylesArray = StyleSheet.compose(styles.frog, {backgroundColor: props.color,});
  return (
    <View style={frogStylesArray}> <Text> {props.name}</Text> </View>
  );
};

type RoundButtonProps = {
  exNumberButton: number;
  onPressHandler: Function;
}
const RoundButton = (props: RoundButtonProps) => {
  const buttonTitle = '№'+ props.exNumberButton;
  return (
        <Pressable onPress={() => props.onPressHandler(props.exNumberButton)} style={styles.roundButton}>
          <Text>{buttonTitle}</Text>
        </Pressable>
  );
};

const Lake = () => {
  const [exNumber, setExNumber] = useState(0);

  let lakeStylesArray: any;
  switch (exNumber) {
    case 0:   lakeStylesArray = styles.lake;      break;
    case 1:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex1);      break;
    case 2:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex2);      break;
    case 3:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex3);      break;
    case 4:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex4);      break;
    case 5:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex5);      break;
    case 6:   lakeStylesArray = StyleSheet.compose(styles.lake, styles.ex6);      break;
  }

  return (
    <View style={styles.main}>
      <View style={lakeStylesArray}>
        <Frog name="1"/>
        <Frog name="2" color='yellow'/>
        <Frog name="3" color='red'/>

      </View>
      <View style={styles.buttons}>
        <RoundButton onPressHandler={setExNumber} exNumberButton={1} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={2} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={3} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={4} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={5} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={6} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={7} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={8} />
        <RoundButton onPressHandler={setExNumber} exNumberButton={9} />
      </View>
      <Text>Номер текущей задачи = {exNumber}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%'
  },
  lake: {
     backgroundColor: 'aquamarine',
     height: '70%',
     flexDirection: 'row',
  },
  buttons: {
    height: '25%',
    backgroundColor: 'gray',
    flexWrap: 'wrap',
    //flexDirection: 'row',
    justifyContent: 'space-around'
  },
  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frog: {
     backgroundColor: 'green',
     borderColor: 'black',
     borderWidth:1,
     borderRadius: 6,
     width: 50,
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
  },
  ex1: {
    justifyContent: 'flex-end',
  },
  ex2: {
    justifyContent: 'center',
  },
  ex3: {
    justifyContent: 'space-around',
  },
  ex4: {
    justifyContent: 'space-between',
  },
  ex5: {
    alignItems: 'flex-end',
  },
  ex6: {
     alignItems: 'center',
     justifyContent: 'center',
  },
});

export default Lake;