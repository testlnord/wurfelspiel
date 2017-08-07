class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      words: this.parseInput(this.getParams(location.search)['Data']),
      currentWords: [],
      dices: [],
      div: document.createElement("div")
    };

    this.handleDiceThrow = this.handleDiceThrow.bind(this);
    this.parseInput = this.parseInput.bind(this);
    this.getParams = this.getParams.bind(this);
    this.determineFontSize = this.determineFontSize.bind(this);
    this.isImage = this.isImage.bind(this);
    this.createWords = this.createWords.bind(this);
  }

  getParams(query){
    if (!query) {
      return { };
    }

    return (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        let [ key, value ] = param.split('=');
        params[key] = value;
        return params;
      }, { });
  };


  parseInput(input) {
    input = LZString.decompressFromEncodedURIComponent(input).replace(/\+/g,' ');
    return input.split('\n\n').map(x => x.split('\n').filter(Boolean));
  }

  isImage(word) {
    var expr = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expr);
    return word.match(regex);
  }

  determineFontSize(word) {
    var length = word.length;
    if(length <= 10)
      return "30pt";
    else if(length <= 15)
      return "25pt";
    else
      return "20pt";
  }

  createWords(words) {
      for(var i = 0; i < words.length; i++) {
        var randomWord = words[i][Math.floor(Math.random()*(words[i].length))];
        this.state.currentWords[i] = randomWord;
    }
  }
  handleDiceThrow() {
    this.createWords(this.state.words);
    this.state.dices=[];
    for (var i=0; i < this.state.currentWords.length; i++) {
      var word = this.state.currentWords[i];
      var child;
        if (this.isImage(word)){
          child = <img src={word} />; 
      } else {
          child = <p>{word}</p>;
      }
    this.state.dices.push(<div className="wrap">
                            <div className="container" style={{"font-size" : this.determineFontSize(word)}}>
                              {child}
                            </div>
                          </div>)
    }
  this.forceUpdate();
}
  render() {
    return (
      <div className="main">
        <div className="btnContainer">
          <button type="submit" className="btn btn-primary btn-lg" onClick={this.handleDiceThrow}>Würfeln!</button>
        </div>
        <div className="wordsContainer" id="wordsContainer">
          {this.state.dices}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.getElementById('root')
);
