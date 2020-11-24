import React, {
  Component
} from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './Profile.css';

export default class Profile extends Component {
  render() {
    console.log('Profile component loaded'); // <========================================
    return (
      <div className="profile">
        <LeftSide {...this.props} />
        <RightSide />
      </div>
    );
  }
}
