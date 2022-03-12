import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import ContinueButton from '../../../../components/ContinueButton/ContinueButton';
import AuthService from '../../../Services/API/AuthService';
import styles from './QuestionScreenStyles';
import { useToast } from "react-native-toast-notifications";

const QuestionScreen = ({ navigation, route }) => {

    const { initialMinutes, initialSeconds, retest, questionArray, likeId } = route.params
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [questions, setQuestions] = useState(['Ideal Saturday', 'I’m the type of texter who', 'Favorite astrology sign'])
    const [answers, setAnswers] = useState({ answer1: { id: '', answer: '' }, answer2: { id: '', answer: '' }, answer3: { id: '', answer: '' } });
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    useEffect(() => {
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        setQuestions(questionArray)
    }, [retest]);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    navigation.navigate('RoundStatusScreen', { complete: false, likeId })
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);

    const handleInput = (text) => {
        if (currentQuestion === 1) {
            setAnswers({ ...answers, answer1: { id: questionArray[0].id, answer: text } })
        } else if (currentQuestion === 2) {
            setAnswers({ ...answers, answer2: { id: questionArray[1].id, answer: text } })
        } else if (currentQuestion === 3) {
            setAnswers({ ...answers, answer3: { id: questionArray[2].id, answer: text } })
        }
    }

    const handleContinue = async () => {
        if (currentQuestion === 1) {
            setCurrentQuestion(2)
        } else if (currentQuestion === 2) {
            setCurrentQuestion(3)
        } else if (currentQuestion === 3) {
            setLoading(true)
            await AuthService.SpeedRoundSave(20406, answers)
                .then(async (response) => {
                    if (response.status_code === 200) {
                        setLoading(false)
                        toast.show(response.message, {
                            type: "success",
                            duration: 4000,
                            placement: 'top'
                        });
                        navigation.navigate('RoundStatusScreen', { complete: true })
                    } else {
                        setLoading(false)
                        toast.show(response.message, {
                            type: "danger",
                            duration: 4000,
                            placement: 'top'
                        });
                    }
                })
                .catch((err) => {
                    if (err.message) {
                        toast.show(err.message, {
                            type: "danger",
                            duration: 3000,
                            placement: 'top'
                        });
                    } else {
                        toast.show("Something went wrong, Please try again.", {
                            type: "danger",
                            duration: 3000,
                            placement: 'top'
                        });
                    }
                })
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <Image style={styles.stopWatch} source={require('../../../../assets/stopwatch.png')} />
                <View>
                    {minutes === 0 && seconds === 0
                        ? <Text style={styles.timer}></Text>
                        : <Text style={styles.timer}> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
                    }
                </View>
                <Text style={styles.question}>{currentQuestion === 1 ? questions[0].question : currentQuestion === 2 ? questions[1].question : currentQuestion === 3 ? questions[2].question : ''}</Text>
                <View style={{ flex: 3.5, bottom: 70 }}>
                    <TextInput
                        defaultValue={currentQuestion === 1 ? answers.answer1.answer : currentQuestion === 2 ? answers.answer2.answer : currentQuestion === 3 ? answers.answer3.answer : ''}
                        style={styles.questionInput}
                        onChangeText={(text) => handleInput(text)}
                    />
                    <ContinueButton
                        loading={loading}
                        handleContinue={() => handleContinue()}
                        buttonText={currentQuestion === 3 ? 'Submit' : 'Next'}
                        style={{ width: 200, marginTop: 20 }}
                    />
                </View>
                <View style={styles.progressBar}>
                    <View style={minutes === 0 && seconds === 0 ? { marginTop: 215 } : { marginTop: 120 }}>
                        <View style={styles.progress1} >
                            <View style={[styles.progress2, currentQuestion === 1 ? { width: 0 } : currentQuestion === 2 ? { width: 101 } : currentQuestion === 3 ? { width: 158 } : '']} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default QuestionScreen;