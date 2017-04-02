class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
    	value: '',
			input: decodeURIComponent(location.search.substring(5))
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  parseInput(input) {
    return input.split('\n\r').map(x => x.split('\n').filter(Boolean));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.getElementById('root')
);