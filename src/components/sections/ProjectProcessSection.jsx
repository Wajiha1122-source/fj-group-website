import { motion } from "framer-motion"
import {
  FaClipboardCheck,
  FaDraftingCompass,
  FaFileSignature,
  FaTools,
  FaCogs,
  FaPlug,
  FaSyncAlt
} from "react-icons/fa"
import "../../styles/components/projectProcess.scss"

const processSteps = [
  {
    icon: FaClipboardCheck,
    title: "Site Assessment"
  },
  {
    icon: FaDraftingCompass,
    title: "System Design"
  },
  {
    icon: FaFileSignature,
    title: "System Approval"
  },
  {
    icon: FaTools,
    title: "System Installation"
  },
  {
    icon: FaCogs,
    title: "Commissioning"
  },
  {
    icon: FaPlug,
    title: "Net Metering"
  },
  {
    icon: FaSyncAlt,
    title: "Performance Assurance"
  }
]

export default function ProjectProcessSection() {
  return (
    <section className="project-process-section">
      <div className="container project-process-container">
        <motion.div
          className="project-process-header"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="project-process-tag">SOLAR PROJECT INITIATION</span>
          <h2>Smart & Affordable Solar Installation</h2>
        </motion.div>

        <div className="project-process-track" aria-label="Solar project process">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                className="project-process-step"
                key={step.title}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut"
                }}
              >
                <div className="project-process-icon">
                  <Icon aria-hidden="true" />
                </div>
                <strong>{index + 1}</strong>
                <span>{step.title}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
