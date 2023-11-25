import { createContext } from "react";
import BlueBirdApi from "../api/BlueBirdApi";

const ApiContext = createContext(new BlueBirdApi());

export default ApiContext;
