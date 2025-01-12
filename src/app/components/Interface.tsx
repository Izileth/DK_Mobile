// Interface das Propiedades do Modal do Carrousel de Tags
export interface ModalTagsProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}

// Interface do Item do Carrousel de Tags das Tabs gerais
export interface CarouselItem {
    text: string;
    duration: number;
    modalTitle: string;
    modalContent: React.ReactNode;
}


// Interface do carrousel da Tab de Conteudo
export interface CarouselImage {
    uri: string;
}
  

export interface CarouselProps {
    images: CarouselImage[];
    indicatorColor?: string;
    indicatorInactiveColor?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    imageStyle?: object;
}
  