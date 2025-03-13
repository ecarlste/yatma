import { v4 as uuidv4 } from "uuid";
import { type Board } from "../schema";

const initialBoards: Board[] = [
  {
    id: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
    name: "Platform Launch",
  },
  {
    id: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
    name: "Marketing Plan",
  },
  {
    id: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
    name: "Roadmap",
  },
];

export function createBoards() {
  return [...initialBoards];
}
