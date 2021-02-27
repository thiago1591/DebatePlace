import React,{useState,useEffect} from 'react';
import {StyleSheet} from 'react-native'
import UserAvatar from "@muhzi/react-native-user-avatar";
import { UserInfoContainer, UserName, Title, Message } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const TemaDebate = ({debate}) => {
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        if (Object.keys(debate).length !== 0) {
          setIsLoad(true)
        }
      }, [debate])

    return (
        <>
            <UserInfoContainer>
                <ShimmerPlaceHolder
                    shimmerStyle={styles.userAvatar}
                    LinearGradient={LinearGradient}
                    autoRun={true}
                    visible={isLoad}>
                    <UserAvatar size={30} backgroundColor="#0be881"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/672px-Aristotle_Altemps_Inv8575.jpg" />
                </ShimmerPlaceHolder>

                <ShimmerPlaceHolder
                    shimmerStyle={styles.userName}
                    LinearGradient={LinearGradient}
                    autoRun={true}
                    visible={isLoad}>
                   <UserName>{debate.nome_user}</UserName>
                </ShimmerPlaceHolder>
                
            </UserInfoContainer>

            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                shimmerStyle={styles.title}
                autoRun={true}
                visible={isLoad}>
                <Title>{debate.titulo_debate}</Title>
            </ShimmerPlaceHolder>
            
            <ShimmerPlaceHolder
                shimmerStyle={{marginBottom:'30%'}}
                shimmerColors={['transparent', 'transparent', 'transparent']}
                LinearGradient={LinearGradient}
                autoRun={true}
                visible={isLoad}>
                <Message>{debate.mensagem_debate}</Message>
            </ShimmerPlaceHolder>

        </>
    )
}

const styles = StyleSheet.create({
    userAvatar:{
        width:40,
        height:40,
        borderRadius:20,
    },
    userName:{
        alignSelf:'center',
        marginLeft:15,
        width:'40%',
        height:10
    },
    title:{
        alignSelf:'center',
        marginTop:10,
        height:10
    }
})


export default TemaDebate;