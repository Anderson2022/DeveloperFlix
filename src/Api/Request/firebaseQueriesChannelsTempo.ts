// getChannelsCollection.ts
import axios from 'axios';

export async function getChannelsCollection() {
  try {
    // Substitua '/caminho-do-seu-arquivo/channelData.json' pelo caminho correto
    const response = await axios.get('src/Api/Request/channelData.json');
    const channelData = response.data;
    const dataArray = Array.isArray(channelData) ? channelData : [channelData];


    return dataArray;
    return channelData;
  } catch (error) {
    console.error('Erro ao carregar dados do canal:', error);
    throw error;
  }
}
