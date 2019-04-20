# Searching Quranic Verse

This react app explores basics of react app creation and its purpose is to be a tutorial documenting the typical steps.

First, we create the scaffolding using `npx` as follows:

```
npx create-react-app verse-search
```

### building the basic scaffolding

Next, I will delete all the contents inside the `src` folder and intead create `index.js` file with the following contents.

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

ReactDOM.render(<App />, document.querySelector('#root'));
```

Then, we create a folder under `src` called `component` and create `App.js` file with the following content.

```javascript
import React from "react";

class App extends React.Component {
  render() {
    return <div>React started successfully...</div>;
  }
}

export default App;
```

After that we can start the app by `yarn start` (or `npm start`), and head over to

http://localhost:3000/

### Semantic UI

I am going to use **Semantic UI** as styling engine. For that I search cdn site and get it from the following link and insert it in the `public/index.html` file.

https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

### Search Verse Component

The plan is as follows. We will create a Stateful component called `SearchVerse` which will contain input form for searching verses by a key word. The results array of verses that has that keywords is returned to the parent `App` which will then send them as `props` to another child that will `DisplayVerse`. The verses will be searched through an API.

Given this understanding let us first create our `SearchVerse` structure as follows.

```javascript
import React from "react";

class SearchVerse extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter search term:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchVerse;
```

Also, a little bit of Semantic UI in the `App` file as follows:

```javascript
class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse />
      </div>
    );
  }
}
```

### State system and passing information back and forth

Now comes the tricky parts. First, we will create a state inside `SearchVerse` that would hold the value of `input` form as the user types some term inside the search bar. This is achieved by the followng code which will just display whatever the user types:

```javascript
//insie the SearchVerse.js file

class SearchVerse extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter search term:</label>
            <input
              type="text"
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
        <p>You are searching for: {this.state.term}</p>
      </div>
    );
  }
}
```

Next, what happens after the `submit` which occurs after pressing `enter`? We want two things to happen

1. first, we do NOT want to refresh the page by trying to send the form over server, that means we want to prevent default i.e., `event.preventDefault()`.
2. We want somehow to pass the search term to the parent, i.e., `App.js`. How to do that?

For that, two steps are needed:
a. In the `App` pass a prop which is a function to the child as follows:

```javascript
class App extends React.Component {
  onFormSubmit = term => {
    console.log(`we are searching for ${term}`);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
```

b. in the child we implement the handler function and pass the internal state (which we already populated at the time of input search `onChange` handler) to the props called `onSubmit` in the `App`, as follows:

```javascript
class SearchVerse extends React.Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Enter search term:</label>
            <input
              type="text"
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
        <p>You are searching for: {this.state.term}</p>
      </div>
    );
  }
}
```

### API
