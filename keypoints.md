#Libs
- ajax requests lib: axios
- promise conversion in middleware: ReduxPromise
- delay, math operations lib: lodash
- charts: react-sparklines

#avoid state mutations in reducers
-add element:
```[...state, addedData]```

#es6 tips
- instead of `{weather: weather}` we can use `{weather}`

#ref system
- get direct reference to component `<div ref="map"></div>` `this.refs.map`

#lodash functions
- ```_.mapKeys(posts, 'id')``` - posts is array of objects, each object gains key that is equal to each object id
- ```_.map(this.props.posts, post => {render jsx})```

#Do something when component show up
- There is a life cycle event in a component. just add function to the component componentDidMount(){}
- componentWillMount() 

#form states

- pristine - no input touched
- touched - user has focused input
- invalid

#get id from url
`const {id} = this.props.match.params`

that's the same as `const id = this.props.match.params.id`
