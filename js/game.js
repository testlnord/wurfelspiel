class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
    	value: '',
      words: this.parseInput(decodeURIComponent(location.search.substring(5))),
      div: document.createElement("div")
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

  createChild(text) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
  return p;
  }

  handleSubmit() {
      var div = this.state.div;
      while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
      }
      var words = this.state.words;
      for(var i = 0; i < words.length; i++) {
        var random = words[i][Math.floor(Math.random()*(words.length-1))];
        div.appendChild(this.createChild(random));
      }
      document.body.appendChild(div);
  }

  render() {
    return (
      <div>
        <input type="button" value="Throw dice" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.getElementById('root')
);