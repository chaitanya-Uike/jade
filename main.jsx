import * as Jade from "./jade";

function MyBox() {
  return <div>My Box</div>;
}

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>this is Jade</p>
      <MyBox />
    </div>
  );
}

Jade.render(<App />, document.querySelector("#app"));
