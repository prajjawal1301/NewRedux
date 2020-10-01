/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                {/* <Button title={'Increase'} onPress={() => this.props.increaseCounter()} /> */}
                <Text>{this.props.counter}</Text>
                {/* <Button title={'Decrease'} onPress={() => this.props.decreaseCounter()} /> */}
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>

        );
    }
}


const mapStateToProps = (state) => {
    const counter = state.counter;
    return { counter };
};

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),

    };

}
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

