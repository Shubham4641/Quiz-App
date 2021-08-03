import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category ="", difficulty ="") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
      
      setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>

          <Route path="/Quiz" exact>
            <Quiz
            
            name ={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}/>
          </Route>

          <Route path="/Results" exact>
            <Results name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
