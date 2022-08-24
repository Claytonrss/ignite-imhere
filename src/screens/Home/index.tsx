import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participant, setParticipant] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participant)) {
      return Alert.alert(
        'Participante existente',
        `O participante ${participant} já está na lista.`
      )
    } else {
      setParticipants([...participants, participant])
      setParticipant('')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
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
          value={participant}
          onChangeText={setParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <Participant onRemove={handleParticipantRemove} name={item} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
          </Text>
        )}
      />
    </View>
  )
}
