class WordsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <form action = "game.html" method="GET" onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} name="var" rows="15" cols="40"
         placeholder="Enter your words..." onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <WordsForm />,
  document.getElementById('root')
);