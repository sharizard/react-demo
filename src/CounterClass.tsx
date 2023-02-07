import React from "react";

type State = {
  count: number
}

class CounterClass extends React.Component {
  state: State = {
    count: 0,
  };

  increase = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  componentDidMount(): void {
      console.log("Class Mounted")
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      console.log("Class updated")
  }

  render() {
    return (
      <>
        <h1>Counter class</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>+</button>
      </>
    );
  }
}
export { CounterClass };
