import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="experience">
        <div className="row experience">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.experience &&
              resumeData.experience.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfJoining} {item.YearOfJoining} -{" "}
                          {item.MonthOfPassing ?? "Present"}{" "}
                          {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
