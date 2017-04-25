import nukeSvg from './icons/nuke.svg';
import fireSvg from './icons/fire.svg';
import elecSvg from './icons/elec.svg';
import blessSvg from './icons/bless.svg';
import curseSvg from './icons/curse.svg';
import iceSvg from './icons/ice.svg';
import windSvg from './icons/wind.svg';
import psySvg from './icons/psy.svg';
import gunSvg from './icons/gun.svg';
import physSvg from './icons/phys.svg';
import wkSvg from './icons/Wk.svg';
import strSvg from './icons/Str.svg';
import drSvg from './icons/Dr.svg';
import nullSvg from './icons/Null.svg';
import rplSvg from './icons/Rpl.svg';
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
        <img style={{ width: '25px' }} id={id} src={icon} />
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={id} toggle={this.toggle}>
          {tipText}
        </Tooltip>
      </div>
    );
  }
}

const icons = {
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

const ResistanceCard = ({ type, value }) => {
  let height = '40px';
  let bottomIcon = undefined
  console.log(value);
  if (icons[value]) {
    height = '70px';
    bottomIcon = (
      <img style={{ transform: 'rotate(-5deg)', marginLeft: '5%', marginTop: '-100%', width: '120%'}} src={icons[value].icon} />
    )
  }
  return (
    <div style={{ transform: 'rotate(5deg)', height, marginLeft: '10px', boxShadow: '0px 0px 0px 5px rgba(0,0,0,1)', width: '50px', background: '#252525', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <img style={{ transform: 'rotate(-5deg)', width: '120%', height: '40px',  marginLeft: '-5%', overflow: 'hidden' }} src={icons[type].icon} />
      </div>
      {bottomIcon}
    </div>
  )
}

/*

const ResistanceCard = ({ type, value }) => {
  const resist = resistances[type];
  if (resist) {
    return <TooltipIcon icon={resist.icon} tipText={resist.text} />;
  } else {
    return <div>{type}</div>;
  }
}
*/

export default ResistanceCard;
