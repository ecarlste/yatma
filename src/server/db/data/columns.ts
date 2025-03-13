import { v4 as uuidv4 } from "uuid";
import { BoardColumn } from "../schema";

const initialColumns: BoardColumn[] = [
  {
    id: "50962d41-f673-415c-9b62-692fa95beab6",
    name: "Todo",
    boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
  },
  {
    id: "1c132fc4-00b0-4019-9acd-b619ded71518",
    name: "Doing",

    boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
  },
  {
    id: "ecd4e095-939b-425c-a385-db4f290a5105",
    name: "Done",

    boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
  },
  {
    id: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
    name: "Todo",

    boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
  },
  {
    id: uuidv4(),
    name: "Doing",
    boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
  },
  {
    id: uuidv4(),
    name: "Done",
    boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
  },
  {
    id: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
    name: "Now",

    boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
  },
  {
    id: uuidv4(),
    name: "Next",

    boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
  },
  {
    id: uuidv4(),
    name: "Later",

    boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
  },
];

export function createColumns() {
  return [...initialColumns];
}
