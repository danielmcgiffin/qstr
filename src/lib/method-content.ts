export type MethodItem = {
  id: string;
  title: string;
  desc: string;
};

export type MethodGroup = {
  title?: string;
  items: MethodItem[];
};

export type MethodContentSection = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  groups: MethodGroup[];
};

export const methodContent: MethodContentSection[] = [
  {
    slug: "introduction",
    title: "How to Map Your Operations",
    summary: "The core ideas, the way to use them, and the traps along the way.",
    intro:
      "This is the foundation of operational discipline, which separates the great companies from the rest. These ideas are at the heart of great management, and these practices keep the system clear and effective as the company grows.",
    groups: [
      {
        title: "The Big Ideas",
        items: [
          {
            id: "simple-easy",
            title: "Simple isn't Easy",
            desc: "Operations boils down to some simple principles: great people, clear goals, and a solid understanding of reality. But that doesn't mean great operations comes easily. It requires constant attention and awareness and an ability to see the big picture."
          },
          {
            id: "operating-model",
            title: "The Operating Model",
            desc: "The operating model is a way to describe how work works across a team, a division, or the entire business. It's made up of a combination of the operational factors \(how work gets done and money gets made) and the administrative factors \(how internal resources are allocated and aligned)."
          },
          {
            id: "coordination",
            title: "Operations is Coordination",
            desc: "What we're trying to do when we document business processes is to reduce the friction involved in coordination across people, teams, and systems. So the documentation must be universal, understandable, and useful to everyone in the business if it's to actually serve its function."
          },
          {
            id: "accountability",
            title: "Ambiguity Solves Short-term Friction for Long-term Pain",
            desc: "Any ambiguity results from an unwillingness to make a decision and assign accountability. But avoiding that pain in the short-term keeps you stuck in the operational friction for the long-term, impacting the growth of your business, and of your people."
          },
          {
            id: "fewer-docs",
            title: "Fewer docs, more links",
            desc: "Short, linked steps beat long documents. Capture the essential minimum and connect it to everything else as needed. This helps prevent any violations of Gall's Law, and keeps the documentation lean enough to be understood but robust enough to be useful."
          },
          {
            id: "keep-it-alive",
            title: "Keep it alive",
            desc: "Outdated steps are worse than missing ones. Develop systems to make sure how you say you work and how you actually work match each other."
          }
        ]
      },
      {
        title: "Practices",
        items: [
          {
            id: "meaningful-direction",
            title: "Start with the bottleneck",
            desc: "Pick the workflow that interrupts you most. Map that first and let it set the system."
          },
          {
            id: "define-interfaces",
            title: "Define the interfaces",
            desc: "Where teams hand off is where momentum dies. Make those edges explicit and owned."
          },
          {
            id: "system-of-record",
            title: "Name the system of record",
            desc: "Every step should point to the system where the work happens. Notion isn't a system of record."
          },
          {
            id: "ship-80",
            title: "Ship the 80%",
            desc: "Don’t wait for perfection. Publish the draft map and refine it in the open."
          }
        ]
      },
      {
        title: "What We Won’t Do",
        items: [
          {
            id: "no-theater",
            title: "No documentation theater",
            desc: "Long, static docs that look good but go stale are worse than no docs."
          },
          {
            id: "no-duplicate-systems",
            title: "No duplicate systems of record",
            desc: "If work happens in a system, the map links to it — it doesn’t copy it."
          },
          {
            id: "no-unowned",
            title: "No unowned workflows",
            desc: "If a process doesn’t have an owner, it doesn’t get published."
          }
        ]
      }
    ]
  },
  {
    slug: "principles",
    title: "Principles",
    summary: "The rules that keep the atlas trustworthy.",
    intro: "The method is simple, but it only works when these principles are non‑negotiable.",
    groups: [
      {
        items: [
          {
            id: "source-of-truth",
            title: "Make the map the source of truth",
            desc: "Processes, roles, and systems are connected, not scattered. If it isn't connected, it isn't real."
          },
          {
            id: "one-owner",
            title: "One owner, one outcome",
            desc: "Every workflow has a single accountable owner and a clear definition of done. No shared ambiguity."
          },
          {
            id: "fewer-docs",
            title: "Fewer docs, more links",
            desc: "Short, linked steps beat long documents. Capture the minimum and connect it to everything else."
          },
          {
            id: "keep-it-alive",
            title: "Keep it alive",
            desc: "Outdated steps are worse than missing ones. Routine reviews and alerts prevent rot."
          }
        ]
      }
    ]
  },
  {
    slug: "direction",
    title: "Direction",
    summary: "Pick the first workflow and set the edges.",
    intro:
      "Start with the part of the business that costs you the most time. That’s where the map earns its keep.",
    groups: [
      {
        items: [
          {
            id: "bottleneck",
            title: "Start with the bottleneck",
            desc: "Pick the workflow that interrupts you most. Map that first and let it set the system."
          },
          {
            id: "interfaces",
            title: "Define the interfaces",
            desc: "Where teams hand off is where momentum dies. Make those edges explicit and owned."
          },
          {
            id: "system-of-record",
            title: "Name the system of record",
            desc: "Every step should point to the system where the work happens. Notion isn't a system of record."
          }
        ]
      }
    ]
  },
  {
    slug: "building",
    title: "Building",
    summary: "Write steps that can be executed without meetings.",
    intro:
      "Write steps to be executed. Link the system of record and keep each step clear enough to run without a meeting.",
    groups: [
      {
        items: [
          {
            id: "commands",
            title: "Write steps like commands",
            desc: "Use verbs, not paragraphs. Each step is an action someone can execute without a meeting."
          },
          {
            id: "link-why",
            title: "Link the why",
            desc: "Attach the rationale, not the novel. Give enough context to prevent debates."
          },
          {
            id: "templates",
            title: "Attach the template",
            desc: "If a step needs a doc, make it a linked template. Remove blank‑page friction."
          },
          {
            id: "ship-80",
            title: "Ship the 80%",
            desc: "Don’t wait for perfection. Publish the draft map and refine it in the open."
          }
        ]
      }
    ]
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    summary: "Keep the map alive with clear ownership.",
    intro:
      "If a process doesn’t get maintained, it’s not a process — it’s a rumor. Maintenance makes the map trustworthy.",
    groups: [
      {
        items: [
          {
            id: "review-rhythm",
            title: "Own the review rhythm",
            desc: "Every core process has a review date and a named owner. No exceptions."
          },
          {
            id: "surface-stale",
            title: "Surface stale steps",
            desc: "Flag steps tied to systems you changed. Staleness is a signal, not a surprise."
          },
          {
            id: "retire",
            title: "Retire on purpose",
            desc: "Archive obsolete workflows so new hires don't follow ghosts."
          }
        ]
      }
    ]
  },
  {
    slug: "cadence",
    title: "Cadence",
    summary: "Light rhythms that prevent decay.",
    intro: "A light rhythm keeps your map alive without turning it into busywork.",
    groups: [
      {
        items: [
          {
            id: "weekly",
            title: "Weekly: unblock",
            desc: "Open the map, spot friction, assign ownership, and close the loop."
          },
          {
            id: "monthly",
            title: "Monthly: consolidate",
            desc: "Combine duplicate workflows, standardize templates, and cut noise."
          },
          {
            id: "quarterly",
            title: "Quarterly: audit",
            desc: "Review the highest‑impact workflows against actual execution data."
          }
        ]
      }
    ]
  },
  {
    slug: "signals",
    title: "Signals",
    summary: "What to measure to prove it works.",
    intro: "The right signals tell you whether your map is reducing friction or just adding pages.",
    groups: [
      {
        items: [
          {
            id: "time-to-answer",
            title: "Time to answer",
            desc: "How long it takes for a teammate to find an answer without asking."
          },
          {
            id: "handoff-delay",
            title: "Handoff delay",
            desc: "Time between a request and the next owned action."
          },
          {
            id: "stale-rate",
            title: "Stale rate",
            desc: "Percent of workflows with steps older than your review window."
          },
          {
            id: "interruptions",
            title: "Interruptions",
            desc: "Number of questions routed to a single person per week."
          }
        ]
      }
    ]
  }
];
