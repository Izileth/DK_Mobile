import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importamos o hook useNavigation

// Simula uma lista de palavras-chave com suas respectivas rotas
const keywordData = [
    { id: '1', title: 'Start', route: 'index' },
    { id: '2', title: 'History', route: 'history' },
    { id: '3', title: 'profile', route: 'profiles' },
    { id: '4', title: 'Content', route: 'contents' },
    { id: '5', title: 'About App', route: 'about-us' },
];

export default function SearchBar() {  // Removemos a prop navigation
    const navigation = useNavigation(); // Usamos o hook useNavigation
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    // Função para filtrar resultados baseado no input
    useEffect(() => {
        if (search.trim() === '') {
            setResults([]);
            return;
        }

        const filteredResults = keywordData.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setResults(filteredResults);
    }, [search]);

    // Função para navegar quando uma sugestão é selecionada
    const handleResultPress = (route) => {
        try {
            if (navigation) {
                navigation.navigate(route);
                setSearch('');
                setResults([]);
            }
        } catch (error) {
            console.warn('Error for Navigate:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput  placeholder="Search..." placeholderTextColor={'#ff2626'} value={search} onChangeText={setSearch}  style={styles.input}  />
            </View>
            {results.length > 0 && (
                <View style={styles.results}>
                    {results.map(result => (
                        <TouchableOpacity
                            key={result.id}
                            style={styles.resultItem}
                            onPress={() => handleResultPress(result.route)}
                        >
                            <Text style={styles.resultText}>{result.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        zIndex: 999, // Aumentado para garantir que todo o componente fique acima dos outros
    },
    searchBar: {
        width: '90%',
        padding: 2,
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        borderRadius: 6,
        position: 'relative', // Adicionado position
        zIndex: 998,
    },
    input: {
        color: '#ff2626',
        paddingHorizontal: 10,
        fontSize: 12,
        position: 'relative', // Adicionado position
        zIndex: 3,
    },
    results: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#1a1a1a',
        color: '#ff2626',
        borderRadius: 4,
        marginTop: 5,
        zIndex: 999, // Aumentado para garantir que todo o componente fique acima dos outros
    },
    resultItem: {
        padding: 15,
        color: '#ff2626',
        position: 'relative', // Adicionado position
        zIndex: 999, // Aumentado para garantir que todo o componente fique acima dos outros
    },
    resultText: {
        fontSize: 16,
        fontWeight: '100',
        color: '#ff2626',
        marginBottom: 5, // Adicionado para centralizar o texto
        position: 'relative', // Adicionado position
        zIndex: 999, // Aumentado para garantir que todo o componente fique acima dos outros
    },
});