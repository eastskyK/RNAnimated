import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Alert,
  Platform,
  UIManager,
  PanResponder,
  InteractionManager,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default function PanresponderModal() {
  const [show, setShow] = useState(false);

  const inpterpolateAnim = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dy > 100) {
        hideModal();
      }
    },
  });

  const showModal = () => {
    setShow(true);
    Animated.timing(inpterpolateAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };
  const hideModal = () => {
    Animated.timing(inpterpolateAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setShow(false);
      }
    });
  };

  return (
    <View
      //   {...panResponder.panHandlers}
      style={{flex: 1}}>
      <View style={{marginTop: 100}}>
        <Button title="열려라" onPress={showModal} />
      </View>
      <>
        {/* menu background */}
        {show && (
          <TouchableWithoutFeedback onPress={hideModal}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#00000090',
                opacity: inpterpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            />
          </TouchableWithoutFeedback>
        )}

        {/* menu content */}
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            position: 'absolute',
            bottom: inpterpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-500, 0],
            }),
            backgroundColor: 'white',
            borderWidth: 1,
            width: '100%',
            //   height: 100,
            padding: 20,
            paddingBottom: 20 + getBottomSpace(),
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}>
          <ListItem onPress={hideModal} icon="pushpino" title="저장하기" />
          <ListItem onPress={hideModal} icon="hearto" title="좋아요" />
          <ListItem onPress={hideModal} icon="delete" title="삭제하기" />
          <ListItem onPress={hideModal} color="#999" icon="back" title="닫기" />
        </Animated.View>
      </>
    </View>
  );
}

function ListItem({color = '#333', icon, title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#f2f2f2',
          borderBottomWidth: 1,
          height: 60,
        }}>
        <Icon name={icon} size={20} color={'#333'} />
        <Text style={{color: color, fontSize: 15, marginLeft: 20}}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
