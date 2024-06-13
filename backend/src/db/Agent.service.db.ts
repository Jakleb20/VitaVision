// import mockdata from "../../mockdata/agents.json";
// import {Agent} from "./Agent.model.db";
// import {IAgent} from "../models/IAgent";
//
// export const initDB = async () => {
//     try {
//         const result = await Agent.deleteMany(); // löscht alle
//
//         mockdata.map(value => addAgent(value))
//
//         console.log("### MongoDB successfully inserted Agents");
//     } catch (error) {
//         console.error("### ERROR MongoDB insertion error: no songs inserted")
//         console.log(error);
//     }
// }
//
// const addAgent = (agent:IAgent) => {
//     const newAgent = new Agent(agent);
//     newAgent.save().then(response => console.log(response.name + " inserted successfully"))
// }