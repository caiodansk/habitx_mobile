import {View, Text, TextInput, Button} from 'react-native'
import styles from './style';

export default function Habitx({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Habitx</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Criar um hábito</Text>

                <TextInput style={styles.input} placeholder='Título' />
                <TextInput style={styles.input}  placeholder='Descrição' />

                <Button title='Salvar' style={styles.button} onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
}