import React, { Component, SFC } from 'react';

// 无状态组件
// const Button: React.SFC = () => {
//   return (<div>+</div>)
// }


// 传递props
// const Button: React.SFC<IprogressProps> = (props: IprogressProps) => {
//   const { color, background} = props;
//   return (<div>{color} {background}</div>)
// }


// 有状态组件
class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  setName = () => {
    this.setState({
      name: 'lucy',
    })
  }

  render() {
    return (
      <div>button</div>
    )
  }
}

export default Button;