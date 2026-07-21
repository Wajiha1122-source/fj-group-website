import { useState } from "react"
import { motion } from "framer-motion"
import "../../styles/components/solarcalculator.scss"

export default function SolarCalculatorSection() {

  const [units, setUnits] = useState("")
  const [result, setResult] = useState(null)

  const calculateSystem = () => {
    if (!units || isNaN(units)) return
    const size = (parseFloat(units) / 120).toFixed(2)
    setResult(size)
  }

  return (
    <section className="solar-section">

      <div className="container solar-wrapper">

        {/* LEFT CONTENT */}
        <motion.div
          className="solar-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <span className="tag">SOLAR CALCULATOR</span>

          <h2>
            Advanced Customized<br />
            Solar Systems in Pakistan
          </h2>

          <p>
            Calculate your required solar system size instantly based on your monthly electricity consumption.
          </p>

        </motion.div>

        {/* RIGHT CALCULATOR */}
        <motion.div
          className="solar-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <h3>System Size Calculator</h3>

          <div className="field">
            <label htmlFor="monthly-units">Monthly Units (kWh)</label>
            <input
              id="monthly-units"
              type="number"
              placeholder="e.g. 500"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
          </div>

          <button onClick={calculateSystem}>
            Calculate
          </button>

          {result && (
            <motion.div
              className="result-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Required System Size:
              <span>{result} kW</span>
            </motion.div>
          )}

        </motion.div>

      </div>

    </section>
  )
}
