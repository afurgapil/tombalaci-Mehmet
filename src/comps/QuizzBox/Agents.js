import React, { useState, useEffect } from "react";
import agents from "../../data/agents";
import alertify from "alertifyjs";
import "./agents.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Agents() {
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectedAgentData, setSelectedAgentData] = useState("");
  const [computerAgent, setComputerAgent] = useState("");
  const [computerAgentData, setComputerAgentData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [lastAgent, setLastAgent] = useState();

  const handleChange = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const handleAddItem = () => {
    setSelectedAgents((prevItems) => [...prevItems, userInput]);
    setLastAgent(userInput);
    setUserInput("");
    compareAgents();
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * agents.length);
    setComputerAgent(agents[randomIndex].name);
    setComputerAgentData(randomIndex);
  }, []);
  const compareAgents = () => {
    const matchedAgent = agents.some((agent) => {
      return agent.name.toLowerCase() === lastAgent.name.toLowerCase();
    });

    if (matchedAgent) {
      console.log("Congratulations! You have chosen the right agent.");
    } else {
      console.log("Sorry, you have chosen the wrong agent.");
      alertify.alert("zort");
      console.log(lastAgent.name);
      console.log(lastAgent.gender);
      console.log(lastAgent.role);
      console.log(lastAgent.species);
      console.log(lastAgent.region);
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
      <h1 id="vaoldle-title">Valorant Agent Guessing Game</h1>
      <div id="agent-input">
        <TextField
          id="filled-basic"
          label="Choose an Agent"
          variant="filled"
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Button variant="contained" onClick={handleAddItem}>
          Check
        </Button>
      </div>
      <div id="gecici">
        <p>User Input: {userInput}</p>
        <p>last Input: {lastAgent}</p>
        <p>Selected Agents: {selectedAgents}</p>
        <p>Computer Agent: {computerAgent}</p>
        <p>{selectedAgentData}</p>
      </div>

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
        <tbody>
          {selectedAgents.map((agent, index) => {
            const selectedAgentData = agents.find((a) => a.name === agent);
            if (!selectedAgentData) return null;
            return (
              <tr key={index}>
                <td id="table-name table-item">{selectedAgentData.name}</td>
                <td id="table-gender table-item">{selectedAgentData.gender}</td>
                <td id="table-role table-item">{selectedAgentData.role}</td>
                <td id="table-species table-item">
                  {selectedAgentData.species}
                </td>
                <td id="table-region table-item">{selectedAgentData.region}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Agents;
