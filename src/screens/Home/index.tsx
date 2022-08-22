import { StatusBar } from 'expo-status-bar'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    console.log('você clicou na ação de adicionar o participante')
  }

  function handleParticipantRemove(name: string) {
    console.log(`você clicou na ação de remover o participante: ${name}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Participant onRemove={handleParticipantRemove} name="Clayton" />
        <Participant onRemove={handleParticipantRemove} name="Diego" />
        <Participant onRemove={handleParticipantRemove} name="Rodrigo" />
        <Participant onRemove={handleParticipantRemove} name="Biro" />
      </View>
    </View>
  )
}
