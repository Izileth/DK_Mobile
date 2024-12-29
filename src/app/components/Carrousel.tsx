import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';

type CarouselItem = {
  title: string;
  description: string;
};

type CarouselComponentProps = {
  data: CarouselItem[]; // Dados a serem exibidos no carrossel
  interval?: number; // Tempo em milissegundos para trocar os slides automaticamente
  onItemPress?: (item: CarouselItem) => void; // Função chamada ao clicar em um slide
};

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  data,
  interval = 5000,
  onItemPress,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<Carousel<any>>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      carouselRef.current?.snapToItem(nextIndex);
    }, interval);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, [activeIndex, interval]);

  useEffect(() => {
    if (!data || data.length === 0) {
      console.error("Erro: 'data' está vazio ou indefinido.");
    }
  }, [data]);

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onItemPress ? onItemPress(item) : Alert.alert('Item', item.description)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Text style={styles.pagination}>Slide {activeIndex + 1} de {data.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
    height: 200,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  pagination: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

export default CarouselComponent;
