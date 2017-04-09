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
    this.appendWord = this.appendWord.bind(this);
    this.appendImg = this.appendImg.bind(this);
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

  appendWord(text) {
    var p = document.createElement("p");
    var wrap = document.createElement("div");
    p.appendChild(wrap);
    wrap.className = 'wrap';
    wrap.appendChild(document.createTextNode(text));
    return p;
  }

  appendImg(src) {
    var p = document.createElement("p");
    var img = document.createElement("img");
    img.src = src;
    p.appendChild(img);
    return p;
  }

  handleSubmit() {
      var div = this.state.div;
      while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
      }
      var words = this.state.words;
      for(var i = 0; i < words.length; i++) {
        var random = words[i][Math.floor(Math.random()*(words[i].length-1))];
        if (this.image(random)) {
          div.appendChild(this.appendImg(random));
        }
        else {
          div.appendChild(this.appendWord(random));
        }
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