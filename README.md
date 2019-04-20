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