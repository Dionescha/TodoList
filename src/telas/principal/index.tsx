import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import { Tarefa } from "../../componente/Tarefa";
import { styles } from "./style";


export default function Principal() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    if (tarefas.some((t) => t.name === tarefa.trim())) {
      return console.log(tarefa, "- encontrado");
    } else if (!tarefa.trim()) {
      return console.log("encontrado vazio ou null");
    } else {
      setTarefas((prevState) => [
        ...prevState,
        { id: Date.now(), name: tarefa.trim(), completed: false },
      ]);
      setTarefa("");
    }
  }

  function removerTarefa(id: number) {
    setTarefas((prevState) => prevState.filter((tarefa) => tarefa.id !== id));
  }

  function marcar(id: number) {
    setTarefas((prevState) =>
      prevState.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    );
  }

  const totalTarefas = tarefas.length;
  const totalTarefasConcluidas = tarefas.filter((t) => t.completed).length;
  const TarefasNaoConcluidas = totalTarefas - totalTarefasConcluidas;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ImageContainer}>
      <Image style={styles.image} source={require('../../../assets/todo.png')} />
      </View>
      <Text style={styles.textTitulo}>Lista de Tarefas</Text>
    

      <View style={styles.form}>
        <TextInput
          style={styles.textInputTarefa}
          placeholder="Adicione a tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTarefa}
          value={tarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textTarefa}>
        Tarefas: {totalTarefas} </Text>
        <Text style={styles.textTarefaConcluida}>
        Concluídas: {totalTarefasConcluidas}{" "} </Text>
        <Text style={styles.textTarefaNaoConcluida}>
        Não Concluídas: {TarefasNaoConcluidas} </Text>

      <ScrollView showsVerticalScrollIndicator={true}>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            nome={tarefa.name}
            concluida={tarefa.completed}
            btnRemover={() => removerTarefa(tarefa.id)}
            btnConcluida={() => marcar(tarefa.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}