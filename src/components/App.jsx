import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Buttons';
import Section from './Section';
import Notification from './Notification';
// ? // Компонент класу зі своїм стейтом, в залежності від якого працюють інші компоненти, що знаходяться в середині нього ;
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // ? // Універсальна функція, що при натисканні на кнопку оновлює стейт екземпляра класу ;
  onLeaveFeedback = event => {
    this.setState(prevState => {
      return { [event.target.name]: (prevState[event.target.name] += 1) };
    });
  };
  // ? // Підрахунок кількості відгуків ;
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  // ? // Процентне відношення позитивних відгуків ;
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  // ? // Рендер усіх компонентів ;
  render() {
    return (
      <div>
        <Section title="Please, leave your feedback!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
