// types.ts
export interface ModalTagsProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}
  
export interface CarouselItem {
    text: string;
    duration: number;
    modalTitle: string;
    modalContent: React.ReactNode;
}