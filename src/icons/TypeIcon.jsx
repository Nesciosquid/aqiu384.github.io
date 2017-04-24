import nukeSvg from './nuke.svg';
import React from 'react';
import { Tooltip } from 'reactstrap';

class TypeIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tooltipOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { type } = this.props;
    switch(type) {
      case ('nuke'):
        return (
          <div>
            <img id="nukeIcon" src={nukeSvg} />
            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="nukeIcon" toggle={this.toggle}>
              Nuclear
            </Tooltip>
          </div>
        );
      default:
        return <div>{type}</div>;
    }
  }
}

export default TypeIcon;
