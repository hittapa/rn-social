import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
// import PopupModal from '../../../../components/Modal/Index';
import styles from './HomeScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import Swiper from 'react-native-deck-swiper';
import SwiperWithRenderItems from '../../../../components/SwiperScreen/SwiperWithRenderItems';
import Popup from './Popup';

const HomeScreen = ({ navigation }) => {
  const [cards] = React.useState([...range(1, 50)])
  const [setSwipedAllCards] = React.useState(false)
  const [cardIndex] = React.useState(0)

  function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i
    }
  }

  const renderCard = (card, index) => {
    return (

      <View style={styles.card}>
        <SwiperWithRenderItems />
      </View>
    )
  };

  const onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  const onSwipedAllCards = () => {
    setSwipedAllCards(true)
  };

  useEffect(async () => {
    await AuthLogic.RemoveUserFlowScreen();
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiper => {
          swiper = swiper
        }}
        backgroundColor='#262624'
        onSwipedLeft={() => onSwiped('left')}
        onSwipedRight={() => onSwiped('right')}
        onSwipedTop={() => onSwiped('top')}
        onSwipedBottom={() => onSwiped('bottom')}
        cards={cards}
        cardIndex={cardIndex}
        renderCard={renderCard}
        onSwipedAll={onSwipedAllCards}
        stackSize={4}
        stackSeparation={0}
        overlayLabels={{
          left: styles.dislike,
          right: styles.like,
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      >
      </Swiper>

      <View style={{ textAlign: "center" }}>
        <Text style={styles.title}>STARSTUDED</Text>
      </View>
      {/* Header-Icon*/}
      <View style={{ flex: 1, alignItems: 'flex-start', position: 'absolute', bottom: Platform.OS === 'ios' ? 40 : 20 }} >
        <View style={styles.firstIconRow}>
          <TouchableOpacity onPress={() => navigation.navigate("CelebrityScreen")}>
            <Image
              source={require('../../../../assets/swipe-star.png')}
              style={styles.images}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SawProfileScreen")}>
            <Text style={{ color: "white", backgroundColor: "#E3004F", borderRadius: 50, width: 20, position: "absolute", left: 20, bottom: 17, textAlign: "center" }}>{totalNotification ? totalNotification : 0}</Text>
            <Image
              source={require('../../../../assets/diamond.png')}
              style={{...styles.images, tintColor: '#c2cdd3'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MatchesChatScreen")}>
            <Image
              source={require('../../../../assets/chat.png')}
              style={styles.images}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
            <Image
              source={require('../../../../assets/greyUser.png')}
              style={styles.images}
            />
          </TouchableOpacity>
        </View>

      </View>

      {/* Bottom-Icon */}
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate("WaitScreen")}>
          <Image
            source={require('../../../../assets/close.png')}
            style={styles.close}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SpeedRoundScreen")}>
          <Image
            source={require('../../../../assets/right.png')}
            style={styles.right}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};



export default HomeScreen;
