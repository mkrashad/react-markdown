import React from "react";
import { Window, TitleBar, Text } from "react-desktop/windows";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./styles/main.scss";

// Markdown Text Example
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  static defaultProps = {
    color: "#cc7f29",
    theme: "dark"
  };

  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder,
      width: 500,
      height: 500,
      hidden: false,
      isMaximized: true
    };

    // Binding functions
    this.handleMinimize = this.handleMinimize.bind(this);
    this.toggleMaximize = this.toggleMaximize.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Minimize Window
  handleMinimize() {
    this.setState({
      width: 499,
      height: 40,
      isMaximized: this.state.isMaximized
    });
  }

  // Maximize Window
  toggleMaximize() {
    this.setState({
      isMaximized: !this.state.isMaximized,
      height: this.state.height === 500 ? 800 : 500,
      width: this.state.width === 500 ? 1000 : 500
    });
  }

  // Close Window
  handleClose() {
    this.setState({
      hidden: true
    });
  }

  // Change the text
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/* Main Window */}
        <Window
          className="window"
          color={this.props.color}
          theme={this.props.theme}
          chrome
          height={this.state.height}
          width={this.state.width}
          hidden={this.state.hidden}
          padding="2%"
        >
          {/* TitleBar */}
          <TitleBar
            title="Command Prompt"
            controls
            isMaximized={this.state.isMaximized}
            onCloseClick={this.handleClose}
            onMinimizeClick={this.handleMinimize}
            onMaximizeClick={this.toggleMaximize}
            onRestoreDownClick={this.toggleMaximize}
          />
          {/* Text in window */}
          <Text color={this.props.theme === "dark" ? "white" : "#333"}>
            {/* Editor Component */}
            <Editor
              markdown={this.state.markdown}
              onChange={this.handleChange}
              width={this.state.width}
            />
          </Text>
        </Window>
        {/* Preview Component */}
          <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;
