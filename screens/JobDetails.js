import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
Image,

TouchableOpacity
} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
var userId;

export default class JobDetails extends React.Component {
static navigationOptions = ({ navigation }) => {
  userId =  navigation.getParam('UserId');
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[],
   navigationOptions:null
  };
}
componentDidMount(){
fetch("https://customers.verser.com.au/AssetManagementServiceDev/inventorycontrol/order/32/jobById")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
  
  <View style={{
     height: .5,
     width:"90%",
     alignContent:"center",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>

);
}
ShowCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();  

 }

 

 
render(){
 if(this.state.loading){
  return( 
    
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
    
)}
else
{
return(
  

 <View style={styles.container}>
 
  <Text> {userId}</Text>
  
  <Text> {new Date().getDate()+'/'+(new Date().getMonth() + 1)+'/'+new Date().getFullYear()}</Text>


    
 <Card containerStyle={{width:270}}
 title={this.state.dataSource.JobNo}
 
 >
 <Text>
 {'Job No:'+this.state.dataSource.JobNo}
 </Text>
 <Text>
 {'Site Name:'+this.state.dataSource.SiteName}
 </Text>
 <Text>
 {'Technician Name:'+this.state.dataSource.TechnicianName}
 </Text>
 <Text>
 {'Job Status:'+this.state.dataSource.JobStatus}
 </Text>
 
 <Button
   onPress={_onLoginPressed}
   buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
   title='Show Details' />
</Card>
  
</View>


)}
}
}
const _onLoginPressed = () => {
  alert('buttonpressed');
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});