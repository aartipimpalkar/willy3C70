import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import *as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
import { TextInput } from 'react-native-gesture-handler';

export default class TransactionScreen extends React.Component
{
    constructor()
    {
        super()
        this.state={
            hasCamPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:"normal",
            scannedBookid:'',
            scannedSstudentid:''


        }
    }
    getCameraPermissions=async(id)=>{
        
           const{status}=await Permissions.askAsync(Permissions.CAMERA);
           this.setState=({
               hasCamPermission:status==="granted",
               scanned:false,
               buttonState:id,
               scanned:false
           })
        }

        handleBarCodeScanner=async({type,data})=>{
            this.setState={
                scannedData:data,
                scanned:true,
                buttonState:"normal"
            }
        }
    
        
    render()
    {
        const hasCameraPermissions=this.state.hasCamPermission
       if(this.state.hasCamPermission &&this.state.buttonState!=="normal")
        {
            return(
               // <Text>
              //      {this.state.hasCamPermission===true?this.state.scannedData:"request for Permissions"}
               // </Text>
               <BarCodeScanner
                 onBarCodeScanned={this.state.scanned?"No data yet" :this.handleBarCodeScanner}
               
               />
            )
        }
        else 
        {
        return(
            <View style={styles.container}>
                <view>
                    <Image
                    source={require("../assets/bookLogo.jpg")}
                    style={{width:200,height:200}}/>
                    <Text style={{textAlign:"center",fontSize:30}}>Willy</Text> 
                </view>
                
            
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Book Id"
                    value={this.state.scannedBookid}
                    />
                 <TouchableOpacity style={styles.scanButton}
                 onPress={()=>{
                     this.getCameraPermissions("BookId")
                 }}>
                   <Text style={styles.buttonText}>Scan</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Student Id"
                    value={this.state.scannedSstudentid}
                    />
                 <TouchableOpacity style={styles.scanButton}
                 onPress={()=>{
                    this.getCameraPermissions("StudentId")
                }}
                 >
                   <Text style={styles.buttonText}>Scan</Text>
                   </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
     // marginLeft: 30,
      width:80,
      height:40,
      borderWidth:1.5,
      borderLeftWidth:0,
      textAlign:"center",
      justifyContent:"center",
     // textAlignVertical:"center"
    },
    buttonText:{
      fontSize: 20,
    },
    buttonText:{
        fontSize:15,
        textAlign:"center",
        marginTop:15
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputBox:{
        width:180,
        height:40,
        borderWidth:2.5,
        borderRightWidth:0,
        fontSize:20,
        textAlign:"center"
    }
  });