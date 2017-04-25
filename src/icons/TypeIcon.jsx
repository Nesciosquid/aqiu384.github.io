import nukeSvg from './nuke.svg';
import fireSvg from './fire.svg';
import elecSvg from './elec.svg';
import blessSvg from './bless.svg';
import curseSvg from './curse.svg';
import iceSvg from './ice.svg';
import windSvg from './wind.svg';
import psySvg from './psy.svg';
import gunSvg from './gun.svg';
import physSvg from './phys.svg';
import wkSvg from './Wk.svg';
import strSvg from './Str.svg';
import drSvg from './Dr.svg';
import nullSvg from './Null.svg';
import rplSvg from './Rpl.svg';
import React from 'react';
import { Tooltip } from 'reactstrap';

class TooltipIcon extends React.Component {
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
    const { tipText, icon } = this.props;
    const id=`${tipText}-icon-hover`
    return (
      <div>
        <img style={{ width: '50px' }} id={id} src={icon} />
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={id} toggle={this.toggle}>
          {tipText}
        </Tooltip>
      </div>
    );
  }
}

const resistances = {
  'phys': {
    icon: physSvg,
    text: "Physical",
  },
  'gun': {
    icon: gunSvg,
    text: "Gun",
  },
  'fire': {
    icon: fireSvg,
    text: "Fire",
  },
  'ice': {
    icon: iceSvg,
    text: "Ice",
  },
  'electric': {
    icon: elecSvg,
    text: "Electric",
  },
  'wind': {
    icon: windSvg,
    text: "Wind",
  },
  'psy': {
    icon: psySvg,
    text: "Psychic",
  },
  'nuclear': {
    icon: nukeSvg,
    text: 'Nuclear',
  },
  'bless': {
    icon: blessSvg,
    text: "Bless",
  },
  'curse': {
    icon: curseSvg,
    text: "Curse",
  },
  'wk': {
    icon: wkSvg,
    text: "Weak",
  },
  "rp": {
    icon: rplSvg,
    text: "Repel",
  },
  "rs": {
    icon: strSvg,
    text: "Strong",
  },
  "ab": {
    icon: drSvg,
    text: "Drain",
  },
  "nu": {
    icon: nullSvg,
    text: "Null",
  }
}

const TypeIcon = ({ type }) => {
  const resist = resistances[type];
  if (resist) {
    return <TooltipIcon icon={resist.icon} tipText={resist.text} />;
  } else {
    return <div>{type}</div>;
  }
}

export default TypeIcon;
