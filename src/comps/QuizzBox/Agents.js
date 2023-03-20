import React, { useState, useEffect } from "react";
import agents from "../../data/agents";
import alertify from "alertifyjs";
import "./agents.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Agents() {
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectedAgentData, setSelectedAgentData] = useState();
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
  const compareAgents = (lastAgent, computerAgentData) => {
    if (
      lastAgent.name === computerAgentData.name &&
      lastAgent.gender === computerAgentData.gender &&
      lastAgent.role === computerAgentData.role &&
      lastAgent.species === computerAgentData.species &&
      lastAgent.region === computerAgentData.region
    ) {
      console.log("Congratulations! You have chosen the right agent.");
    } else {
      console.log("Sorry, you have chosen the wrong agent.");
      alertify.alert("zort");
    }
  };

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
        />

        <Button variant="contained" onClick={handleAddItem}>
          Check
        </Button>
      </div>
      <div id="gecici">
        <p>User Input: {userInput}</p>
        <p>last Input: {lastAgent}</p>
        <p>Selected Agents: {selectedAgents}</p>
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
                <td id="table-name">{selectedAgentData.name}</td>
                <td>{selectedAgentData.gender}</td>
                <td>{selectedAgentData.role}</td>
                <td>{selectedAgentData.species}</td>
                <td>{selectedAgentData.region}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Computer Agent: {computerAgent}</p>
    </div>
  );
}

export default Agents;
