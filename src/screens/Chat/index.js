import React, {Component, Fragment} from 'react';
import {Text, View, Image} from 'react-native';
import {GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import styles from './styles';
export default class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      userId: 1,
    };
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'hi there!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
        },
        {
          _id: 2,
          text: 'hello there!',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  onQuickReply = message => {
    alert(message[0].title);
  };

  renderSendButton = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          right: 15,
          padding: 5,
          backgroundColor: '#fff',
          borderRadius: 25,
          height: 50,
          width: 50,
          bottom: 2,
        }}>
        <Image
          source={require('../../Assets/send.png')}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
          }}
        />
      </Send>
    );
  };

  render() {
    return (
      <Fragment>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            FunChat
          </Text>
        </View> */}
        <GiftedChat
          alwaysShowSend
          renderAvatarOnTop
          //   loadEarlier
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onQuickReply={messages => this.onQuickReply(messages)}
          textInputStyle={styles.textInputStyle}
          renderSend={this.renderSendButton}
          renderInputToolbar={props => {
            return (
              <InputToolbar
                {...props}
                primaryStyle={styles.inputToolbarPrimaryStyle}
                containerStyle={styles.inputToolbarContainerStyle}
                multiline={false}
              />
            );
          }}
          listViewProps={
            (style = {
              backgroundColor: '#050A27',
            })
          }
          user={{
            _id: this.state.userId
          }}
        />
      </Fragment>
    );
  }
}
