import { StyleSheet, View, Text, ScrollView } from "react-native"

const resources = ['📚 Biblioteca', '🧘 Kit de bienestar', '📞 Puntos de ayuda']

export default function Resources() {
    return (
        <ScrollView style={styles.container}>
            {resources.map((item, i) => (
                <View style={styles.itemBox}>
                    <Text key={i} style={styles.item}>{item}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    itemBox: {
        borderRadius: 8,
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 10,
    },
    item: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 500,
    }
})