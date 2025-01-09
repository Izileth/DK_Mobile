import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const ModalTags = ({ visible, onClose, title = "Select tags to add", children }) => {
  return (
    <Modal 
      animationType='slide' 
      transparent={true} 
      visible={visible} 
      onRequestClose={onClose}
    >
      <View style={styles.box}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View>{children}</View>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#080808',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: 'auto',
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#101010',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  }
});

export default ModalTags;