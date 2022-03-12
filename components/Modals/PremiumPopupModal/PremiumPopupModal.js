import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PremiumPopupModalStyles';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import ContinueButton from '../../ContinueButton/ContinueButton'

const PremiumPopupModal = ({ visible, popupDetail, handleContinue }) => {

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
                <View style={{ backgroundColor: "white", borderRadius: 50, overflow: "hidden" }}>
                    <View style={styles.modalView}>
                        <Image style={{ width: "100%", height: "55%", position: "absolute" }} source={require('../../../assets/popupGradient.png')} />
                        <Text style={{ color: "white", fontSize: 30, fontStyle: "italic", top: 5 }}>STELLAR</Text>
                        <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            source={require('../../../assets/starPink.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={
                            [popupDetail && popupDetail.text1 ? popupDetail.text1.style : ""]}
                        >
                            {popupDetail && popupDetail.text1 ? popupDetail.text1.text : ""}
                        </Text>
                        <Text style={
                            [{ marginTop: 10 }, popupDetail && popupDetail.text2 ? popupDetail.text2.style : ""]}
                        >
                            {popupDetail && popupDetail.text2 ? popupDetail.text2.text : ""}
                        </Text>
                        <View style={styles.plans}>
                            <TouchableOpacity onPress={() => handlePlans(1)} style={selectedPlan === 1 ? styles.selectedPlan : styles.plan}>
                                {
                                    selectedPlan === 1 && popupDetail.plan1 && popupDetail.plan1.tag ?
                                        <Text style={[styles.planTag]}>
                                            {popupDetail && popupDetail.plan1 ? popupDetail.plan1.tag : ""}
                                        </Text> : null
                                }
                                <Text style={[selectedPlan === 1 ? styles.selectedText : "", styles.periodText]} >
                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.period.split(" ")[0] : ""}
                                </Text>
                                <Text style={[selectedPlan === 1 ? styles.selectedText : "", styles.periodText2]}   >
                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.period.split(" ")[1] : ""}
                                </Text>
                                <Text style={[selectedPlan === 1 ? styles.selectedText : "", styles.priceText]} >
                                    {popupDetail && popupDetail.plan1 ? popupDetail.plan1.price : ""}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePlans(2)} style={selectedPlan === 2 ? styles.selectedPlan : styles.plan}>
                                {
                                    selectedPlan === 2 && popupDetail.plan2 && popupDetail.plan2.tag ?
                                        <Text style={[styles.planTag]}>
                                            {popupDetail && popupDetail.plan2 ? popupDetail.plan2.tag : ""}
                                        </Text> : null
                                }
                                <Text style={[selectedPlan === 2 ? styles.selectedText : "", styles.periodText]} >
                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.period.split(" ")[0] : ""}
                                </Text>
                                <Text style={[selectedPlan === 2 ? styles.selectedText : "", styles.periodText2]}   >
                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.period.split(" ")[1] : ""}
                                </Text>
                                <Text style={[selectedPlan === 2 ? styles.selectedText : "", styles.priceText]} >
                                    {popupDetail && popupDetail.plan2 ? popupDetail.plan2.price : ""}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePlans(3)} style={[selectedPlan === 3 ? [styles.selectedPlan, { borderRightWidth: 2 }] : [styles.plan, { borderRightWidth: 2 }]]}>
                                {
                                    selectedPlan === 3 && popupDetail.plan3 && popupDetail.plan3.tag ?
                                        <Text style={[styles.planTag]}>
                                            {popupDetail && popupDetail.plan3 ? popupDetail.plan3.tag : ""}
                                        </Text> : null
                                }
                                <Text style={[selectedPlan === 3 ? styles.selectedText : "", styles.periodText]} >
                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.period.split(" ")[0] : ""}
                                </Text>
                                <Text style={[selectedPlan === 3 ? styles.selectedText : "", styles.periodText2]}   >
                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.period.split(" ")[1] : ""}
                                </Text>
                                <Text style={[selectedPlan === 3 ? styles.selectedText : "", styles.priceText]} >
                                    {popupDetail && popupDetail.plan3 ? popupDetail.plan3.price : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.popupButton}>
                            <ContinueButton
                                // handleContinue={handleContinue}
                                style={{ width: 250 }}
                                buttonText={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.text ? popupDetail.buttonStyle.text : null}
                                buttonColor={popupDetail && popupDetail.buttonStyle && popupDetail.buttonStyle.color ? popupDetail.buttonStyle.color : null}
                            />
                            <Text onPress={handleContinue} style={{ top: 30, fontSize: 18 }}>No Thanks</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default PremiumPopupModal;
