import React from 'react';
import { StyleSheet } from 'react-native';
import { Pagination } from 'react-native-swiper-flatlist';

const styles = StyleSheet.create({
    paginationContainer: {
        top: 110,
    },
    pagination: {
        borderRadius: 50,
        width: 65,
        height: 8,

    },
});

export const CardPagination = (props) => {
    return (
        <Pagination
            {...props}
            paginationStyle={styles.paginationContainer}
            paginationStyleItem={styles.pagination}
            paginationDefaultColor="#ffffff52"
            paginationActiveColor="white"
        />
    );
};
