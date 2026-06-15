import news1 from "../assets/images/news1.png"
import news2 from "../assets/images/news2.png"
import news3 from "../assets/images/news3.png"

export const newsData = [
  {
    image: news1,
    title: "FJ Group launches next-generation industrial systems",
    desc: "Building smarter infrastructure solutions for modern industries.",
    number: "01",
    slug: "next-generation-industrial-systems",
    category: "Industrial Systems",
    readTime: "5 min read",
    intro:
      "Modern industrial infrastructure performs best when pumping, energy, controls, and field equipment are planned as one connected system. This overview explains the thinking behind integrated engineering and how it supports reliable day-to-day operations.",
    highlights: [
      "Design around the complete operating environment",
      "Match equipment capacity to real demand",
      "Plan controls, protection, and maintenance together"
    ],
    sections: [
      {
        heading: "What makes an industrial system next-generation?",
        paragraphs: [
          "A modern system is not defined by a single advanced component. It is created when mechanical equipment, electrical power, control logic, safety protection, and operator needs are coordinated from the beginning.",
          "For water and energy projects, this means understanding flow, pressure, load patterns, environmental conditions, and future expansion before selecting equipment."
        ]
      },
      {
        heading: "Integration before installation",
        paragraphs: [
          "Good integration reduces mismatches between pumps, motors, inverters, pipework, sensors, and control panels. The engineering process should establish operating ranges, expected duty cycles, protection requirements, and how the system will respond when demand changes.",
          "This approach also makes commissioning clearer because every component has a defined role and measurable operating target."
        ]
      },
      {
        heading: "Reliability is designed into the lifecycle",
        paragraphs: [
          "Reliable infrastructure includes accessible maintenance points, clear isolation arrangements, suitable monitoring, and components selected for the actual site conditions. Documentation and operator guidance are equally important because long-term performance depends on how confidently the system can be inspected and maintained."
        ]
      }
    ]
  },
  {
    image: news2,
    title: "Reducing energy consumption through intelligent engineering",
    desc: "Focused on efficient technologies for a sustainable future.",
    number: "02",
    slug: "reducing-energy-consumption",
    category: "Energy Efficiency",
    readTime: "6 min read",
    intro:
      "Energy efficiency starts with understanding demand. In pumping and industrial applications, equipment should respond to the work actually required instead of operating continuously at maximum output.",
    highlights: [
      "Measure demand before selecting equipment",
      "Use variable control where operating conditions change",
      "Track performance throughout the system lifecycle"
    ],
    sections: [
      {
        heading: "Start with the operating profile",
        paragraphs: [
          "An engineering assessment should consider when energy is used, how frequently demand changes, and which loads dominate consumption. Oversized equipment may operate inefficiently, while undersized equipment can create reliability and maintenance problems.",
          "A realistic duty profile helps teams select appropriate motors, pumps, inverters, and control strategies."
        ]
      },
      {
        heading: "Control energy at the point of demand",
        paragraphs: [
          "Variable-speed control can help match motor output to changing flow or pressure requirements. Sensors and control logic can also prevent unnecessary operation, identify abnormal conditions, and coordinate multiple pieces of equipment.",
          "The correct control method depends on the process, so energy objectives must remain balanced with pressure, flow, safety, and production requirements."
        ]
      },
      {
        heading: "Efficiency needs continued attention",
        paragraphs: [
          "Commissioning establishes the initial operating baseline. Ongoing inspection, cleaning, alignment, leak management, and performance monitoring help preserve that efficiency as equipment and site conditions change."
        ]
      }
    ],
    sources: [
      {
        label: "U.S. Department of Energy - Industrial Assessment Centers",
        url: "https://www.energy.gov/mesc/industrial-assessment-centers-iacs"
      }
    ]
  },
  {
    image: news3,
    title: "Transforming industrial operations with automation",
    desc: "Delivering scalable and reliable enterprise-grade systems.",
    number: "03",
    slug: "industrial-operations-automation",
    category: "Automation",
    readTime: "5 min read",
    intro:
      "Industrial automation creates value when it improves visibility, consistency, and response time. The strongest solutions combine useful field data with controls that operators can understand and maintain.",
    highlights: [
      "Automate repeatable operating decisions",
      "Keep operators informed and in control",
      "Build systems that can expand over time"
    ],
    sections: [
      {
        heading: "Automation begins in the field",
        paragraphs: [
          "Sensors provide the information needed to understand pressure, flow, level, temperature, power, and equipment status. That data must be reliable and relevant before it can support automatic control.",
          "Control panels and software then convert field conditions into clear actions such as starting equipment, adjusting speed, changing duty sequences, or generating alarms."
        ]
      },
      {
        heading: "Design for people as well as equipment",
        paragraphs: [
          "Operators need understandable status information, practical alarm priorities, and manual control options for maintenance or unusual conditions. A complicated interface can reduce the value of otherwise capable technology.",
          "Training, labels, operating procedures, and accurate diagrams help turn automation into a dependable operational tool."
        ]
      },
      {
        heading: "Prepare for expansion",
        paragraphs: [
          "Scalable automation uses clear naming, modular panels, documented communication interfaces, and spare capacity where appropriate. This allows future sensors, equipment, and reporting functions to be added without redesigning the complete system."
        ]
      }
    ]
  }
]

export const latestNews = newsData[0]
