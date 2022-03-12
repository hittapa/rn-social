import React, { useCallback, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Slider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Notch from './Notch';
import Label from './Label';

import styles from './styles';

const SliderComponent = ({ rangeDisabled, low, high, min, max, floatingLabel, step, updateSliderValue }) => {

  
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        updateSliderValue(low,high)
    }, []);

    return <View style={styles.root}>

        <Slider
            style={styles.slider}
            min={min}
            max={max}
            step={1}
            disableRange={rangeDisabled}
            floatingLabel={floatingLabel}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
        />
    </View>;
};

export default SliderComponent;