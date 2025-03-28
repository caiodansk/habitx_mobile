import {View, Text, Button, Image} from 'react-native'
import styles from './style';

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Habitx</Text>
            </View>
            <View style={styles.contentContainer}>
                {/* <Text style={styles.mainText}>Crie o seu primeiro hábito!</Text> */}

                {/* Exemplo de card de habitos */}
                <View style={styles.cardContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Acordar e se arrumar</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../assets/edit.png')} style={styles.icon} />
                        <Image source={require('../../assets/trash.png')} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Acordar e se arrumar</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../assets/edit.png')} style={styles.icon} />
                        <Image source={require('../../assets/trash.png')} style={styles.icon} />
                    </View>
                </View>
                
                <Button title='Adicionar hábito' style={styles.button} onPress={() => navigation.navigate('Habitx')} />
            </View>
        </View>
    );
}