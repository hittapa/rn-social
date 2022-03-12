import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './HomeScreenStyles';
import AuthLogic from '../../../Utils/AuthLogic';
import TextPopupModal from '../../../../components/Modals/TextPopupModal/TextPopupModal';
import PremiumPopupModal from '../../../../components/Modals/PremiumPopupModal/PremiumPopupModal';
import StarLikePopupModal from '../../../../components/Modals/StarLikePopupModal/StarLikePopupModal';
import StarSmallPopupModal from '../../../../components/Modals/StarSmallPopupModal/StarSmallPopupModal';
import SkipWaitPopupModal from '../../../../components/Modals/SkipWaitPopupModal/SkipWaitPopupModal';
import StarAccountPopupModal from '../../../../components/Modals/StarAccountPopupModal/StarAccountPopupModal';
import VideoPopupModal from '../../../../components/Modals/VideoPopup/VideoPopupModal';

const Popup = ({ navigation, starLike, videoPopup, premiumPopup, instagramPopup, requestUpgradePopup, skipWait, messageUsPopup, RequestPopup }) => {

    const [popupVisible, setPopupVisible] = React.useState(
        {
            welcomePopup: false,
            howItWorkPopup: false,
            howItWorkPopup2: false,
            starWelcomePopup: false,
            PremiumPopup: false,
            starLikePopup: false,
            starSmallPopup: false,
            starSmallPopup1: false,
            skipWaitPopup: false,
            skipWaitPopup1: false,
            starAccountPopup: false,
            starAccountPopup1: false,
            starAccountPopup2: false,
            starAccountPopup3: false,
            videoPopup: false
        })

    useEffect(() => {
        if (videoPopup && videoPopup.visible === true) {
            setPopupVisible({ ...popupVisible, videoPopup: videoPopup ? videoPopup.visible : false })
        }
        if (instagramPopup && instagramPopup.visible === true) {
            setPopupVisible({ ...popupVisible, starAccountPopup: instagramPopup ? instagramPopup.visible : false })
        }
        if (starLike && starLike.visible === true) {
            setPopupVisible({ ...popupVisible, starLikePopup: starLike ? starLike.visible : false })
        }
        if (premiumPopup && premiumPopup.visible === true) {
            setPopupVisible({ ...popupVisible, PremiumPopup: premiumPopup ? premiumPopup.visible : false })
        }
        if (requestUpgradePopup && requestUpgradePopup.visible === true) {
            setPopupVisible({ ...popupVisible, starAccountPopup1: requestUpgradePopup ? requestUpgradePopup.visible : false })
        }
        if (skipWait && skipWait.visible === true) {
            setPopupVisible({ ...popupVisible, skipWaitPopup: skipWait ? skipWait.visible : false })
        }
        if (messageUsPopup && messageUsPopup.visible === true) {
            setPopupVisible({ ...popupVisible, starAccountPopup2: messageUsPopup ? messageUsPopup.visible : false })
        }
        if (RequestPopup && RequestPopup.visible === true) {
            setPopupVisible({ ...popupVisible, starAccountPopup3: RequestPopup ? RequestPopup.visible : false })
        }
    }, [videoPopup, instagramPopup, starLike, premiumPopup, requestUpgradePopup, messageUsPopup, RequestPopup, skipWait])

    useEffect(async () => {
        let screen = await AuthLogic.GetUserFlowScreen();
        if (screen !== null && screen !== undefined && screen !== "") {
            setPopupVisible({ ...popupVisible, welcomePopup: true })
        }
        await AuthLogic.RemoveUserFlowScreen();
    }, []);

    const welcomePopup = {
        text1: {
            text: "Welcome To",
            style: { fontSize: 40 }
        },
        text2: {
            text: "STARSTUDED",
            style: { color: "#4df8ff", fontSize: 40 }
        },
    }
    const howItWorkPopup = {
        text1: {
            text: "How It Works",
            style: { fontSize: 40 }
        },
        text2: {
            text: "You see a new",
            style: { fontSize: 30 }
        },
        text3: {
            text: "verified celebrity figure",
            style: { fontSize: 30 }
        },
        text4: {
            text: "every 24 hours",
            style: { fontSize: 30 }
        },
    }
    const howItWorkPopup2 = {
        text1: {
            text: "How It Works",
            style: { fontSize: 40 }
        },
        text2: {
            text: "If you like them, swipe right.",
            style: { fontSize: 25 }
        },
        text3: {
            text: " If they swipe right too,",
            style: { fontSize: 25 }
        },
        text4: {
            text: "it’s a match!",
            style: { fontSize: 25 }
        },
    }
    const starWelcomePopup = {
        logo: "black",
        modalStyle: {
            gradientColors: ["#E6C300", "#FFFFFF", "#FFFFFF"]
        },
        text2: {
            text: "Welcome To Your",
            style: { fontSize: 30, color: "black" }
        },
        text3: {
            text: "Star Account",
            style: { fontSize: 30, color: "black" }
        },
        buttonStyle: {
            color: "#E6C300"
        }
    }
    const PremiumPopup = {
        text1: {
            text: "Get 3 Openings Daily",
            style: { fontSize: 25, fontWeight: "500", color: "black" }
        },
        text2: {
            text: "Unlimited Rewind & More",
            style: { fontSize: 15, color: "black" }
        },
        buttonStyle: {
            text: "Upgrade",
            color: "#E3004F"
        },
        plan1: {
            tag: "Best Value",
            period: "12 months",
            price: "$9.99/mo",
        },
        plan2: {
            tag: "Most Popular",
            period: "6 months",
            price: "$14.50/mo",
        },
        plan3: {
            period: "1 month",
            price: "$24.99/mo",
        }
    }
    const starLikePopup = {
        text1: {
            text: "Be seen first with a Star Like",
            style: { fontSize: 22, fontWeight: "500", color: "black" }
        },
        text2: {
            text: "Much more likely to match than a normal like",
            style: { fontSize: 14, color: "black" }
        },
        buttonStyle: {
            text: "Get Star Likes",
            color: "#E3004F"
        },
        plan1: {
            stars: 1,
            price: "$6.99/ea",
        },
        plan2: {
            stars: 5,
            tag: 'Save 47%',
            price: "$3.50/ea",
        },
        plan3: {
            stars: 10,
            tag: 'Save 57%',
            price: "$3.00/ea",
        }
    }
    const starSmallPopup = {
        text1: {
            text: "STAR LIKES",
            style: { fontSize: 30, color: "black", fontStyle: 'italic' }
        },
        text2: {
            text: "Star Likes Added",
            style: { fontSize: 25, color: "black" }
        },
        buttonStyle: {
            color: '#E3004F',
        }
    }
    const starSmallPopup1 = {
        logoPink: true,
        text1: {
            text: "STELLAR",
            style: { fontSize: 30, color: "white", fontStyle: 'italic' }
        },
        text2: {
            text: "Welcome To Stellar",
            style: { fontSize: 25, color: "black" }
        },
        buttonStyle: {
            color: '#E3004F',
            text: 'Begin'
        }
    }

    const skipWaitPopup = {
        text1: {
            text: 'Skip the Wait',
            style: { color: 'white', fontSize: 35, marginTop: 35 },
        },
        button1: {
            text: 'Invite a Friend',
            textStyle: { fontSize: 18, fontWeight: 'bold', color: 'black' },
            buttonStyle: { width: 236, height: 60, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#4DF8FF' }
        }
    }
    const skipWaitPopup1 = {
        text1: {
            text: 'Link To Share',
            style: { color: 'white', fontSize: 35, marginTop: 35 },
        },
        button1: {
            disable: true,
            text: 'https://app.starstuded.com/jessica112',
            textStyle: { fontSize: 12, fontWeight: 'bold', color: '#000000' },
            buttonStyle: { width: 337, height: 60, paddingLeft: 24, justifyContent: 'center', borderRadius: 50, backgroundColor: '#DCF6F7' }
        },
        button2: {
            text: 'Copy Link',
            textStyle: { fontSize: 18, fontWeight: 'bold', color: 'black' },
            buttonStyle: { width: 152, height: 41, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#4DF8FF' }
        },
        button3: {
            text: 'Continue',
            style: { color: 'white', marginTop: 43, fontSize: 22 }
        }
    }
    const starAccountPopup = {
        text1: {
            text: 'Add your Instagram',
            style: { color: 'white', fontSize: 33, marginTop: 35 },
        },
        input: true,
        button: {
            text: 'Add',
            textStyle: { fontSize: 23, fontWeight: 'bold', color: 'white' },
            buttonStyle: { width: 277, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#E3004F' }
        }
    }
    const starAccountPopup1 = {
        text1: {
            text: 'Get a Star Account',
            style: { color: 'white', fontSize: 33, marginTop: 35 },
        },
        text2: {
            text: 'Must be Verified on IG',
            style: { color: 'white', fontSize: 23, marginTop: 45 },
        },
        button: {
            text: 'Request Star Account',
            textStyle: { fontSize: 23, fontWeight: 'bold', color: 'white' },
            buttonStyle: { width: 292, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#4DF8FF' }
        }
    }
    const starAccountPopup2 = {
        text1: {
            text: 'Message Us',
            style: { color: 'white', fontSize: 33, marginTop: 35 },
        },
        text2: {
            text: 'Send us a DM saying "verify" to @ssdating from your verified instagram',
            style: { color: 'white', fontSize: 18, width: 350, marginTop: 60, textAlign: 'center' },
        },
        button: {
            text: 'Done',
            textStyle: { fontSize: 23, fontWeight: 'bold', color: 'white' },
            buttonStyle: { width: 250, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#4DF8FF' }
        }
    }
    const starAccountPopup3 = {
        text1: {
            text: 'Request Submitted!',
            style: { color: 'white', fontSize: 33, marginTop: 35 },
        },
        text2: {
            text: 'Reviews are usually done in less than 5 business days',
            style: { color: 'white', fontSize: 25, width: 400, marginTop: 60, textAlign: 'center' },
        }
    }

    return (
        <>
            <View style={styles.centeredView}>
                <TextPopupModal navigation={navigation} visible={popupVisible.welcomePopup} handleContinue={() => setPopupVisible({ ...popupVisible, welcomePopup: false, howItWorkPopup: true })} popupDetail={welcomePopup} />
                <TextPopupModal navigation={navigation} visible={popupVisible.howItWorkPopup} handleContinue={() => setPopupVisible({ ...popupVisible, howItWorkPopup: false, howItWorkPopup2: true })} popupDetail={howItWorkPopup} />
                <TextPopupModal navigation={navigation} visible={popupVisible.howItWorkPopup2} handleContinue={() => setPopupVisible({ ...popupVisible, howItWorkPopup2: false })} popupDetail={howItWorkPopup2} />
                <TextPopupModal navigation={navigation} visible={popupVisible.starWelcomePopup} handleContinue={() => setPopupVisible({ ...popupVisible, starWelcomePopup: false })} popupDetail={starWelcomePopup} />
                <StarSmallPopupModal navigation={navigation} visible={popupVisible.starSmallPopup} handleContinue={() => setPopupVisible({ ...popupVisible, starSmallPopup: false })} popupDetail={starSmallPopup} />
                <StarSmallPopupModal navigation={navigation} visible={popupVisible.starSmallPopup1} handleContinue={() => setPopupVisible({ ...popupVisible, starSmallPopup1: false })} popupDetail={starSmallPopup1} />
                <SkipWaitPopupModal
                    navigation={navigation}
                    visible={popupVisible.skipWaitPopup1}
                    handleClose={() => setPopupVisible({ ...popupVisible, skipWaitPopup1: false })}
                    handleContinue={() => setPopupVisible({ ...popupVisible, skipWaitPopup1: false })}
                    popupDetail={skipWaitPopup1}
                />
                <SkipWaitPopupModal
                    navigation={navigation}
                    visible={popupVisible.skipWaitPopup}
                    handleClose={() => {
                        skipWait?.handleClose()
                        setPopupVisible({ ...popupVisible, skipWaitPopup: false })
                    }}
                    handleContinue={() => {
                        skipWait?.handleClose()
                        setPopupVisible({ ...popupVisible, skipWaitPopup: false, skipWaitPopup1: true })
                    }}
                    popupDetail={skipWaitPopup}
                />
                <StarAccountPopupModal
                    navigation={navigation}
                    visible={popupVisible.starAccountPopup}
                    handleClose={() => {
                        instagramPopup?.handleClose()
                        setPopupVisible({ ...popupVisible, starAccountPopup: false })
                    }}
                    handleContinue={async (text) => {
                        setPopupVisible({ ...popupVisible, starAccountPopup: false })
                        await instagramPopup?.handleAdd(text)
                    }}
                    popupDetail={starAccountPopup}
                />
                <StarAccountPopupModal
                    navigation={navigation}
                    visible={popupVisible.starAccountPopup1}
                    handleClose={() => {
                        requestUpgradePopup?.handleClose()
                        setPopupVisible({ ...popupVisible, starAccountPopup1: false })
                    }}
                    handleContinue={async () => {
                        setPopupVisible({ ...popupVisible, starAccountPopup1: false })
                        await requestUpgradePopup?.handleRequestUpgrade()
                    }}
                    popupDetail={starAccountPopup1}
                />
                <StarAccountPopupModal
                    navigation={navigation}
                    visible={popupVisible.starAccountPopup2}
                    handleClose={() => {
                        messageUsPopup?.handleClose()
                        setPopupVisible({ ...popupVisible, starAccountPopup2: false })
                    }}
                    handleContinue={() => {
                        setPopupVisible({ ...popupVisible, starAccountPopup2: false })
                        messageUsPopup?.handleMessageUsPopup()
                    }}
                    popupDetail={starAccountPopup2}
                />
                <StarAccountPopupModal
                    navigation={navigation}
                    visible={popupVisible.starAccountPopup3}
                    handleClose={() => {
                        RequestPopup?.handleClose()
                        setPopupVisible({ ...popupVisible, starAccountPopup3: false })
                    }}
                    popupDetail={starAccountPopup3}
                />
                <PremiumPopupModal
                    navigation={navigation}
                    visible={popupVisible.PremiumPopup}
                    handleContinue={async () => {
                        await premiumPopup?.handleClose()
                        setPopupVisible({ ...popupVisible, PremiumPopup: false })
                    }}
                    popupDetail={PremiumPopup}
                />
                <StarLikePopupModal
                    navigation={navigation}
                    visible={popupVisible.starLikePopup}
                    handleContinue={() => {
                        starLike?.handleClose()
                        setPopupVisible({ ...popupVisible, starLikePopup: false })
                    }}
                    popupDetail={starLikePopup}
                />
                <VideoPopupModal
                    navigation={navigation}
                    visible={popupVisible.videoPopup}
                    handleContinue={() => {
                        videoPopup?.handleContinue()
                        setPopupVisible({ ...popupVisible, videoPopup: false })
                    }}
                    popupDetail={videoPopup ? videoPopup.url : ''}
                />
            </View>
        </>

    );
};

export default Popup;