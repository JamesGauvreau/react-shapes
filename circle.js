console.log(`connected`)

// const App = () => {
//     const circleStyle = {
//       color: "white",
//       backgroundColor: "red",
//       height: "100px",
//       width: "100px",
//       borderRadius: "50%",
//       margin: "1%",
//     };
//     const textStyle = {
//         position: "absolute",
//         top: "10px",
//         left: "30px",
//     }
//     return (
//       <section style={circleStyle}>
//         <section style={textStyle}>
//             <h1>Circle {number}</h1>
//             <p>lor. ips.</p>
//         </section>
//       </section>
//     );
//   }

const App = () => {
    return (
      <section style={circleStyle}>
            <h1 style={textStyle1}>Circle {number}</h1>;
            <h1 style={textStyle2}>Circle {number}</h1>;
            <h1 style={textStyle3}>Circle {number2}</h1>;
      </section>
    );
  }

const number = 9;
const number2 = 9;

const circleStyle = {
    color: "white",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    margin: "1%",
  };

const textStyle1 = {
    position: "absolute",
    top: "10px",
    left: "5%",
    backgroundColor: "red",
    color: "white",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    margin: "1%",
}

const textStyle2 = {
    position: "absolute",
    top: "100px",
    left: "200px",
    backgroundColor: "green",
    position: "absolute",
    top: "10px",
    left: "20%",
    color: "white",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    margin: "1%",
}

const textStyle3 = {
    position: "absolute",
    top: "100px",
    left: "200px",
    backgroundColor: "yellow",
    position: "absolute",
    top: "10px",
    left: "35%",
    color: "white",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    margin: "1%",
}

const array1 = [1, 2, 3];

array1.forEach(element => console.log(element));
// array1[1].console.log()
const arrayMap = array1.map(x => x * 5);
console.log(arrayMap[0]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />); 