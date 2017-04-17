class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      words: this.parseInput(this.getParams(location.search)['var']),
      div: document.createElement("div")
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseInput = this.parseInput.bind(this);
    this.getParams = this.getParams.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
  }

  getParams(query){
    if (!query) {
      return { };
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        let [ key, value ] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, { });
  };


  parseInput(input) {
    return input.split('\n\r').map(x => x.split('\n').filter(Boolean));
  }

  image(word) {
    var expr = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expr);
    return word.match(regex);

  }

  changeFontSize(word) {
    var length = word.length;
    if(length <= 10)
      return "30pt";
    else if(length <= 15)
      return "25pt";
    else
      return "20pt";
  }

  handleSubmit() {
      var div = this.state.div;
      while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
      }
      var words = this.state.words;
      for(var i = 0; i < words.length; i++) {

        var random = words[i][Math.floor(Math.random()*(words[i].length))];

        var wrap = document.createElement("div");
        var container = document.createElement("div");
        wrap.appendChild(container);
        wrap.className = 'wrap';
        container.className = 'container';

        var child;
        if (this.image(random)) {
          child = document.createElement("img");
          child.src = random;
        }
        else {
          child = document.createTextNode(random);
          container.style.fontSize = this.changeFontSize(random);
        }
        container.appendChild(child);
        div.appendChild(wrap);

      }
      document.body.appendChild(div);
  }

  render() {
    return (
      <div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Throw dice</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.getElementById('root')
);