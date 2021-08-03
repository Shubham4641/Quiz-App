import { Button, MenuItem, TextField } from "@material-ui/core";
import classes from "./Home.module.css";
import Categories from "../../components/Data/Categories";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const submitHandler = () => {
   if(!category || ! difficulty || !name) {
       setError(true);
       return;
   }
   else {
       setError(false);
       fetchQuestions(category, difficulty);
       history.push("/Quiz");
   }
  };

  return (
    <div>
      <div className={classes.content}>
        <img className={classes.image} src="/image.svg" alt="Quiz img" />
      </div>
      
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
      
      <div className={classes.settings}>
        
      </div>

      <div className={classes.settings_select}>
          {error && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}
        <TextField
          label="Enter Your Name"
          variant="outlined"
          style={{ marginBottom: 25 }}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          select
          label="Select Category"
          variant="outlined"
          style={{ marginBottom: 30 }}
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Difficulty"
          variant="outlined"
          style={{ marginBottom: 30 }}
          onChange={(event) => setDifficulty(event.target.value)}
          value={difficulty}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>

        <Button 
        variant="outlined"
         color="primary"
         onClick= {submitHandler}
         >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Home;
