# Intent
Reusable folder

# Usage

```javascript
const App = () => {

  const test = () => {
    console.log('test')
  }
  return (<View style={{padding: 10}}>
    <DefaultButton buttonStyle={{backgroundColor: 'blue', borderRadius: 10}} title='Click me' onPressOut={test} />
    <IconButton icon='account' iconSize={24} iconSide={eIconSide.LEFT} title='Click me with Icon' onPressOut={test} />
    <GroupButton buttons={[
      <DefaultButton title="1" key={1} buttonStyle={{backgroundColor: 'blue'}}/>,
      <DefaultButton title="2" key={2} buttonStyle={{backgroundColor: 'yellow'}}/>,
      <DefaultButton title="3" key={3} buttonStyle={{backgroundColor: 'green'}}/>,
      <IconButton icon='yahoo' iconSize={24} iconSide={eIconSide.RIGHT} title="Check" buttonStyle={{backgroundColor: 'red'}} />
    ]} />
    <DefaultInput placeholder='Some text here' />
    <IconInput placeholder='Check my icon' iconSide={eIconSide.LEFT} size={24} name='facebook' />
    <GroupInput inputs={[
      <DefaultInput key={1} placeholder='Some text here' />,
      <DefaultInput key={2} placeholder='Some text there' />,
      <IconInput key={3} placeholder='Icon here' iconSide={eIconSide.LEFT} size={24} name='facebook' />
    ]} />
  </View>)
};
```