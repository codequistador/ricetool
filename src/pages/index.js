import React from "react"

class Rice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reach: {},
      impact: {},
      confidence: "--",
      effort: "--",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  render() {
    const impactForCalc = Math.pow(this.state.impact, 2)
    const riceScore = Math.round(
      ((this.state.reach * this.state.confidence * (impactForCalc / 5)) /
        this.state.effort) *
        100
    )

    return (
      <div>
        <div>
          <h3>Reach</h3>
          <p>
            Product Design: 2<br />
            Engineers: 1<br />
            UI Devs: 1<br />
            End-users: 1
          </p>
          <input
            name="reach"
            type="number"
            value={this.state.reach}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <h3>Impact</h3>
          <p>One point for each</p>
          <ul>
            <li>
              Will this improve alignment between multiple groups/teams? (Just
              introducing a new component doesn't necessarily do this.)
            </li>
            <li>
              Will this reduce agony working with Bridge UI Components or
              building product?
            </li>
            <li>Will this help us meet NFRs?</li>
            <li>
              Do we know this is an immediate need for an upcoming feature?
            </li>
            <li>Will this be a win for the business</li>
            <li>
              is it part of a statement of work? (this could override
              everything).
            </li>
          </ul>
          <input
            name="impact"
            type="number"
            value={this.state.impact}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <h3>Confidence</h3>
          <p>Gut feeling</p>
          <ul>
            <li>Do we know the teams need this?</li>
            <li>Do we know it will have the impact we hope?</li>
            <li>Do we understand the problem we're trying to solve?</li>
            <li>Do we know how to do it?</li>
          </ul>
          <select
            name="confidence"
            value={this.state.confidence}
            onChange={this.handleInputChange}
          >
            <option value="--">--</option>
            <option value=".5">50%</option>
            <option value=".8">80%</option>
            <option value="1">100%</option>
          </select>
        </div>
        <div>
          <h3>Effort</h3>
          <p>Storypoints</p>
          <select
            name="effort"
            value={this.state.effort}
            onChange={this.handleInputChange}
          >
            <option value="--">--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="13">13</option>
            <option value="21">21</option>
          </select>
        </div>
        <div>
          <h4>Rice Score</h4>
          <span style={{ fontSize: "84px" }}>
            {isNaN(riceScore) ? "feed me" : riceScore}
          </span>
        </div>
      </div>
    )
  }
}

export default Rice
