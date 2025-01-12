import {} from 'react'
import { ScrollView, Text, StyleSheet, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


//Components

import CarouselModels from '../../../Dinamics/CarrouselModels';
//Styes

import { ThemeProvider } from '../../../../../context/themeContext';
import { useTheme } from '../../../../../context/themeContext'
import { carouselDataImagesContent } from '../../../Data';

const StoryPlayers = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({

        main: {
            width: "95%",
            padding: 12,
            marginInline: 12,
            marginBlock: 24,
            borderRadius: 12,
            shadowColor: theme.colors.dark.tertiary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            backgroundColor: theme.colors.dark.tertiary,
        },

        titleColors: {
            fontSize: 32,
            marginBlockStart: 12,
            marginInlineStart: 6,
            fontWeight: "bold",
            marginBottom: 10,
            color: theme.colors.white.primary,
        },
        title: {
            color:theme.colors.red.primary,
            fontSize: 32,
            marginBlockStart: 12,
            marginInlineStart: 6,
            fontWeight: "bold",
            marginBottom: 10,
        },
        paragraph: {
            marginTop: 10,
            color: theme.colors.white.primary,
            fontSize: 18,
            lineHeight: 26
        }
    });
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <CarouselModels images={carouselDataImagesContent.setSix}   autoPlay={true}   indicatorColor="#ff0000"   imageStyle={{ height: 300 }}   />
                    <Text style={styles.titleColors}>
                        Hong Kong <Text style={styles.title}>Illegal Racers</Text>
                    </Text>
                    <Text style={styles.paragraph}>
                        In Hong Kong, illegal street racing is a serious concern, with the
                        majority of drivers participating in these activities on weekends.
                        These activities often involve using modified cars, modifications
                        that can increase speed and agility, and are often performed at
                        night to avoid detection. As with Singapore, local authorities
                        maintain constant vigilance to curb such practices, employing
                        measures such as surveillance cameras and intensive patrols.
                    </Text>
                </View>                
            </ScrollView>
        </SafeAreaView>
    );
}

export default StoryPlayers;