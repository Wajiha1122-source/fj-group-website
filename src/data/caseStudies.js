const case1 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520228/case1_ok7wsk.mp4"
const case2 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520244/case2_jndrdt.mp4"
const case3 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520279/case3_simxkg.mp4"
const case4 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520306/case4_xtxceh.mp4"

export const caseStudies = [
  {
    title: "Industrial Water Pumping System",
    location: "Pakistan",
    video: case1,
    desc:
      "Delivered a high-efficiency submersible pumping system for continuous industrial water supply.",
    slug: "water-pumping",
    category: "Pumping Systems",
    intro:
      "This project focused on creating a dependable water-transfer arrangement for an industrial operating environment where continuity, equipment protection, and maintainability were central requirements.",
    highlights: [
      "Duty-focused pump and motor selection",
      "Protection and control planning",
      "Maintainable installation layout"
    ],
    sections: [
      {
        heading: "The engineering challenge",
        paragraphs: [
          "Industrial water demand can vary throughout the operating day, while the pumping equipment must continue to provide stable service. The system therefore needed to balance required flow and pressure with practical electrical and mechanical protection.",
          "Site conditions, water source characteristics, pipe routing, and access for future maintenance formed part of the overall design review."
        ]
      },
      {
        heading: "Our delivery approach",
        paragraphs: [
          "The project approach brought together the submersible pump, motor, pipework, electrical controls, and protection requirements as one coordinated package. Equipment selection was considered against the intended duty rather than as an isolated product choice.",
          "Installation planning also considered safe access, cable routing, connection integrity, and commissioning checks."
        ]
      },
      {
        heading: "Operational value",
        paragraphs: [
          "The completed arrangement supports consistent industrial water movement with a clearer basis for operation and maintenance. A coordinated system also makes it easier to monitor performance and identify changes before they become larger operational issues."
        ]
      }
    ]
  },
  {
    title: "Solar Powered Irrigation Project",
    location: "Agriculture Sector",
    video: case2,
    desc:
      "Implemented an INVT-based solar solution for off-grid irrigation systems.",
    slug: "solar-irrigation",
    category: "Solar Irrigation",
    intro:
      "The irrigation project paired solar generation with controlled pumping to support water delivery in a location where dependable grid power was not the preferred operating model.",
    highlights: [
      "Solar array and pumping duty coordination",
      "Variable-speed pump control",
      "Off-grid agricultural operation"
    ],
    sections: [
      {
        heading: "Matching sunlight, water, and crop demand",
        paragraphs: [
          "Solar irrigation design requires more than matching panel wattage to a motor rating. The engineering assessment must consider required daily water volume, pumping head, seasonal sunlight, source recovery, pipe losses, and the available irrigation window.",
          "These inputs help establish the pump duty and the solar capacity needed to support useful operation across changing conditions."
        ]
      },
      {
        heading: "Controlled solar pumping",
        paragraphs: [
          "An INVT-based control arrangement was used to coordinate solar power with pump operation. Variable control allows the system to respond to available energy while maintaining appropriate motor protection and practical pumping behavior.",
          "The installation approach also considered panel orientation, cable management, earthing, protection, and access for inspection."
        ]
      },
      {
        heading: "A practical off-grid model",
        paragraphs: [
          "The system demonstrates how solar pumping can support agricultural water requirements without treating the solar array and pumping equipment as separate projects. Coordinated design creates a clearer path to dependable operation and long-term maintenance."
        ]
      }
    ],
    sources: [
      {
        label: "INVT solar pump inverter solutions",
        url: "https://www.invt.com/solutions/solar-pump"
      }
    ]
  },
  {
    title: "Deep Well Drilling Project",
    location: "Rural Infrastructure",
    video: case3,
    desc:
      "Executed precision deep-well drilling for reliable groundwater extraction.",
    slug: "deep-well-drilling",
    category: "Drilling",
    intro:
      "The deep-well project required a controlled drilling process and a practical completion strategy to support groundwater access for rural infrastructure.",
    highlights: [
      "Site and formation awareness",
      "Controlled bore construction",
      "Preparation for pump installation"
    ],
    sections: [
      {
        heading: "Understanding the site",
        paragraphs: [
          "A groundwater well must respond to local ground conditions, the intended abstraction requirement, and the equipment that will later operate inside the bore. Early planning considers expected depth, bore diameter, drilling method, casing needs, and site access.",
          "Groundwater availability and quality can vary significantly, so field observations and appropriate testing remain important parts of well development."
        ]
      },
      {
        heading: "Drilling and well completion",
        paragraphs: [
          "The drilling process focused on maintaining bore control and preparing the well for reliable extraction. Casing, screen, gravel placement, cleaning, and development decisions depend on the encountered formation and the intended use.",
          "The completed bore also needs to accommodate the selected pump, rising main, electrical cable, and maintenance requirements."
        ]
      },
      {
        heading: "From borehole to working water system",
        paragraphs: [
          "A drilled well becomes useful infrastructure only when pumping equipment, controls, discharge pipework, and protection are correctly integrated. Treating these elements as one system supports safer commissioning and more predictable operation."
        ]
      }
    ],
    sources: [
      {
        label: "U.S. Geological Survey - Groundwater wells",
        url: "https://www.usgs.gov/special-topics/water-science-school/science/groundwater-wells"
      }
    ]
  },
  {
    title: "Water Distribution Network Upgrade",
    location: "Urban Development",
    video: case4,
    desc:
      "Modernized water-supply infrastructure with coordinated fittings, accessories, and engineering systems.",
    slug: "water-network",
    category: "Water Infrastructure",
    intro:
      "The network upgrade focused on improving how water moves through an urban distribution arrangement by reviewing hydraulic requirements, component condition, and practical maintainability.",
    highlights: [
      "Network and pressure review",
      "Coordinated valves, fittings, and pipework",
      "Improved isolation and maintenance access"
    ],
    sections: [
      {
        heading: "Reviewing the complete network",
        paragraphs: [
          "Water-distribution performance depends on pipe sizes, demand patterns, elevations, pump behavior, storage, and the arrangement of valves and branches. Upgrading individual components without understanding the network can move a problem rather than solve it.",
          "The project approach therefore considered the connections between hydraulic performance and the physical condition of the system."
        ]
      },
      {
        heading: "Component coordination",
        paragraphs: [
          "Pipes, fittings, valves, and accessories were considered as part of a coordinated route. Material compatibility, pressure rating, jointing method, isolation requirements, and installation access all influence long-term reliability.",
          "Clear isolation points can also reduce disruption when future inspection or maintenance is required."
        ]
      },
      {
        heading: "Supporting stable distribution",
        paragraphs: [
          "A structured network upgrade supports more predictable pressure management and creates a more maintainable foundation for future development. Hydraulic modeling tools can further help teams evaluate network behavior under changing demand."
        ]
      }
    ],
    sources: [
      {
        label: "U.S. EPA - EPANET water distribution modeling",
        url: "https://www.epa.gov/water-research/epanet"
      }
    ]
  }
]
