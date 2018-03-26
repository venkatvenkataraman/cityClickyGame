import React from "react";
import "./CityCard.css";

// By extending the React.Component class, CityCard inherits functionality from it
// class CityCard extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     display: false,
//     position: 0
//   };

//   // assignDisplay assigns a displayStatus to this.state
//   assignDisplay = (displayStatus) => {
//       // We always use the setState method to update a component's state
//       this.setState({ display: displayStatus});
//   };

//   // assignPosition assign a position to this.state
//   assignPosition = (locationOnPage) => {
//       // We always use the setState method to update a component's state
//       this.setState({ position: locationOnPage });
//   };

// // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card">
//         <div className="img-container" onClick={console.log("I have been clicked!")}>
//           {/* <div className="img-container" onClick={this.assignPosition this.assignDisplay}> */}
//           <img alt={this.props.name} src={this.props.image} />
//         </div>
//       </div>
//     );
//   } // render()
// } //class CityCard

// render() {
//   return (
//     <div className="panel panel-primary">
//       <div className="panel-heading">Click Counter!</div>
//       <div className="panel-body text-center">
//         <p>Click Count: {this.state.count}</p>
//         <button className="btn btn-primary" onClick={this.handleIncrement}>
//           Increment
//         </button>{" "}
//         <button className="btn btn-danger" onClick={this.handleDecrement}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
    
//CODE BELOW FROM FriendCard Example - changed const to class
const CityCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default CityCard;
