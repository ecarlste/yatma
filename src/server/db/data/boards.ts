import { v4 as uuidv4 } from "uuid";
import { type Board } from "../schema";

export const boards: Board[] = [
  {
    id: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
    name: "Platform Launch",
    columns: [
      {
        id: "50962d41-f673-415c-9b62-692fa95beab6",
        name: "Todo",
        tasks: [
          {
            id: "181f0b48-5ee4-4f63-842e-0f10d0f250e9",
            title: "Build UI for onboarding flow",
            description: "",
            columnId: "50962d41-f673-415c-9b62-692fa95beab6",
            subtasks: [
              {
                id: uuidv4(),
                title: "Sign up page",
                isCompleted: true,
                taskId: "181f0b48-5ee4-4f63-842e-0f10d0f250e9",
              },
              {
                id: uuidv4(),
                title: "Sign in page",
                isCompleted: false,
                taskId: "181f0b48-5ee4-4f63-842e-0f10d0f250e9",
              },
              {
                id: uuidv4(),
                title: "Welcome page",
                isCompleted: false,
                taskId: "181f0b48-5ee4-4f63-842e-0f10d0f250e9",
              },
            ],
          },
          {
            id: "9be795ad-f70c-491b-9446-581b3616c965",
            title: "Build UI for search",
            description: "",
            columnId: "50962d41-f673-415c-9b62-692fa95beab6",
            subtasks: [
              {
                id: uuidv4(),
                title: "Search page",
                isCompleted: false,
                taskId: "9be795ad-f70c-491b-9446-581b3616c965",
              },
            ],
          },
          {
            id: "9fdd4c82-5380-420d-9333-4af61aa311ac",
            title: "Build settings UI",
            description: "",
            columnId: "50962d41-f673-415c-9b62-692fa95beab6",
            subtasks: [
              {
                id: uuidv4(),
                title: "Account page",
                isCompleted: false,
                taskId: "9fdd4c82-5380-420d-9333-4af61aa311ac",
              },
              {
                id: uuidv4(),
                title: "Billing page",
                isCompleted: false,
                taskId: "9fdd4c82-5380-420d-9333-4af61aa311ac",
              },
            ],
          },
          {
            id: "a002ff7c-14f9-4fef-b944-d1a29c385c49",
            title: "QA and test all major user journeys",
            description:
              "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            columnId: "50962d41-f673-415c-9b62-692fa95beab6",
            subtasks: [
              {
                id: uuidv4(),
                title: "Internal testing",
                isCompleted: false,
                taskId: "a002ff7c-14f9-4fef-b944-d1a29c385c49",
              },
              {
                id: uuidv4(),
                title: "External testing",
                isCompleted: false,
                taskId: "a002ff7c-14f9-4fef-b944-d1a29c385c49",
              },
            ],
          },
        ],
        boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
      },
      {
        id: "1c132fc4-00b0-4019-9acd-b619ded71518",
        name: "Doing",
        tasks: [
          {
            id: "ed81a03b-ecb6-4deb-aac4-d9dfec842ce2",
            title: "Design settings and search pages",
            description: "",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Settings - Account page",
                isCompleted: true,
                taskId: "ed81a03b-ecb6-4deb-aac4-d9dfec842ce2",
              },
              {
                id: uuidv4(),
                title: "Settings - Billing page",
                isCompleted: true,
                taskId: "ed81a03b-ecb6-4deb-aac4-d9dfec842ce2",
              },
              {
                id: uuidv4(),
                title: "Search page",
                isCompleted: false,
                taskId: "ed81a03b-ecb6-4deb-aac4-d9dfec842ce2",
              },
            ],
          },
          {
            id: "bc261a68-a942-4e05-a82c-1b3556e4ac83",
            title: "Add account management endpoints",
            description: "",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Upgrade plan",
                isCompleted: true,
                taskId: "bc261a68-a942-4e05-a82c-1b3556e4ac83",
              },
              {
                id: uuidv4(),
                title: "Cancel plan",
                isCompleted: true,
                taskId: "bc261a68-a942-4e05-a82c-1b3556e4ac83",
              },
              {
                id: uuidv4(),
                title: "Update payment method",
                isCompleted: false,
                taskId: "bc261a68-a942-4e05-a82c-1b3556e4ac83",
              },
            ],
          },
          {
            id: "3eee7f36-4597-40c3-81a0-71197b9060b9",
            title: "Design onboarding flow",
            description: "",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Sign up page",
                isCompleted: true,
                taskId: "3eee7f36-4597-40c3-81a0-71197b9060b9",
              },
              {
                id: uuidv4(),
                title: "Sign in page",
                isCompleted: false,
                taskId: "3eee7f36-4597-40c3-81a0-71197b9060b9",
              },
              {
                id: uuidv4(),
                title: "Welcome page",
                isCompleted: false,
                taskId: "3eee7f36-4597-40c3-81a0-71197b9060b9",
              },
            ],
          },
          {
            id: "143d4c42-9733-48a8-9710-5c205157e646",
            title: "Add search enpoints",
            description: "",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Add search endpoint",
                isCompleted: true,
                taskId: "143d4c42-9733-48a8-9710-5c205157e646",
              },
              {
                id: uuidv4(),
                title: "Define search filters",
                isCompleted: false,
                taskId: "143d4c42-9733-48a8-9710-5c205157e646",
              },
            ],
          },
          {
            id: "b648ba05-63c0-4f7a-8513-552c766ccbd9",
            title: "Add authentication endpoints",
            description: "",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Define user model",
                isCompleted: true,
                taskId: "b648ba05-63c0-4f7a-8513-552c766ccbd9",
              },
              {
                id: uuidv4(),
                title: "Add auth endpoints",
                isCompleted: false,
                taskId: "b648ba05-63c0-4f7a-8513-552c766ccbd9",
              },
            ],
          },
          {
            id: "f53e9b2b-f501-4e57-8475-abedf89e3295",
            title:
              "Research pricing points of various competitors and trial different business models",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            columnId: "1c132fc4-00b0-4019-9acd-b619ded71518",
            subtasks: [
              {
                id: uuidv4(),
                title: "Research competitor pricing and business models",
                isCompleted: true,
                taskId: "f53e9b2b-f501-4e57-8475-abedf89e3295",
              },
              {
                id: uuidv4(),
                title: "Outline a business model that works for our solution",
                isCompleted: false,
                taskId: "f53e9b2b-f501-4e57-8475-abedf89e3295",
              },
              {
                id: uuidv4(),
                title:
                  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                isCompleted: false,
                taskId: "f53e9b2b-f501-4e57-8475-abedf89e3295",
              },
            ],
          },
        ],
        boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
      },
      {
        id: "ecd4e095-939b-425c-a385-db4f290a5105",
        name: "Done",
        tasks: [
          {
            id: "8a59a04e-f861-47b0-8ece-b401cf36138f",
            title: "Conduct 5 wireframe tests",
            description:
              "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Complete 5 wireframe prototype tests",
                isCompleted: true,
                taskId: "8a59a04e-f861-47b0-8ece-b401cf36138f",
              },
            ],
          },
          {
            id: "47060454-8261-4b62-b997-fac2fa324569",
            title: "Create wireframe prototype",
            description:
              "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Create clickable wireframe prototype in Balsamiq",
                isCompleted: true,
                taskId: "47060454-8261-4b62-b997-fac2fa324569",
              },
            ],
          },
          {
            id: "d106881e-7e23-41d6-9320-de7a96140b80",
            title: "Review results of usability tests and iterate",
            description:
              "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title:
                  "Meet to review notes from previous tests and plan changes",
                isCompleted: true,
                taskId: "d106881e-7e23-41d6-9320-de7a96140b80",
              },
              {
                id: uuidv4(),
                title: "Make changes to paper prototypes",
                isCompleted: true,
                taskId: "d106881e-7e23-41d6-9320-de7a96140b80",
              },
              {
                id: uuidv4(),
                title: "Conduct 5 usability tests",
                isCompleted: true,
                taskId: "d106881e-7e23-41d6-9320-de7a96140b80",
              },
            ],
          },
          {
            id: "f2b6488c-04af-40ab-9408-8a6f6d6f7f67",
            title:
              "Create paper prototypes and conduct 10 usability tests with potential customers",
            description: "",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Create paper prototypes for version one",
                isCompleted: true,
                taskId: "f2b6488c-04af-40ab-9408-8a6f6d6f7f67",
              },
              {
                id: uuidv4(),
                title: "Complete 10 usability tests",
                isCompleted: true,
                taskId: "f2b6488c-04af-40ab-9408-8a6f6d6f7f67",
              },
            ],
          },
          {
            id: "b5c75fa4-b63b-4ff6-bfaf-b32dc333af63",
            title: "Market discovery",
            description:
              "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Interview 10 prospective customers",
                isCompleted: true,
                taskId: "b5c75fa4-b63b-4ff6-bfaf-b32dc333af63",
              },
            ],
          },
          {
            id: "5fda94b7-ddc9-4727-b8c6-7a4c6167201b",
            title: "Competitor analysis",
            description: "",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Find direct and indirect competitors",
                isCompleted: true,
                taskId: "5fda94b7-ddc9-4727-b8c6-7a4c6167201b",
              },
              {
                id: uuidv4(),
                title: "SWOT analysis for each competitor",
                isCompleted: true,
                taskId: "5fda94b7-ddc9-4727-b8c6-7a4c6167201b",
              },
            ],
          },
          {
            id: "f4ba3ccf-3046-4c71-bc44-5398a8c97231",
            title: "Research the market",
            description:
              "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
            columnId: "ecd4e095-939b-425c-a385-db4f290a5105",
            subtasks: [
              {
                id: uuidv4(),
                title: "Write up research analysis",
                isCompleted: true,
                taskId: "f4ba3ccf-3046-4c71-bc44-5398a8c97231",
              },
              {
                id: uuidv4(),
                title: "Calculate TAM",
                isCompleted: true,
                taskId: "f4ba3ccf-3046-4c71-bc44-5398a8c97231",
              },
            ],
          },
        ],
        boardId: "2c1d931f-0808-480f-bc24-8d7c56ac7842",
      },
    ],
  },
  {
    id: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
    name: "Marketing Plan",
    columns: [
      {
        id: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
        name: "Todo",
        tasks: [
          {
            id: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
            title: "Plan Product Hunt launch",
            description: "",
            columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
            subtasks: [
              {
                id: uuidv4(),
                title: "Find hunter",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
              {
                id: uuidv4(),
                title: "Gather assets",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
              {
                id: uuidv4(),
                title: "Draft product page",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
              {
                id: uuidv4(),
                title: "Notify customers",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
              {
                id: uuidv4(),
                title: "Notify network",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
              {
                id: uuidv4(),
                title: "Launch!",
                isCompleted: false,
                taskId: "cac50b12-b2e4-4f84-9e72-27d6301fe52f",
              },
            ],
          },
          {
            id: "e9c33d91-9e9b-443f-acfc-2a15e1483284",
            title: "Share on Show HN",
            description: "",
            columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
            subtasks: [
              {
                id: uuidv4(),
                title: "Draft out HN post",
                isCompleted: false,
                taskId: "e9c33d91-9e9b-443f-acfc-2a15e1483284",
              },
              {
                id: uuidv4(),
                title: "Get feedback and refine",
                isCompleted: false,
                taskId: "e9c33d91-9e9b-443f-acfc-2a15e1483284",
              },
              {
                id: uuidv4(),
                title: "Publish post",
                isCompleted: false,
                taskId: "e9c33d91-9e9b-443f-acfc-2a15e1483284",
              },
            ],
          },
          {
            id: "674ddf53-d106-4860-8aeb-1ff4ec110799",
            title: "Write launch article to publish on multiple channels",
            description: "",
            columnId: "7e212391-b2f3-42fb-8f3e-c86321ed2555",
            subtasks: [
              {
                id: uuidv4(),
                title: "Write article",
                isCompleted: false,
                taskId: "674ddf53-d106-4860-8aeb-1ff4ec110799",
              },
              {
                id: uuidv4(),
                title: "Publish on LinkedIn",
                isCompleted: false,
                taskId: "674ddf53-d106-4860-8aeb-1ff4ec110799",
              },
              {
                id: uuidv4(),
                title: "Publish on Inndie Hackers",
                isCompleted: false,
                taskId: "674ddf53-d106-4860-8aeb-1ff4ec110799",
              },
              {
                id: uuidv4(),
                title: "Publish on Medium",
                isCompleted: false,
                taskId: "674ddf53-d106-4860-8aeb-1ff4ec110799",
              },
            ],
          },
        ],
        boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
      },
      {
        id: uuidv4(),
        name: "Doing",
        tasks: [],
        boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
      },
      {
        id: uuidv4(),
        name: "Done",
        tasks: [],
        boardId: "37d15356-c64e-427c-8e24-dac0b15d5b5e",
      },
    ],
  },
  {
    id: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
    name: "Roadmap",
    columns: [
      {
        id: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
        name: "Now",
        tasks: [
          {
            id: "19950d5e-a5d8-415a-a72f-8b7e859e1c4f",
            title: "Launch version one",
            description: "",
            columnId: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
            subtasks: [
              {
                id: uuidv4(),
                title: "Launch privately to our waitlist",
                isCompleted: false,
                taskId: "19950d5e-a5d8-415a-a72f-8b7e859e1c4f",
              },
              {
                id: uuidv4(),
                title: "Launch publicly on PH, HN, etc.",
                isCompleted: false,
                taskId: "19950d5e-a5d8-415a-a72f-8b7e859e1c4f",
              },
            ],
          },
          {
            id: "dd307d14-b09f-41e4-a51f-803bb42c6d58",
            title: "Review early feedback and plan next steps for roadmap",
            description:
              "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            columnId: "905a81d5-9625-49fc-ba64-c995d90fcfd3",
            subtasks: [
              {
                id: uuidv4(),
                title: "Interview 10 customers",
                isCompleted: false,
                taskId: "dd307d14-b09f-41e4-a51f-803bb42c6d58",
              },
              {
                id: uuidv4(),
                title: "Review common customer pain points and suggestions",
                isCompleted: false,
                taskId: "dd307d14-b09f-41e4-a51f-803bb42c6d58",
              },
              {
                id: uuidv4(),
                title: "Outline next steps for our roadmap",
                isCompleted: false,
                taskId: "dd307d14-b09f-41e4-a51f-803bb42c6d58",
              },
            ],
          },
        ],
        boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
      },
      {
        id: uuidv4(),
        name: "Next",
        tasks: [],
        boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
      },
      {
        id: uuidv4(),
        name: "Later",
        tasks: [],
        boardId: "f39d14ac-287e-4a10-9a1b-b701348f24b3",
      },
    ],
  },
];
