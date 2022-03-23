# Helpers

```javascript

<View style={{height: regulateHeight(20)}}></View>
```

# Sample Views

Include using of FlatList

```javascript
const App = () => {
  
  const data = [
    {title: 'apple', id: 1}, 
    {title: 'peach', id: 2}, 
    {title: 'bananna', id: 3},
    {title: 'pineapple', id: 4},
    {title: 'strawberry', id: 5},
    {title: 'raspberry', id: 6},
    {title: 'blueberry', id: 7},
    {title: 'orange', id: 8}
  ]

  const renderItem = (({item}) => {
    return <View style={{padding: 10}}>
      <Text>{item.title}</Text>
    </View>
  })
  
  return (<View style={{flex:1}}>
    <View style={{flex:1, backgroundColor: 'red'}}>
      <Text style={{fontSize: regulateFont(24)}}>Text 1</Text>
      <View style={{flex: 1, backgroundColor:'yellow'}}></View>
      <View style={{flex: 1, backgroundColor: 'purple'}}></View>
    </View>
    <View style={{flex:1, backgroundColor: 'blue'}}>
      <Text style={{fontSize: regulateFont(18)}}>Text 2</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
    <View style={{flex:0.5, backgroundColor: 'green'}}>
      <Text style={{fontSize: regulateFont(14)}}>Text 3</Text>
    </View>
  </View>)
};

```