class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
    		value: '',
			words: location.search.substring(5).split('+')
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
	var i=0, doc = document, docFrag = document.createDocumentFragment();
	for (; i < Number(this.state.value) ; i++){
	     var elem = doc.createElement('input');
	     elem.type = 'button';
	     elem.value = this.state.words[i];
	     docFrag.appendChild(elem);
	}
	doc.body.appendChild(docFrag);

    event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the number of dices:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.getElementById('root')
);