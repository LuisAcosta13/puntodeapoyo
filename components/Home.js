import { StyleSheet, View, Text } from "react-native"
import Resources from "./Resources"

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Punto de apoyo</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.subtitle}>
                    Muchas veces lo mas dificil no es lo que vivimos, sino vivirlo en soledad. 
                    Punto de apoyo es una iniciativa para escuicharte, acompañarte y recordarte que hay un lugar donde 
                    no tenes que explicar nada para ser entendido.
                    
                </Text>
            </View>
            <Resources />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        width: '100%',

    },
    box: {
        marginVertical: 10,
    },
    title: {
        color: '#282929',
        fontSize: 40,
        fontWeight: 800,

    },
    subtitle: {
        color: 'green',
        fontWeight: 500,
        textAlign: 'center'
    }
})