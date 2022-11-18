import React from 'react';
import './UploadAudio.css';
import MicRecorder from 'mic-recorder-to-mp3';
import { link, useNavigate } from 'react-router-dom';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class UploadAudio extends React.Component {
  
    constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <br/>
          <audio src={this.state.blobURL} controls="controls" />
          <br/><div className="butto">
          <button onClick={this.start} disabled={this.state.isRecording} className="button">Record</button>
          <button onClick={this.stop} disabled={!this.state.isRecording} className="button">Stop</button>
        </div>
        
        </header>
      </div>
    );
  }
}

export default UploadAudio;