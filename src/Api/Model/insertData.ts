import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { app } from '../Config/firebaseConfig'; // Substitua pelo caminho correto

export async function insertData() {
  console.log('wqeqwewqe');
  const COLLECTION_NAME = 'videos';

  const dataToInsert = [
    {
      "title": "PARE DE ESTUDAR PROGRAMAÇÃO",
      "description": "Aulas Gratuitas ao Vivo de Desenvolvimento Android",
      "videoId": "wRzvI8xWC9s",
      "URL": "https://i.ytimg.com/vi/wRzvI8xWC9s/default.jpg"
    },
    {
      "title": "COMO eu COMEÇARIA na PROGRAMAÇÃO em 2023",
      "description": "COMO eu COMEÇARIA na PROGRAMAÇÃO em 2023",
      "videoId": "_OEAfm1RVjc",
      "URL": "https://i.ytimg.com/vi/_OEAfm1RVjc/default.jpg"
    },
    {
      "title": "PARA DE MENTIR, Programação em 2023",
      "description": "O lugar certo para quem quer Desenvolver Aplicativos",
      "videoId": "zcxixHQuU3E",
      "URL": "https://i.ytimg.com/vi/zcxixHQuU3E/default.jpg"
    },
    {
      "title": "Se nao aprender PROGRAMAÇÃO com esse video. - ̗̀  DESISTE   ̖́-",
      "description": "Está procurando um curso de PROGRAMAÇÃO?",
      "videoId": "A1BaZr82XJI",
      "URL": "https://i.ytimg.com/vi/A1BaZr82XJI/default.jpg"
    },
    {
      "title": "ESCOLHENDO a MELHOR LINGUAGEM de PROGRAMAÇÃO",
      "description": "Awto, seu aplicativo de veículo compartilhado.",
      "videoId": "WfLZUx4NC7U",
      "URL": "https://i.ytimg.com/vi/WfLZUx4NC7U/default.jpg"
    },
    {
      "title": "O MÍNIMO QUE VOCÊ PRECISA SABER ANTES DE PROGRAMAR!",
      "description": "Se você já ouviu por aí que é preciso estudar a BASE antes de programar esse vídeo é pra você.",
      "videoId": "BTENKdRVS2U",
      "URL": "https://i.ytimg.com/vi/BTENKdRVS2U/default.jpg"
    },
    {
      "title": "Como funcionam as LINGUAGENS de PROGRAMAÇÃO #SagaDosComputadores Ep. 8",
      "description": "Venha estudar na Alura, o seu manual da tecnologia com 10% de desconto hoje:",
      "videoId": "22nd99SLgNA",
      "URL": "https://i.ytimg.com/vi/22nd99SLgNA/default.jpg"
    },
    {
      "title": "O QUE EU INDICO PARA QUEM ESTÁ INCIANDO NA PROGRAMAÇÃO?",
      "description": "",
      "videoId": "WZs5z4vgNhA",
      "URL": "https://i.ytimg.com/vi/WZs5z4vgNhA/default.jpg"
    },
    {
      "title": "ESCOLHENDO a MELHOR LINGUAGEM de PROGRAMAÇÃO",
      "description": "Meu site parece que foi feito por um DEV backend né?! Mas lá tu encontra tudo que precisa saber sobre o que tenho feito e onde",
      "videoId": "ZkOb9D9hZ5Y",
      "URL": "https://i.ytimg.com/vi/ZkOb9D9hZ5Y/default.jpg"
    },
    {
      "title": "O que o JavaScript é capaz de fazer? - Curso JavaScript #01",
      "description": "Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet ...",
      "videoId": "Ptbk2af68e8",
      "URL": "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg"
    },
    {
      "title": "Aprenda JAVASCRIPT em apenas 5 MINUTOS (2023)",
      "description": "javascript #webdevelopment Aprenda as partes mais importantes do JavaScript em 2023 em apenas 5 minutos Este vídeo foi ...",
      "videoId": "WRlfwBof66s",
      "URL": "https://i.ytimg.com/vi/WRlfwBof66s/default.jpg"
    },
    {
      "title": "Curso em Vídeo - JavaScript",
      "description": "",
      "videoId": "BXqUH86F-kA",
      "URL": "https://i.ytimg.com/vi/BXqUH86F-kA/default.jpg"
    },
    {
      "title": "APRENDA JAVASCRIPT EM 10 MINUTOS",
      "description": "Pacote Full-Stack: https://pacotefullstack.com/completo Curso Desenvolvimento de Games: ...",
      "videoId": "RvcRxEeJqi8",
      "URL": "https://i.ytimg.com/vi/RvcRxEeJqi8/default.jpg"
    },
    {
      "title": "JAVASCRIPT do básico ao avançado ( Mapa de estudos / Roadmap )",
      "description": "Javascript é uma das linguagens mais versáteis e requisitadas no meio de tecnologia, isso porque com javascript você pode ...",
      "videoId": "6YwbZbHRQ8w",
      "URL": "https://i.ytimg.com/vi/6YwbZbHRQ8w/default.jpg"
    },
    {
      "title": "Curso de Javascript Completo",
      "description": "20 Aulas Completas de Javascript.",
      "videoId": "vEwPnjqWQ-g",
      "URL": "https://i.ytimg.com/vi/vEwPnjqWQ-g/default.jpg"
    },
    {
      "title": "Curso Javascript Completo (6 Horas)",
      "description": "Neste Curso de Javascript Completo vamos aprender todos os conceitos importantes dessa linguagem de programação ...",
      "videoId": "McKNP3g6VBA",
      "URL": "https://i.ytimg.com/vi/McKNP3g6VBA/default.jpg"
    },
    {
      "title": "JavaScript (A linguagem mais AMADA e/ou ODIADA 😁) // Dicionário do Programador",
      "description": "VPS COM DESCONTO → https://codft.me/HGRi76yOpLrNg JavaScript, JS ou ECMAScript, não importa o nome, ela é ...",
      "videoId": "Ri76yOpLrNg",
      "URL": "https://i.ytimg.com/vi/Ri76yOpLrNg/default.jpg"
    },
    {
      "title": "Instalação do VS Code para Programação em JavaScript e Python",
      "description": "Quer saber mais sobre o nosso Curso Completo de JavaScript? Clique no link abaixo para garantir sua vaga na próxima turma: ...",
      "videoId": "iLraM_NZYfA",
      "URL": "https://i.ytimg.com/vi/iLraM_NZYfA/default.jpg"
    },
    {
      "title": "JAVASCRIPT - APRENDA NA PRÁTICA ESSA LINGUAGEM DE PROGRAMAÇÃO",
      "description": "Neste vídeo você vai aprender na prática o que é uma linguagem de programação, e também entender mais sobre o JavaScript, ...",
      "videoId": "UG13jIYflWw",
      "URL": "https://i.ytimg.com/vi/UG13jIYflWw/default.jpg"
    },
    {
      "title": "TypeScript // Dicionário do Programador",
      "description": "HOSTGATOR → https://codft.me/HGgmupEp468lY Vamos aprender o superset de JavaScript que vêm ganhando muitos ...",
      "videoId": "gmupEp468lY",
      "URL": "https://www.youtube.com/watch?v=gmupEp468lY"
    },
    {
      "title": "CURSO DE TYPESCRIPT NA PRÁTICA - APRENDA TYPESCRIPT EM 1 HORA",
      "description": "Cupom do curso de #TypeScript completo: https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/?",
      "videoId": "lCemyQeSCV8",
      "URL": "https://www.youtube.com/watch?v=lCemyQeSCV8"
    },
    {
      "title": "TUDO que você deve saber para usar TypeScript com Node/React",
      "description": "Converse com o nosso time em tempo real: https://rseat.in/vendas ROCKETSEAT ONE: todos os programas de ensino da ...",
      "videoId": "GWwuQl0jXU4",
      "URL": "https://www.youtube.com/watch?v=GWwuQl0jXU4"
    },
    {
      "title": "TypeScript in 100 Seconds",
      "description": "Learn the basics if TypeScript in 100 Seconds! If you love TS, upgrade to Fireship PRO for 40% off using code mbus5Kcj at ...",
      "videoId": "zQnBQ4tB3ZA",
      "URL": "https://www.youtube.com/watch?v=zQnBQ4tB3ZA"
    },
    {
      "title": "TypeScript, o início, de forma prática | MasterClass #07",
      "description": "Maratona Explorer: Dê seus primeiros passos na programação. → Cadastre-se no link gratuitamente: ...",
      "videoId": "0mYq5LrQN1s",
      "URL": "https://www.youtube.com/watch?v=0mYq5LrQN1s"
    },
    {
      "title": "JavaScript ou TypeScript? Qual Escolher? Faz sentido?",
      "description": "O dilema de JavaScript e typescript ainda faz sentido nos dias de hoje? Nesse vídeo eu trago como eu tenho lidado com esse ...",
      "videoId": "FL1N4AP_uQ4",
      "URL": "https://www.youtube.com/watch?v=FL1N4AP_uQ4"
    },
    {
      "title": "Why is TypeScript making us do this?",
      "description": "00:00 The Problem 00:56 The Solution 01:20 Node Wants .js? 02:08 Why Not .ts? 02:41 What If I Don't Want .js? Article: ...",
      "videoId": "8ORIzvgNWhU",
      "URL": "https://www.youtube.com/watch?v=8ORIzvgNWhU"
    },
    {
      "title": "Removing TypeScript - DHH Problem... wtf?",
      "description": "Adeus Typescript e vida longa ao JavaScript no Turbo8 | Turbo 8 is dropping TypeScript. ✓ Aulas Gratuitas ao Vivo de ...",
      "videoId": "ANeEikfX5go",
      "URL": "https://www.youtube.com/watch?v=ANeEikfX5go"
    },
    {
      "title": "E07 Live Code e QA sobre Testes de Integração, NodeJS, TypeScript e mais em 10/10",
      "description": "Nesta live, vou continuar o desenvolvimento dos testes de integração dos Repositores e Controllers do microsserviço para o ...",
      "videoId": "GOc5EBuwTiI",
      "URL": "https://www.youtube.com/watch?v=GOc5EBuwTiI"
    },
    {
      "title": "TypeScript em 15 minutos (direto ao ponto!)",
      "description": "Olá, tudo bem? No vídeo de hoje eu vou lhe dar uma introdução rápida, clara e objetiva de o que é e como utilizar TypeScript ...",
      "videoId": "g0hkeyMb45U",
      "URL": "https://www.youtube.com/watch?v=g0hkeyMb45U"
    }
  ]
  

  const insertData = async () => {
    try {
      // Obtenha uma referência para o Firestore
      const db = getFirestore(app);

      // Especifique a coleção na qual você deseja inserir os dados
      const collectionRef = collection(db, COLLECTION_NAME);

      // Insira os dados no Firestore
      for (const item of dataToInsert) {
        const docRef = await addDoc(collectionRef, item);
        console.log('Documento inserido com sucesso com ID: ', docRef.id);
      }

      console.log('Dados inseridos com sucesso no Firestore.');
    } catch (error) {
      console.error('Erro ao inserir os documentos: ', error);
    }
  };

  // Chame a função para inserir os dados
  insertData();
}