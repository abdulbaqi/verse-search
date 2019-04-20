# Searching Quranic Verse

This react app explores basics of react app creation and its purpose is to be a tutorial documenting the typical steps.

First, we create the scaffolding using `npx` as follows:

```
npx create-react-app verse-search
```

Next, I will delete all the contents inside the `src` folder and intead create `index.js` file with the following contents.

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

ReactDOM.render(<App />, document.querySelector('#root'));
```

Then, we create a folder under `src` called `component` and create `App.js` file with the following content.

```javascript
import React from 'react';

class App extends React.Component {
    render(){
        return <div>React started successfully...</div>
    }
};

export default App;
```

After that we can start the app by `yarn start` (or `npm start`), and head over to

http://localhost:3000/
