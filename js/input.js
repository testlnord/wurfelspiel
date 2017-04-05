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
      // <form action = "game.html" method="GET" onSubmit={this.handleSubmit}>
      //   <textarea value={this.state.value} name="var" rows="15" cols="40"
      //    placeholder="Enter your words..." onChange={this.handleChange} />
      //   <input type="submit" value="Submit" />
      // </form>
      
      <form className="form-horizontal" action = "game.html" method="GET" onSubmit={this.handleSubmit}>
      <fieldset>
      <div className="form-group">
        <label className="col-md-12 control-label" for="textarea"></label>
        <div className="col-sm-9">                     
          <textarea className="form-control" id="textarea" value={this.state.value}
          name="var" onChange={this.handleChange}>Enter your words</textarea>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-12 control-label" for="Submit"></label>
        <div className="col-md-12">
          <button id="Submit" name="Submit" className="btn btn-primary">Submit</button>
        </div>
      </div>

      </fieldset>
      </form>
    );
  }
}

ReactDOM.render(
  <WordsForm />,
  document.getElementById('root')
);