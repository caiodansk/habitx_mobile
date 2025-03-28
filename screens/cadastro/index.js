import {View, Text, TextInput, Button} from 'react-native'
import styles from './style'

export default function Cadastro({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.logoText}>Habitx</Text>
            </View>
            
            <View style={styles.forms}>
                <Text style={styles.title}>Tela de Cadastro</Text>
                <TextInput style={styles.input} placeholder='Usuário'/>
                <TextInput style={styles.input} placeholder='Email'/>
                <TextInput style={styles.input} placeholder='Senha'/>
                <TextInput style={styles.input} placeholder='Repetir senha'/>

                <Button style={styles.button} title='Cadastrar' onPress={() => navigation.navigate('Home')}/>
            </View>
            
        </View>
    );
}