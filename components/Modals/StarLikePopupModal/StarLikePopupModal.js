import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './StarLikePopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../ContinueButton/ContinueButton'

const StarLikePopupModal = ({ navigation, visible, popupDetail, handleContinue }) => {

    const [selectedPlan, setSelectedPlan] = React.useState(null);

    const handlePlans = (value) => {
        setSelectedPlan(value);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <LinearGradient
                    colors={['#e3004f', '#ffffff', '#ffffff']}
                    locations={[0, 0.30, 1]}
                    style={{ borderRadius: 50 }}
                >
                    <View style={styles.modalView}>
                        <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={require('../../../assets/starBlack.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={
                            [styles.modalText, popupDetail && popupDetail.text1 ? popupDetail.text1.style : ""]}
                        >
                            {popupDetail && popupDetail.text1 ? popupDetail.text1.text : ""}
                        </Text>
                        <Text style={
                            [styles.modalText, { marginTop: 10 }, popupDetail && popupDetail.text2 ? popupDetail.text2.style : ""]}
                        >
                            {popupDetail && popupDetail.text2 ? popupDetail.text2.text : ""}
                        </Text>
                        <View style={styles.plans}>
                            <TouchableOpacity onPress={() => handlePlans(1)} style={styles.plan}>
                                <Text style={[styles.starText]} >
                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.stars : ""}
                                </Text>
                                <Text style={[styles.starText2]}   >
                                    Stars
                                </Text>
                                {
                                    selectedPlan === 1 ?
                                        popupDetail && popupDetail.plan1 && popupDetail.plan1.tag ?
                                            <View style={styles.selectedPlan}>
                                                <Text style={[styles.tagText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.price : ""}
                                                </Text>
                                            </View>
                                            :
                                            <View style={styles.selectedPlan}>
                                                <Text style={[{ fontSize: 20 }]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.price : ""}
                                                </Text>
                                            </View>
                                        : popupDetail && popupDetail.plan1 && popupDetail.plan1.price && popupDetail.plan1.tag ?
                                            <>
                                                <Text style={[styles.tagText]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.price : ""}
                                                </Text>
                                            </> : <>
                                                <Text style={{ fontSize: 20 }} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.price : ""}
                                                </Text>
                                            </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePlans(2)} style={[styles.plan, { borderRightWidth: 1, borderLeftWidth: 1, }]}>
                                <Text style={[styles.starText]} >
                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.stars : ""}
                                </Text>
                                <Text style={[styles.starText2]}   >
                                    Stars
                                </Text>
                                {
                                    selectedPlan === 2 ?
                                        popupDetail && popupDetail.plan2 && popupDetail.plan2.tag ?
                                            <View style={styles.selectedPlan}>
                                                <Text style={[styles.tagText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.price : ""}
                                                </Text>
                                            </View>
                                            :
                                            <View style={styles.selectedPlan}>
                                                <Text style={[{ fontSize: 20 }]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.price : ""}
                                                </Text>
                                            </View>
                                        : popupDetail && popupDetail.plan2 && popupDetail.plan2.price && popupDetail.plan2.tag ?
                                            <>
                                                <Text style={[styles.tagText]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.price : ""}
                                                </Text>
                                            </> : <>
                                                <Text style={{ fontSize: 20 }} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.price : ""}
                                                </Text>
                                            </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePlans(3)} style={styles.plan}>
                                <Text style={[styles.starText]} >
                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.stars : ""}
                                </Text>
                                <Text style={[styles.starText2]}   >
                                    Stars
                                </Text>
                                {
                                    selectedPlan === 3 ?
                                        popupDetail && popupDetail.plan3 && popupDetail.plan3.tag ?
                                            <View style={styles.selectedPlan}>
                                                <Text style={[styles.tagText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.price : ""}
                                                </Text>
                                            </View>
                                            :
                                            <View style={styles.selectedPlan}>
                                                <Text style={[{ fontSize: 20 }]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText, { color: 'white', opacity: 1 }]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.price : ""}
                                                </Text>
                                            </View>
                                        : popupDetail && popupDetail.plan3 && popupDetail.plan3.price && popupDetail.plan3.tag ?
                                            <>
                                                <Text style={[styles.tagText]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.price : ""}
                                                </Text>
                                            </> : <>
                                                <Text style={{ fontSize: 20 }} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.tag : ""}
                                                </Text>
                                                <Text style={[styles.priceText]} >
                                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.price : ""}
                                                </Text>
                                            </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.popupButton}>
                            <ContinueButton
                                handleContinue={() => {
                                    handleContinue()
                                    navigation.navigate('PaymentScreen')
                                }}
                                buttonText={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.text ? popupDetail.buttonStyle.text : null}
                                style={{ width: 250 }}
                                buttonColor={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.color ? popupDetail.buttonStyle.color : null}
                            />
                            <Text onPress={handleContinue} style={{ top: 30, fontSize: 18 }}>No Thanks</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal >
    );
};

export default StarLikePopupModal;
