class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hidden message</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// console.log("App is running!");

// const app = {
//   title: "Visibility Toggle",
//   buttonText: ["Show Details"],
//   message: [],
// };

// const appRoot = document.getElementById("app");

// let count = 0;
// const toggleButton = () => {
//   if (count % 2 == 0) {
//     app.buttonText = ["Show Details"];
//     app.message = [];
//     count++;
//     render();
//   } else {
//     app.buttonText = ["Hide Details"];
//     app.message = ["Hidden message"];
//     count++;
//     render();
//   }
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleButton}>{app.buttonText}</button>
//       <p>{app.message}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
