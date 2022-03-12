import React, { Component } from "react";
import { Animated, View } from "react-native";

export default class Blink extends Component {
    constructor(props) {
        super(props);

        this.fadeFanimation = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.fadeFanimation, {
                    toValue: 1,
                    duration: this.props.duration,
                    useNativeDriver: true,
                }),
                Animated.timing(this.fadeFanimation, {
                    toValue: 0,
                    duration: this.props.duration,
                    useNativeDriver: true,
                })
            ])
        ).start()
    }


    render() {
        return (
            <View>
                <Animated.View style={{opacity: this.fadeFanimation}}>
                    {this.props.children}
                </Animated.View>
            </View>
        )
    }
}