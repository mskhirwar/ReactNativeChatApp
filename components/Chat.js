import React from 'react';

import {
    Text
} from 'react-native';


class Chat extends React.Component {

    static navigationOptions = {
        title: 'Chat'
    };

    render() {
        const {
            navigation
        } = this.props;

        const name = navigation.getParam('name');

        return (
            <Text>Hello {name}, Welcome to Chat</Text>
        );
    };
};

export default Chat
