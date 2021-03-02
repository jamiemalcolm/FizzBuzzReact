import React, { useEffect, useState  } from 'react';

const Counter = () => {
   const [inputNumber, setInputNumber] = useState(1);
   const [answer, setAnswer] = useState(1);

  const [questionNumber, setQuestionNumber] = useState(1); 

  const [name, setName] = useState("");

  const [result, setResult] = useState("");

  const handleInputChange = (evt) => {
    setInputNumber(evt.target.value.toLowerCase());
    if(inputNumber == answer){
      setResult("Well done");
    }else{
    setResult("unlucky");
    }
 }

 const handleNameInput = (evt) => {
   setName(evt.target.value);
 }
 
 const increase = () => {
   setQuestionNumber(questionNumber + 1);
 }
 const decrease = () => {
   setQuestionNumber(questionNumber - 1);
 }


 const generateNum = (evt) => {
   evt.preventDefault();
  let min = Math.ceil(10);
  let max = Math.floor(50);
  setQuestionNumber(Math.floor(Math.random() * (max - min + 1)) + min);

 }

 useEffect(() => {
   console.log("useEffect Triggered!!")
  if (questionNumber % 3 === 0 && questionNumber % 5 === 0) {
    setAnswer("fizzbuz")
  } else if (questionNumber % 3 === 0) {
    setAnswer("fizz")
  } else if (questionNumber % 5 === 0) {
    setAnswer("buzz")
  } else {
    setAnswer(questionNumber);
  }
 }, [questionNumber])
  return(
    <>
    <h1>Welcome {name} </h1>
    


    
    <form>
      <input
      type="text"
      placeholder="your name"
      value={name}
      onChange={handleNameInput}
      />
      <button onClick={generateNum}>play</button>
    <br></br>
      <input 
      type="text" 
      placeholder="Your Answer"
      value={inputNumber} 
      onChange={handleInputChange}
      />
    </form>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <h3>Question</h3>
      <h4>is {questionNumber} Fizz, Buzz or FizzBuzz</h4>
      <h3>Input:</h3>
    <h4>{inputNumber}</h4>
      <h3>Correct Answer:</h3>
      <h3>{result}</h3>
      
    </>
  )
}

export default Counter;