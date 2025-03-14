import { type Task } from "../schema";

const initialTasks: Task[] = [
  {
    id: "181f0b48-5ee4-4f63-842e-0f10d0f250e9",
    title: "Build UI for onboarding flow",
    description: "",
    columnId: "50962d41-f673-415c-9b62-692fa95beab6",
  },
  {
    id: "9be795ad-f70c-491b-9446-581b3616c965",
    title: "Build UI for search",
    description: "",
    columnId: "50962d41-f673-415c-9b62-692fa95beab6",
  },
  {
    id: "9fdd4c82-5380-420d-9333-4af61aa311ac",
    title: "Build settings UI",
    description: "",
    columnId: "50962d41-f673-415c-9b62-692fa95beab6",
  },
  {
    id: "a002ff7c-14f9-4fef-b944-d1a29c385c49",
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    columnId: "50962d41-f673-415c-9b62-692fa95beab6",
  },
  {
    id: "ed81a03b-ecb6-4deb-aac4-d9dfec842ce2",
    title: "Design settings and search pages",
    description: "",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "bc261a68-a942-4e05-a82c-1b3556e4ac83",
    title: "Add account management endpoints",
    description: "",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "3eee7f36-4597-40c3-81a0-71197b9060b9",
    title: "Design onboarding flow",
    description: "",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "143d4c42-9733-48a8-9710-5c205157e646",
    title: "Add search enpoints",
    description: "",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "b648ba05-63c0-4f7a-8513-552c766ccbd9",
    title: "Add authentication endpoints",
    description: "",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "f53e9b2b-f501-4e57-8475-abedf89e3295",
    title:
      "Research pricing points of various competitors and trial different business models",
    description:
      "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
  },
  {
    id: "8a59a04e-f861-47b0-8ece-b401cf36138f",
    title: "Conduct 5 wireframe tests",
    description:
      "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "47060454-8261-4b62-b997-fac2fa324569",
    title: "Create wireframe prototype",
    description:
      "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "d106881e-7e23-41d6-9320-de7a96140b80",
    title: "Review results of usability tests and iterate",
    description:
      "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "f2b6488c-04af-40ab-9408-8a6f6d6f7f67",
    title:
      "Create paper prototypes and conduct 10 usability tests with potential customers",
    description: "",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "b5c75fa4-b63b-4ff6-bfaf-b32dc333af63",
    title: "Market discovery",
    description:
      "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "5fda94b7-ddc9-4727-b8c6-7a4c6167201b",
    title: "Competitor analysis",
    description: "",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "f4ba3ccf-3046-4c71-bc44-5398a8c97231",
    title: "Research the market",
    description:
      "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
    columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
  },
  {
    id: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
    title: "Plan Product Hunt launch",
    description: "",
    columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
  },
  {
    id: "e9c33d91-9e9b-443f-acfc-2a15e1483284",
    title: "Share on Show HN",
    description: "",
    columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
  },
  {
    id: "674ddf53-d106-4860-8aeb-1ff4ec110799",
    title: "Write launch article to publish on multiple channels",
    description: "",
    columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
  },
  {
    id: "19950d5e-a5d8-415a-a72f-8b7e859e1c4f",
    title: "Launch version one",
    description: "",
    columnId: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
  },
  {
    id: "dd307d14-b09f-41e4-a51f-803bb42c6d58",
    title: "Review early feedback and plan next steps for roadmap",
    description:
      "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
    columnId: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
  },
];

export function createTasks(): Task[] {
  return [...initialTasks];
}
