import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'; // Ensure you're importing from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState('');
  const [char, setChar] = useState('x');
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const getBGClass = (value) => {
    if (value === 'x') return 'yellow';
    if (value === 'o') return 'orange';
    return '';
  };

  const checkWinner = () => {
    // Check rows for winner
    for (let i = 0; i < 3; i++) {
      if (matrix[i][0] && matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
        setWinner(matrix[i][0] + ' is the winner');
        return;
      }
    }

    // Check columns for winner
    for (let i = 0; i < 3; i++) {
      if (matrix[0][i] && matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
        setWinner(matrix[0][i] + ' is the winner');
        return;
      }
    }

    // Check diagonals for winner
    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
      setWinner(matrix[0][0] + ' is the winner');
      return;
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
      setWinner(matrix[0][2] + ' is the winner');
      return;
    }

    // Check for draw
    if (count === 9) {
      setWinner('The match has been drawn');
    }
  };

  const handleClick = (r, c) => {
    if (matrix[r][c]) return;
    const tmpMatrix = [...matrix];
    tmpMatrix[r][c] = char;
    setMatrix(tmpMatrix);
    setChar(char === 'x' ? 'o' : 'x');
    setCount(count + 1);
    checkWinner();
  };

  return (
    <div className="app">
      <div className='header aligncenter'>TicTacToe</div>
      <div className="aligncenter board">
        {!winner && <p>{char} turn now</p>}
        <div className="gameboard">
          {winner ||
            matrix.map((row, rIndex) => (
              <div className="row" key={rIndex}>
                {row.map((cell, cIndex) => (
                  <div
                    key={cIndex}
                    onClick={() => handleClick(rIndex, cIndex)}
                    className={`cell aligncenter ${getBGClass(matrix[rIndex][cIndex])}`}>
                    {matrix[rIndex][cIndex]}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <Button onClick={() => {
          setWinner('');
          setMatrix([['', '', ''], ['', '', ''], ['', '', '']]);
          setCount(1);
          setChar('x');
        }}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;



// import { useState } from 'react';
// import './App.css';
// import { Button } from 'bootstrap';

// function App() {

// const [count, setCount] = useState(1);
// const [winner, setWinner] =useState('');
// const  [char, setChar] = useState('x');
// const [matrix, setMatrix] = useState([
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', ''],
// ]);


// const getBGClass = (value) => {
//  if (value === 'x') return 'yellow';
//  if (value === '0') return 'orange';

//  return '';
// }; 


// const checkWinner = () => {
//   //checkwinner
//   if (matrix[0][0] && 
//     matrix[0][0] === matrix[0][1] &&
//     matrix[0][1] === matrix[0][2]
//   ) {
//       serWinner(matrix[0][0] + 'is the winner');
//   }

//   if (matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]) {
// setWinner(matrix[1][0] + 'is the winner');
//   }
// }
//   if (matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]) {
// setWinner(matrix[2][0] + 'is the winner');
//   }
// // check col winner
//   if (matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]) {
// setWinner(matrix[2][0] + 'is the winner');
//   }
//   if (matrix[0][1]&& matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]) {
// setWinner(matrix[2][1] + 'is the winner');
//   }
//   if (matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]) {
// setWinner(matrix[2][2] + 'is the winner');
//   }

//   //check diagonal winner
//   if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
//     setWinner(matrix[2][2] + 'is the winner');
//       }
//       if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
//         setWinner(matrix[2][0] + 'is the winner');
//           }
//           if (count === 9)
//         setWinner('The match has been draw');
        

// };
// const handleClick = (r, c) => {
//   if(matrix[r][c]) return;
//   const tmpMatrix = [...matrix];
//   tmpMatrix[r][c] = char;
//   setMatrix[tmpMatrix];
//   setChar(char === 'x' ? 'o' : 'x');
//   setCount(count + 1);
//   checkWinner();
// };

//   return (
//     <div className="app">
//   <div className='header aligncenter'>TTT</div>
//     <div className="aligncenter board">
//      {!winner && <P>{char} turn now </P>}
//       <div className="gameboard">
//       {wimmer ||
//       matrix.map((row, rIndex) => (
//           <div className="row">
//         {  row.map((cell, cIndex) =>
//               (
//                 <div 
//                 onClick={() => handleClick(rIndex, cIndex)}
//                 className={`cell aligncenter ${getBGClass(
//                   matrix[rIndex][cIndex])}`}>{matrix[rIndex][cIndex]}</div>
//               ))
//         }
//         </div>
//         ))}
//         </div>
//         <Button onClick={() => {
//           setWinner('');
//           setMatrix([
//             ['', '', ''],
//             ['', '', ''],
//             ['', '', ''],

//           ]);
//         }}>Reset</Button>
//     </div>
//     </div>
//   );


// export default App;
