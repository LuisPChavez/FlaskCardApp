import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CardPrompt from './CardPrompt';
import ControlBar from './ControlBar';
import AnswerOptions from './AnswerOptions';

class BaseCard extends Component {
  constructor(props){
    super(props)
  }
  
  render(props) {
    return (
      <ScrollView contentContainerStyle={styles.LayoutStyle}>
          <CardPrompt src={'https://s-media-cache-ak0.pinimg.com/originals/66/86/89/668689018f6c7a6ab83944200b4fbdc6.jpg'} 
          /> 
          <ControlBar onPress={this.props.onPress} />
          <AnswerOptions />
      </ScrollView>  
    );
  }
}

const styles = {
  LayoutStyle: {
    backgroundColor: '#355095',
    flex: 1
  }
};


export default BaseCard;
