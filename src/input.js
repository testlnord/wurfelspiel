class WordsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      lz: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({lz: LZString.compressToEncodedURIComponent(this.state.value)});
    var k = 3;
    k + 3;
  }

  render() {
    return (
      <form className="form-horizontal" action = "game.html" method="GET" onSubmit={this.handleSubmit}>
        <fieldset>
        <div className="form-group">
          <label className="col-md-12 control-label" for="textarea"></label>
          <div className="col-sm-9">                     
            <textarea className="form-control" id="textarea" value={this.state.value}
            onChange={this.handleChange}>Enter your words</textarea>
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12 control-label" for="Submit"></label>
          <div className="col-md-12">
            <button id="Submit" name="Submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
        </fieldset>
         <input type="hidden" name="Data" value={this.state.lz}/>
      </form>
    );
  }
}

ReactDOM.render(
  <WordsForm />,
  document.getElementById('root')
);
