// TODO
// class GroceryList extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <ul>
//         <li>Milk</li>
//         <li>Rice</li>
//       </ul>
//     )
//   }
// }

var GroceryList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
     <h2>My Shopping List</h2>
     <GroceryList todos={['Milk', 'Water', 'Coke']} />
  </div>
);


// var Cucumber = () => (
//   <ul>
//     <li>Cucumber</li>
//   </ul>
// );

// var Kale = () => (
//   <ul>
//     <li>Kale</li>
//   </ul>
// );



// var list = new App();

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById("app"));