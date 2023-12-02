/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import agents from "../../data/agents";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import GoBack from "../../Tools/GoBack";
import { Helmet } from "react-helmet";
function Agents() {
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectedAgentData, setSelectedAgentData] = useState(null);
  const [computerAgent, setComputerAgent] = useState("");
  const [computerAgentData, setComputerAgentData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const [animationParent1] = useAutoAnimate();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * agents.length);
    setComputerAgent(agents[randomIndex].name);
    setComputerAgentData(agents[randomIndex]);
  }, []);
  const getOptions = () => {
    if (userInput.trim() === "") {
      return [];
    }
    return agents.filter((agent) =>
      agent.label.toLowerCase().includes(userInput.toLowerCase())
    );
  };
  const playAgain = () => {
    setSelectedAgents([]);
    setSelectedAgentData(null);
    setComputerAgent("");
    setComputerAgentData("");
    setUserInput("");
    setIsTrue(false);
    const randomIndex = Math.floor(Math.random() * agents.length);
    setComputerAgent(agents[randomIndex].name);
    setComputerAgentData(agents[randomIndex]);
  };

  const handleChange = (event, newValue) => {
    setUserInput(newValue.toLowerCase());
  };
  const handleInputChange = (_, newInputValue) => {
    setUserInput(newInputValue.toLowerCase());
  };

  const handleAddItem = () => {
    setSelectedAgents((prevItems) => [...prevItems, userInput]);
    setUserInput("");
    setTimeout(() => {
      compareAgents();
    }, 100);
  };

  const compareAgents = () => {
    let matchingAgent;
    if (agents.find((a) => a.name === userInput)) {
      matchingAgent = agents.find((a) => a.name === userInput);
      if (matchingAgent.gender === computerAgentData.gender) {
        Ref1.current.style.backgroundColor = "green";
      } else {
        Ref1.current.style.backgroundColor = "red";
      }
      if (matchingAgent.role === computerAgentData.role) {
        Ref2.current.style.backgroundColor = "green";
      } else {
        Ref2.current.style.backgroundColor = "red";
      }
      if (matchingAgent.species === computerAgentData.species) {
        Ref3.current.style.backgroundColor = "green";
      } else {
        Ref3.current.style.backgroundColor = "red";
      }
      if (matchingAgent.region === computerAgentData.region) {
        Ref4.current.style.backgroundColor = "green";
      } else {
        Ref4.current.style.backgroundColor = "red";
      }
      if (matchingAgent === computerAgentData) {
        setIsTrue(true);
      }
    } else {
      return;
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
    <div className="flex flex-col justify-start items-center min-h-screen bg-bg pt-10">
      <Helmet>
        <title> Valorant| Quiz Boxes</title>
        <meta
          name="description"
          content="guess valorant agents quiz box game"
        />
      </Helmet>
      <GoBack></GoBack>

      <h1 className="text-3xl text-center font-bold border-b border-black font-[Raleway] my-10">
        Valorant Agent Guessing Game
      </h1>
      {userInput === null ? (
        <h3 className="font-[Teko] text-center text-5xl md:text-8xl text-amber-800">
          Make a Guess for Start
        </h3>
      ) : null}

      <div className="flex flex-col justify-center items-center w-11/12 md:w-2/5">
        <div className="w-full">
          <Autocomplete
            disablePortal
            options={getOptions()}
            value={userInput}
            onInputChange={handleInputChange}
            onKeyPress={handleKeyPress}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Choose an Agent"
                variant="filled"
                type="text"
              />
            )}
          />
        </div>

        <div className="flex flex-col justify-center items-center mx-4 w-full">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white my-1 px-4 py-2 rounded w-full"
            onClick={handleAddItem}
          >
            Check
          </button>
          {isTrue && (
            <button
              className="bg-purple-600 hover:bg-purple-800 text-white my-1 px-4 py-2 rounded w-full"
              ref={animationParent1}
              onClick={playAgain}
            >
              Play Again
            </button>
          )}
        </div>
      </div>
      {selectedAgents.length > 0 ? (
        <table className="border-collapse w-4/5 max-w-800 mx-auto text-base leading-1.4 my-10">
          <thead>
            <tr>
              <th className="bg-gray-700 border border-gray-300 font-bold text-white">
                Agent
              </th>
              <th className="bg-gray-700 border border-gray-300 font-bold text-white">
                Gender
              </th>
              <th className="bg-gray-700 border border-gray-300 font-bold text-white">
                Role
              </th>
              <th className="bg-gray-700 border border-gray-300 font-bold text-white">
                Species
              </th>
              <th className="bg-gray-700 border border-gray-300 font-bold text-white">
                Region
              </th>
            </tr>
          </thead>
          <tbody x-ref="animationParent">
            {selectedAgents.length > 0
              ? selectedAgents.map((agent, index) => {
                  const selectedAgentData = agents.find(
                    (a) => a.name === agent
                  );
                  if (!selectedAgentData) return null;
                  return (
                    <tr key={index}>
                      <td className="flex justify-center items-center">
                        <img
                          className="w-auto h-20 text-center"
                          src={selectedAgentData.icon}
                          alt={selectedAgentData.name}
                        />
                      </td>
                      <td
                        ref={Ref1}
                        className="border border-gray-300 text-center text-white"
                      >
                        {selectedAgentData.gender}
                      </td>
                      <td
                        ref={Ref2}
                        className="border border-gray-300 text-center text-white"
                      >
                        {selectedAgentData.role}
                      </td>
                      <td
                        ref={Ref3}
                        className="border border-gray-300 text-center text-white"
                      >
                        {selectedAgentData.species}
                      </td>
                      <td
                        ref={Ref4}
                        className="border border-gray-300 text-center text-white"
                      >
                        {selectedAgentData.region}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default Agents;
