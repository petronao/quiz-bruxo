import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TODOS_OS_TEMAS } from './dados'; // Importa o centralizador automático

export default function App() {
  // Controle de Telas: 'menu' ou 'jogo'
  const [telaAtual, setTelaAtual] = useState('menu');
  
  // Banco de dados completo do tema escolhido
  const [bancoCompleto, setBancoCompleto] = useState([]);
  const [nomeTema, setNomeTema] = useState('');

  // Estados do Bloco Atual (Rodada de 10 palavras)
  const [blocoAtual, setBlocoAtual] = useState([]); 
  const [listaRestante, setListaRestante] = useState([]); 
  const [ponteiroBloco, setPonteiroBloco] = useState(0); 
  
  // Rastreia se o usuário cometeu algum erro dentro do bloco atual
  const [errouNoBloco, setErrouNoBloco] = useState(false);

  // Estados da Pergunta na Tela
  const [perguntaAtual, setPerguntaAtual] = useState(null);
  const [opcoes, setOpcoes] = useState([]);
  const [acertosNoBloco, setAcertosNoBloco] = useState(0);

  // Inicia o tema cortando as primeiras 10 palavras
  const iniciarTema = (listaDoTema, nomeDoLivro) => {
    setBancoCompleto(listaDoTema);
    setNomeTema(nomeDoLivro);
    setPonteiroBloco(0);
    setTelaAtual('jogo');
    
    const primeirasDez = listaDoTema.slice(0, 10);
    setBlocoAtual(primeirasDez);
    setListaRestante([...primeirasDez]);
    setAcertosNoBloco(0);
    setErrouNoBloco(false); 

    gerarNovaPergunta(primeirasDez, primeirasDez, listaDoTema, 0, false);
  };

  const gerarNovaPergunta = (restantes, blocoDeDez, totalDoTema, indiceAtual, cometeuErro) => {
    // 🎉 Se terminou as palavras do bloco atual!
    if (restantes.length === 0) {
      
      // ❌ SE ERROU ALGO: Força a repetição do MESMO bloco
      if (cometeuErro) {
        alert("⚠️ Você cometeu erros neste bloco. Vamos repetir as mesmas 10 palavras para fixar bem!");
        setListaRestante([...blocoDeDez]);
        setAcertosNoBloco(0);
        setErrouNoBloco(false);
        gerarNovaPergunta(blocoDeDez, blocoDeDez, totalDoTema, indiceAtual, false);
      } 
      // 🏆 SE GABARITOU: Avança para as próximas 10 palavras
      else {
        alert("🔥 Perfeito! Zero erros. Seu cérebro fixou essas 10! Avançando para o próximo bloco...");
        const proximoIndice = indiceAtual + 10;
        
        // Se ainda restarem palavras no banco de dados completo
        if (proximoIndice < totalDoTema.length) {
          const proximoBloco = totalDoTema.slice(proximoIndice, proximoIndice + 10);
          setPonteiroBloco(proximoIndice);
          setBlocoAtual(proximoBloco);
          setListaRestante([...proximoBloco]);
          setAcertosNoBloco(0);
          setErrouNoBloco(false);
          gerarNovaPergunta(proximoBloco, proximoBloco, totalDoTema, proximoIndice, false);
        } else {
          alert("🏆 INCRÍVEL! Você devorou todos os blocos deste tema com perfeição!");
          setTelaAtual('menu');
        }
      }
      return;
    }

    // Sorteia uma das palavras que restam no bloco de 10
    const indiceSorteado = Math.floor(Math.random() * restantes.length);
    const pergunta = restantes[indiceSorteado];

    // Sorteia 3 alternativas erradas tiradas do banco completo para dar variedade
    const outrasOpcoes = totalDoTema.filter(item => item.id !== pergunta.id);
    const erradasEmbaralhadas = outrasOpcoes.sort(() => 0.5 - Math.random());
    const tresErradas = erradasEmbaralhadas.slice(0, 3).map(item => item.portugues);

    // Junta a correta com as erradas e embaralha as posições
    const todasAsOpcoes = [pergunta.portugues, ...tresErradas].sort(() => 0.5 - Math.random());

    setPerguntaAtual(pergunta);
    setOpcoes(todasAsOpcoes);
  };

  const checarResposta = (opcaoSelecionada) => {
    if (opcaoSelecionada === perguntaAtual.portugues) {
      alert("Correto! 🎉");
      const novaListaRestante = listaRestante.filter(item => item.id !== perguntaAtual.id);
      setListaRestante(novaListaRestante);
      setAcertosNoBloco(acertosNoBloco + 1);
      
      // Passa o estado atualizado de erros para a próxima rodada
      gerarNovaPergunta(novaListaRestante, blocoAtual, bancoCompleto, ponteiroBloco, errouNoBloco);
    } else {
      alert(`Errado! ❌\nA tradução correta era: ${perguntaAtual.portugues}`);
      setErrouNoBloco(true); // Marca que o bloco atual está "sujo" e vai ter que repetir
    }
  };

  // TELA DO MENU (TOTALMENTE AUTOMATIZADA)
  if (telaAtual === 'menu') {
    return (
      <View style={styles.containerMenu}>
        <Text style={styles.tituloMenu}>Treino de Fixação 🧠</Text>
        <Text style={styles.subtituloMenu}>Gabarite as 10 palavras para avançar de bloco</Text>
        
        {/* ScrollView garante que se tiver muitos temas, você consegue rolar a tela */}
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
          {TODOS_OS_TEMAS.map((tema) => (
            <TouchableOpacity 
              key={tema.id} 
              style={styles.botaoMenu} 
              onPress={() => iniciarTema(tema.dados, tema.titulo)}
            >
              <Text style={styles.textoBotaoMenu}>{tema.titulo}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  // TELA DO JOGO
  return (
    <ScrollView contentContainerStyle={styles.containerJogo}>
      <View style={styles.topoJogo}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => setTelaAtual('menu')}>
          <Text style={styles.textoVoltar}>⬅ Sair</Text>
        </TouchableOpacity>
        <Text style={styles.placar}>
          {nomeTema} • Bloco: {Math.floor(ponteiroBloco / 10) + 1} ({acertosNoBloco}/10)
          {errouNoBloco && <Text style={{color: '#ff3b30'}}> ⚠️</Text>}
        </Text>
      </View>

      {perguntaAtual && (
        <>
          <View style={styles.cartaoPergunta}>
            <Text style={styles.fraseContexto}>"{perguntaAtual.frase}"</Text>
            <Text style={styles.palavraIngles}>{perguntaAtual.ingles}</Text>
            <Text style={styles.pronuncia}>({perguntaAtual.pronuncia})</Text>
          </View>

          <View style={styles.containerOpcoes}>
            {opcoes.map((opcao, index) => (
              <TouchableOpacity key={index} style={styles.botaoOpcao} onPress={() => checarResposta(opcao)}>
                <Text style={styles.textoOpcao}>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerMenu: { flex: 1, backgroundColor: '#1c1c1e', alignItems: 'center', justifyContent: 'center', padding: 20, paddingTop: 60 },
  tituloMenu: { color: '#ffffff', fontSize: 26, fontWeight: 'bold', marginBottom: 5 },
  subtituloMenu: { color: '#aaa', fontSize: 14, marginBottom: 35 },
  botaoMenu: { backgroundColor: '#007aff', width: '100%', maxWidth: 350, padding: 20, borderRadius: 12, marginBottom: 15, alignItems: 'center' },
  textoBotaoMenu: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  containerJogo: { paddingVertical: 50, backgroundColor: '#1c1c1e', alignItems: 'center', paddingHorizontal: 20 },
  topoJogo: { width: '100%', maxWidth: 400, flexDirection: 'row', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between' },
  botaoVoltar: { backgroundColor: '#2c2c2e', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 6, borderWidth: 1, borderColor: '#3a3a3c' },
  textoVoltar: { color: '#aaa', fontWeight: 'bold' },
  placar: { color: '#34c759', fontSize: 14, fontWeight: 'bold' },
  cartaoPergunta: { backgroundColor: '#2c2c2e', width: '100%', maxWidth: 400, padding: 25, borderRadius: 15, alignItems: 'center', marginBottom: 30, borderWidth: 1, borderColor: '#3a3a3c' },
  fraseContexto: { color: '#aaa', fontSize: 16, fontStyle: 'italic', marginBottom: 15, textAlign: 'center' },
  palavraIngles: { color: '#ffffff', fontSize: 34, fontWeight: 'bold' },
  pronuncia: { color: '#34c759', fontSize: 18, marginTop: 5, fontWeight: '600' },
  containerOpcoes: { width: '100%', maxWidth: 400 },
  botaoOpcao: { backgroundColor: '#2c2c2e', width: '100%', padding: 18, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#3a3a3c', alignItems: 'center' },
  textoOpcao: { color: '#fff', fontSize: 16, fontWeight: '600' }
});