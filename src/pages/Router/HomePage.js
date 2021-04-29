import React, { Component } from 'react';
import { useParams } from 'react-router';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
        <h3>HomePage</h3>
      </>
    );
  }
}

export default HomePage;
// function HomePage() {
//   console.log(useParams())
//   return (
//     <>
//       <h3>HomePage</h3>
//     </>
//   )
// }
// export default HomePage