import { useState } from "react";
import {Text, TouchableOpacity, View, Switch,  } from "react-native";
import { styles } from "./style";

interface Props {
  nome: string
  concluida: boolean
  btnRemover: () => void
  btnConcluida: () => void

}

export function Tarefa({ nome, concluida, btnConcluida, btnRemover }: Props) {
  function validar() {
    btnConcluida()
  }

  function remover() {
    btnRemover()
  }
 /* const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  */
    
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={validar}>
    <View style={styles.contador}>
    <Text
          style={[
            styles.textTarefas,
            { textDecorationLine: concluida ? "line-through" : "none" },
          ]}
        >
          {nome}
        </Text>
        </View>
        <TouchableOpacity style={styles.concluidaBotao} onPress={validar}>
        <Text style={styles.concluidaBotaoTexto}>✔</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={remover}>
        <Text style={styles.removerBotaoTexto}>-</Text>
      </TouchableOpacity>
   
    </TouchableOpacity>
  )
}
    
    {/* <Switch 
        //onPress={() => setCount(count + 1)}
        style={styles.toggle}
        trackColor={{false: '#767577', true: '#31CF67'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} ></Switch>
        */ }
   