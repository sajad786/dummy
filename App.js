import { View, Text, Button } from 'react-native'
import React from 'react'
// import { Provider } from 'react-redux'
// import { store } from './src/redux/store'
import Home from './src/redux/Screens/Home/Home'
import GlowingSun from './src/redux/components/GlowingSun'
import BounceAnimation from './src/redux/components/BounceAnimation'


const App = () => {

  return (
    <>
      <View style={{flex:1 }}>
          <View style={{width: 200, height:100 , backgroundColor:'grey', marginTop:20, justifyContent:'center', alignItems:'center', alignSelf:'center'}} >
            <BounceAnimation 
            textStyle={{fontSize:12, color:'white'}}
            text={'Animation'}
            isImage={false}
            />
          </View>

     
      </View>
    </>
  )
}

export default App