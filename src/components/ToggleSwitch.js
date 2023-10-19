import React from 'react';
import Switch from 'react-switch';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.defaultChecked || false,
    };
  }

  toggleChange = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="flex items-center mb-2.5">
        <label className="mr-2.5 flex-grow">{label}</label>
        <Switch
          checked={isChecked}
          onChange={this.toggleChange}
          onColor="#00D18A" // This is an example green color. Modify it to match your design.
          offColor="#D3D3D3" // Example gray color. Modify it to match your design.
          height={24} // Adjust these values to match your design.
          width={48}
          handleDiameter={22}
        />
      </div>
    );
  }
}

export default ToggleSwitch;
