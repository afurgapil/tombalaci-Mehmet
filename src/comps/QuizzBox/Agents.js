import React, { useState, useEffect, useRef } from "react";
import agents from "../../data/agents";
import alertify from "alertifyjs";
import "../../style/agents.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import GoBack from "../../Tools/GoBack";
function Agents() {
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectedAgentData, setSelectedAgentData] = useState(null);
  const [computerAgent, setComputerAgent] = useState("");
  const [computerAgentData, setComputerAgentData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [lastAgent, setLastAgent] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const [animationParent] = useAutoAnimate();
  const [animationParent1] = useAutoAnimate();

  const playAgain = () => {
    setSelectedAgents([]);
    setSelectedAgentData(null);
    setComputerAgent("");
    setComputerAgentData("");
    setUserInput("");
    setLastAgent("");
    setIsTrue(false);
    const randomIndex = Math.floor(Math.random() * agents.length);
    setComputerAgent(agents[randomIndex].name);
    setComputerAgentData(agents[randomIndex]);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const handleAddItem = () => {
    setSelectedAgents((prevItems) => [...prevItems, userInput]);
    setLastAgent(userInput);
    setUserInput("");
    setTimeout(() => {
      compareAgents();
    }, 100);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * agents.length);
    setComputerAgent(agents[randomIndex].name);
    setComputerAgentData(agents[randomIndex]);
  }, []);

  const compareAgents = () => {
    const matchingAgent = agents.find((a) => a.name === userInput);
    if (matchingAgent.gender === computerAgentData.gender) {
      Ref1.current.style.backgroundColor = "green";
    }
    if (matchingAgent.role === computerAgentData.role) {
      Ref2.current.style.backgroundColor = "green";
    }
    if (matchingAgent.species === computerAgentData.species) {
      Ref3.current.style.backgroundColor = "green";
    }
    if (matchingAgent.region === computerAgentData.region) {
      Ref4.current.style.backgroundColor = "green";
    }
    if (matchingAgent.gender !== computerAgentData.gender) {
      Ref1.current.style.backgroundColor = "red";
    }
    if (matchingAgent.role !== computerAgentData.role) {
      Ref2.current.style.backgroundColor = "red";
    }
    if (matchingAgent.species !== computerAgentData.species) {
      Ref3.current.style.backgroundColor = "red";
    }
    if (matchingAgent.region !== computerAgentData.region) {
      Ref4.current.style.backgroundColor = "red";
    }
    if (matchingAgent === computerAgentData) {
      setIsTrue(true);
    }
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddItem();
    } else if (isNaN(parseInt(event.key, 10))) {
      // event.preventDefault();
    }
  }

  return (
    <div id="valodle-game-container">
      <GoBack></GoBack>

      <h1 id="vaoldle-title">Valorant Agent Guessing Game</h1>
      <div id="agent-input">
        <TextField
          fullWidth
          id="filled-basic"
          label="Choose an Agent"
          variant="filled"
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Button id="check-button" variant="contained" onClick={handleAddItem}>
          Check
        </Button>
        {isTrue && (
          <Button
            ref={animationParent1}
            variant="contained"
            color="secondary"
            onClick={playAgain}
          >
            Play Again
          </Button>
        )}
      </div>
      {/* <div id="gecici">
        <p>User Input: {userInput}</p>
        <p>last Input: {lastAgent}</p>
        <p>Selected Agents: {selectedAgents}</p>
        <p>Computer Agent: {computerAgent}</p>
        <div>
          {selectedAgentData ? (
            <p>Name: {selectedAgentData.name}</p>
          ) : (
            <p>No agent selected</p>
          )}
        </div>
      </div> */}
      {selectedAgents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Species</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody ref={animationParent}>
            {selectedAgents.map((agent, index) => {
              const selectedAgentData = agents.find((a) => a.name === agent);
              if (!selectedAgentData) return null;
              return (
                <tr key={index}>
                  <td id="table-name">
                    <img
                      id="agent-icon"
                      src={selectedAgentData.icon}
                      alt={selectedAgentData.name}
                    ></img>
                  </td>
                  <td id="table-gender table-item" ref={Ref1}>
                    {selectedAgentData.gender}
                  </td>
                  <td id="table-role table-item" ref={Ref2}>
                    {selectedAgentData.role}
                  </td>
                  <td id="table-species table-item" ref={Ref3}>
                    {selectedAgentData.species}
                  </td>
                  <td id="table-region table-item" ref={Ref4}>
                    {selectedAgentData.region}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3 id="valodle-desc">Make a Guess</h3>
      )}
    </div>
  );
}

export default Agents;
