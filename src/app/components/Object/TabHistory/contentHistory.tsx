import {} from 'react'
import {Text, ScrollView, SafeAreaView, Image, StyleSheet, View} from 'react-native'

const ContentHistory = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                   <View style={styles.box}>
                       <Text style={styles.title}>Japanese</Text>
                          <Text style={styles.subtitle}>Japanese Underworld Culture</Text>
                            <Text style={styles.paragraph}>
                              Japan's auto gangs in the 1980s were strongly associated with the
                              Bōsōzoku movement, which means "high-speed tribe." Originating in
                              the 1950s and peaking in the 1980s, the group was known for its
                              heavily modified motorcycles and cars and challenging behavior,
                              both in traffic and in social confrontations.
                            </Text>
                            <Text style={styles.paragraph}>
                              The members, usually young people between the ages of 16 and 20,
                              engaged in illegal activities such as clandestine racing,
                              vandalism and public riots. In many cases, they had links to the
                              Japanese mafia, the Yakuza, and were characterized by flashy
                              styles. These included uniforms called Tokko Fuku, inspired by
                              military attire, and customized vehicles with noisy exhausts,
                              vibrant paints, and accessories prohibited by Japanese laws.
                            </Text>
                            <Text style={styles.paragraph}>
                              Bōsōzoku culture also possessed elements of nationalism, such as
                              the use of Imperial Japanese flags and references to kamikaze
                              pilots of World War II. This subculture was portrayed in various
                              media, such as the Akira anime, which captured their rebellious
                              spirit and the impact they had on Japanese society at the time.
                              However, due to police repression and social changes, Bōsōzoku
                              gangs began to disappear in the 2000s, although some elements of
                              this culture can still be found at modified car events
                            </Text>        
                        <Text>..</Text>    
                   </View>

                   <View style={styles.box}>
                   <Text style={styles.title}>American</Text>
                      <Text style={styles.subtitle}>American Underworld Culture</Text>  
                            <Text style={styles.paragraph}>
                              Japan's auto gangs in the 1980s were strongly associated with the
                              Bōsōzoku movement, which means "high-speed tribe." Originating in
                              the 1950s and peaking in the 1980s, the group was known for its
                              heavily modified motorcycles and cars and challenging behavior,
                              both in traffic and in social confrontations.
                            </Text>
                            <Text style={styles.paragraph}>
                              The members, usually young people between the ages of 16 and 20,
                              engaged in illegal activities such as clandestine racing,
                              vandalism and public riots. In many cases, they had links to the
                              Japanese mafia, the Yakuza, and were characterized by flashy
                              styles. These included uniforms called Tokko Fuku, inspired by
                              military attire, and customized vehicles with noisy exhausts,
                              vibrant paints, and accessories prohibited by Japanese laws.
                            </Text>
                            <Text style={styles.paragraph}>
                              Bōsōzoku culture also possessed elements of nationalism, such as
                              the use of Imperial Japanese flags and references to kamikaze
                              pilots of World War II. This subculture was portrayed in various
                              media, such as the Akira anime, which captured their rebellious
                              spirit and the impact they had on Japanese society at the time.
                              However, due to police repression and social changes, Bōsōzoku
                              gangs began to disappear in the 2000s, although some elements of
                              this culture can still be found at modified car events
                            </Text>  
                        <Text>..</Text>    
                   </View>

                   <View style={styles.box}>
                   <Text style={styles.title}>Europe</Text>
                        <Text style={styles.subtitle}>Europe Underworld  Culture</Text>
                            <Text style={styles.paragraph}>
                              Japan's auto gangs in the 1980s were strongly associated with the
                              Bōsōzoku movement, which means "high-speed tribe." Originating in
                              the 1950s and peaking in the 1980s, the group was known for its
                              heavily modified motorcycles and cars and challenging behavior,
                              both in traffic and in social confrontations.
                            </Text>
                            <Text style={styles.paragraph}>
                              The members, usually young people between the ages of 16 and 20,
                              engaged in illegal activities such as clandestine racing,
                              vandalism and public riots. In many cases, they had links to the
                              Japanese mafia, the Yakuza, and were characterized by flashy
                              styles. These included uniforms called Tokko Fuku, inspired by
                              military attire, and customized vehicles with noisy exhausts,
                              vibrant paints, and accessories prohibited by Japanese laws.
                            </Text>
                            <Text style={styles.paragraph}>
                              Bōsōzoku culture also possessed elements of nationalism, such as
                              the use of Imperial Japanese flags and references to kamikaze
                              pilots of World War II. This subculture was portrayed in various
                              media, such as the Akira anime, which captured their rebellious
                              spirit and the impact they had on Japanese society at the time.
                              However, due to police repression and social changes, Bōsōzoku
                              gangs began to disappear in the 2000s, although some elements of
                              this culture can still be found at modified car events
                            </Text>  
                        <Text>..</Text>    
                   </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    box: {
        width: "100%",
        padding: 24,
        backgroundColor: "#080808",
        borderRadius: 12,
        textAlign: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 60,
    },

    title: {
        color: "#ff2626",
        fontSize: 32,
        marginBlock:-10,
        fontWeight: "600",
    },

    subtitle: {
        color: "#ff2626",
        fontSize: 24,
        fontWeight: "500",
        marginBlock: 12,
    },

    paragraph: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "400",
        marginBlock: 3,
        textAlign: 'justify',
        width: 440,
    },
    
    
})

export default ContentHistory;