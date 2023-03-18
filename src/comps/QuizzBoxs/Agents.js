import { useState } from "react";
import agents from "../../data/agents";

const AgentAttribute = ({ attribute, value }) => {
  const [selectedAgent, setSelectedAgent] = useState({});
  const [randomAgent, setRandomAgent] = useState(
    agents[Math.floor(Math.random() * agents.length)]
  );

  const isSelected = selectedAgent[attribute] === value;
  const isCommon = randomAgent[attribute] === value;

  return (
    <div
      className={`attribute ${isSelected ? "selected" : ""} ${
        isCommon ? "common" : ""
      }`}
      onClick={() => setSelectedAgent({ ...selectedAgent, [attribute]: value })}
    >
      {value}
    </div>
  );
};

const Agents = () => {
  const [selectedAgent, setSelectedAgent] = useState({ name: "" });
  const [randomAgent, setRandomAgent] = useState(
    agents[Math.floor(Math.random() * agents.length)]
  );

  const selectedAgentName = selectedAgent.name;
  const attributes = ["gender", "role", "species", "region"];

  return (
    <div className="agent-picker">
      {selectedAgentName ? (
        <div className="guess">
          {randomAgent.name === selectedAgentName ? (
            <p>Correct guess!</p>
          ) : (
            <p>Wrong guess! Try again...</p>
          )}
        </div>
      ) : (
        <div className="start">
          <input
            type="text"
            placeholder="Enter agent name"
            value={selectedAgent.name}
            onChange={(e) =>
              setSelectedAgent({
                ...selectedAgent,
                name: e.target.value,
              })
            }
          />
          <button onClick={() => setSelectedAgent({ ...selectedAgent })}>
            Start the game!
          </button>
        </div>
      )}

      <div className="attributes">
        {attributes.map((attribute) => (
          <AgentAttribute
            key={attribute}
            attribute={attribute}
            value={selectedAgent[attribute]}
          />
        ))}
      </div>
    </div>
  );
};

export default Agents;
