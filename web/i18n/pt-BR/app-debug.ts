const translation = {
  pageTitle: {
    line1: 'PROMPT',
    line2: 'Engenharia',
  },
  orchestrate: 'Orquestrar',
  promptMode: {
    simple: 'Mudar para o Modo Especialista para editar todo o PROMPT',
    advanced: 'Modo Especialista',
    switchBack: 'Voltar',
    advancedWarning: {
      title: 'Você mudou para o Modo Especialista e, uma vez que você modifique o PROMPT, NÃO poderá retornar ao modo básico.',
      description: 'No Modo Especialista, você pode editar todo o PROMPT.',
      learnMore: 'Saiba mais',
      ok: 'OK',
    },
    operation: {
      addMessage: 'Adicionar Mensagem',
    },
    contextMissing: 'Componente de contexto ausente, a eficácia do prompt pode não ser boa.',
  },
  operation: {
    applyConfig: 'Publicar',
    resetConfig: 'Redefinir',
    debugConfig: 'Depurar',
    addFeature: 'Adicionar Recurso',
    automatic: 'Automático',
    stopResponding: 'Parar de responder',
    agree: 'gostar',
    disagree: 'não gostar',
    cancelAgree: 'Cancelar gostar',
    cancelDisagree: 'Cancelar não gostar',
    userAction: 'Usuário ',
  },
  notSetAPIKey: {
    title: 'A chave do provedor LLM não foi definida',
    trailFinished: 'Trilha finalizada',
    description: 'A chave do provedor LLM não foi definida e precisa ser definida antes da depuração.',
    settingBtn: 'Ir para configurações',
  },
  trailUseGPT4Info: {
    title: 'Não suporta gpt-4 agora',
    description: 'Use gpt-4, por favor defina a chave da API.',
  },
  feature: {
    groupChat: {
      title: 'Melhoria do Chat',
      description: 'Adicione configurações pré-conversa para aplicativos que podem melhorar a experiência do usuário.',
    },
    groupExperience: {
      title: 'Melhoria da Experiência',
    },
    conversationOpener: {
      title: 'Remodeladores de Conversa',
      description: 'Em um aplicativo de chat, a primeira frase que a IA fala ativamente para o usuário geralmente é usada como uma saudação.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Perguntas de Acompanhamento',
      description: 'Configurar sugestões de próximas perguntas pode proporcionar um melhor chat aos usuários.',
      resDes: '3 sugestões para a próxima pergunta do usuário.',
      tryToAsk: 'Tente perguntar',
    },
    moreLikeThis: {
      title: 'Mais como isso',
      description: 'Gere vários textos de uma vez e, em seguida, edite e continue a gerar',
      generateNumTip: 'Número de vezes geradas',
      tip: 'Usar esse recurso incorrerá em sobrecarga adicional de tokens',
    },
    speechToText: {
      title: 'Fala para Texto',
      description: 'Uma vez ativado, você pode usar entrada de voz.',
      resDes: 'Entrada de voz está ativada',
    },
    textToSpeech: {
      title: 'Texto para voz',
      description: 'Quando ativado, o texto pode ser convertido em fala.',
      resDes: 'Texto para áudio ativado',
    },
    citation: {
      title: 'Citações e Atribuições',
      description: 'Uma vez ativado, mostra o documento de origem e a seção atribuída do conteúdo gerado.',
      resDes: 'Citações e Atribuições estão ativadas',
    },
    annotation: {
      title: 'Resposta de Anotação',
      description: 'Você pode adicionar manualmente uma resposta de alta qualidade ao cache para correspondência prioritária com perguntas semelhantes do usuário.',
      resDes: 'Resposta de Anotação está ativada',
      scoreThreshold: {
        title: 'Limiar de Pontuação',
        description: 'Usado para definir o limiar de similaridade para resposta de anotação.',
        easyMatch: 'Correspondência Fácil',
        accurateMatch: 'Correspondência Precisa',
      },
      matchVariable: {
        title: 'Variável de Correspondência',
        choosePlaceholder: 'Escolha a variável de correspondência',
      },
      cacheManagement: 'Anotações',
      cached: 'Anotado',
      remove: 'Remover',
      removeConfirm: 'Excluir esta anotação?',
      add: 'Adicionar anotação',
      edit: 'Editar anotação',
    },
    dataSet: {
      title: 'Contexto',
      noData: 'Você pode importar Conhecimento como contexto',
      words: 'Palavras',
      textBlocks: 'Blocos de Texto',
      selectTitle: 'Selecionar Conhecimento de referência',
      selected: 'Conhecimento selecionado',
      noDataSet: 'Nenhum Conhecimento encontrado',
      toCreate: 'Ir para criar',
      notSupportSelectMulti: 'Atualmente, suporta apenas um Conhecimento',
      queryVariable: {
        title: 'Variável de Consulta',
        tip: 'Essa variável será usada como entrada de consulta para recuperação de contexto, obtendo informações de contexto relacionadas à entrada dessa variável.',
        choosePlaceholder: 'Escolha a variável de consulta',
        noVar: 'Nenhuma variável',
        noVarTip: 'por favor, crie uma variável na seção Variáveis',
        unableToQueryDataSet: 'Não é possível consultar o Conhecimento',
        unableToQueryDataSetTip: 'Não é possível consultar o Conhecimento com sucesso, por favor escolha uma variável de consulta de contexto na seção de contexto.',
        ok: 'OK',
        contextVarNotEmpty: 'variável de consulta de contexto não pode estar vazia',
        deleteContextVarTitle: 'Excluir variável "{{varName}}"?',
        deleteContextVarTip: 'Esta variável foi definida como uma variável de consulta de contexto e removê-la afetará o uso normal do Conhecimento. Se você ainda precisa excluí-la, por favor, selecione-a novamente na seção de contexto.',
      },
    },
    tools: {
      title: 'Tools',
      tips: 'Tools provide a standard API call method, taking user input or variables as request parameters for querying external data as context.',
      toolsInUse: '{{count}} tools in use',
      modal: {
        title: 'Tool',
        toolType: {
          title: 'Tool Type',
          placeholder: 'Por favor, selecione o tipo de ferramenta',
        },
        name: {
          title: 'Nome',
          placeholder: 'Por favor, insira o nome',
        },
        variableName: {
          title: 'Nome da Variável',
          placeholder: 'Por favor, insira o nome da variável',
        },
      },
    },
    conversationHistory: {
      title: 'Histórico da Conversa',
      description: 'Defina os nomes dos prefixos para os papéis da conversa',
      tip: 'O Histórico da Conversa não está habilitado, por favor adicione <histories> na solicitação acima.',
      learnMore: 'Saiba mais',
      editModal: {
        title: 'Editar Nomes dos Papéis da Conversa',
        userPrefix: 'Prefixo do Usuário',
        assistantPrefix: 'Prefixo do Assistente',
      },
    },
    toolbox: {
      title: 'CAIXA DE FERRAMENTAS',
    },
    moderation: {
      title: 'Moderação de Conteúdo',
      description: 'Proteja a saída do modelo usando a API de moderação ou mantendo uma lista de palavras sensíveis.',
      allEnabled: 'Conteúdo de ENTRADA/SAÍDA Habilitado',
      inputEnabled: 'Conteúdo de ENTRADA Habilitado',
      outputEnabled: 'Conteúdo de SAÍDA Habilitado',
      modal: {
        title: 'Configurações de Moderação de Conteúdo',
        provider: {
          title: 'Provedor',
          openai: 'Moderação OpenAI',
          openaiTip: {
            prefix: 'A Moderação OpenAI requer uma chave de API da OpenAI configurada em ',
            suffix: '.',
          },
          keywords: 'Palavras-chave',
        },
        keywords: {
          tip: 'Uma por linha, separadas por quebras de linha. Até 100 caracteres por linha.',
          placeholder: 'Uma por linha, separadas por quebras de linha',
          line: 'Linha',
        },
        content: {
          input: 'Moderar Conteúdo de ENTRADA',
          output: 'Moderar Conteúdo de SAÍDA',
          preset: 'Respostas pré-definidas',
          placeholder: 'Insira o conteúdo das respostas pré-definidas aqui',
          condition: 'Moderar Conteúdo de ENTRADA e SAÍDA habilitado pelo menos uma',
          fromApi: 'As respostas pré-definidas são retornadas pela API',
          errorMessage: 'As respostas pré-definidas não podem estar vazias',
          supportMarkdown: 'Suporte a Markdown',
        },
        openaiNotConfig: {
          before: 'A Moderação OpenAI requer uma chave de API da OpenAI configurada em ',
          after: '',
        },
      },
    },
    fileUpload: {
      title: 'Upload de Arquivo',
      description: 'A caixa de entrada do chat permite fazer upload de imagens, documentos e outros arquivos.',
      supportedTypes: 'Tipos de Arquivo Suportados',
      numberLimit: 'Máximo de uploads',
      modalTitle: 'Configuração de Upload de Arquivo',
    },
    imageUpload: {
      title: 'Upload de Imagem',
      description: 'Permite fazer upload de imagens.',
      supportedTypes: 'Tipos de Arquivo Suportados',
      numberLimit: 'Máximo de uploads',
      modalTitle: 'Configuração de Upload de Imagem',
    },
    bar: {
      empty: 'Habilitar recursos para melhorar a experiência do usuário do aplicativo web',
      enableText: 'Recursos Habilitados',
      manage: 'Gerenciar',
    },
    documentUpload: {
      title: 'Documento',
      description: 'Habilitar Documento permitirá que o modelo aceite documentos e responda perguntas sobre eles.',
    },
    audioUpload: {
      title: 'Áudio',
      description: 'Habilitar Áudio permitirá que o modelo processe arquivos de áudio para transcrição e análise.',
    },
  },
  automatic: {
    title: 'Orquestração Automatizada de Aplicativos',
    description: 'Descreva o seu cenário, o Dify irá orquestrar um aplicativo para você.',
    intendedAudience: 'Qual é o público-alvo?',
    intendedAudiencePlaceHolder: 'ex: Estudante',
    solveProblem: 'Quais problemas eles esperam que a IA possa resolver para eles?',
    solveProblemPlaceHolder: 'ex: Avaliar o desempenho acadêmico',
    generate: 'Gerar',
    audiencesRequired: 'Públicos-alvo necessários',
    problemRequired: 'Problema necessário',
    resTitle: 'Orquestramos o seguinte aplicativo para você.',
    apply: 'Aplicar esta orquestração',
    noData: 'Descreva o seu caso de uso à esquerda, a visualização da orquestração será exibida aqui.',
    loading: 'Orquestrando o aplicativo para você...',
    overwriteTitle: 'Substituir configuração existente?',
    overwriteMessage: 'Aplicar esta orquestração irá substituir a configuração existente.',
  },
  resetConfig: {
    title: 'Confirmar redefinição?',
    message:
      'A redefinição descarta as alterações, restaurando a última configuração publicada.',
  },
  errorMessage: {
    nameOfKeyRequired: 'nome da chave: {{key}} obrigatório',
    valueOfVarRequired: 'valor de {{key}} não pode estar vazio',
    queryRequired: 'Texto da solicitação é obrigatório.',
    waitForResponse:
      'Aguarde a resposta à mensagem anterior ser concluída.',
    waitForBatchResponse:
      'Aguarde a resposta à tarefa em lote ser concluída.',
    notSelectModel: 'Por favor, escolha um modelo',
    waitForImgUpload: 'Aguarde o upload da imagem',
  },
  chatSubTitle: 'Instruções',
  completionSubTitle: 'Prefixo da Solicitação',
  promptTip:
    'As solicitações guiam as respostas da IA com instruções e restrições. Insira variáveis como {{input}}. Este prompt não será visível para os usuários.',
  formattingChangedTitle: 'Formatação alterada',
  formattingChangedText:
    'Modificar a formatação redefinirá a área de depuração, você tem certeza?',
  variableTitle: 'Variáveis',
  variableTip:
    'Os usuários preenchem as variáveis em um formulário, substituindo automaticamente as variáveis na solicitação.',
  notSetVar: 'As variáveis permitem que os usuários introduzam palavras de solicitação ou observações iniciais ao preencher formulários. Você pode tentar digitar "{{input}}" nas palavras de solicitação.',
  autoAddVar: 'Variáveis indefinidas referenciadas na pré-solicitação, você deseja adicioná-las no formulário de entrada do usuário?',
  variableTable: {
    key: 'Chave da Variável',
    name: 'Nome do Campo de Entrada do Usuário',
    optional: 'Opcional',
    type: 'Tipo de Entrada',
    action: 'Ações',
    typeString: 'Texto',
    typeSelect: 'Selecionar',
  },
  varKeyError: {
    canNoBeEmpty: '{{key}} é obrigatório',
    tooLong: '{{key}} é muito longa. Não pode ter mais de 30 caracteres',
    notValid: '{{key}} é inválida. Pode conter apenas letras, números e sublinhados',
    notStartWithNumber: '{{key}} não pode começar com um número',
    keyAlreadyExists: '{{key}} já existe',
  },
  otherError: {
    promptNoBeEmpty: 'A solicitação não pode estar vazia',
    historyNoBeEmpty: 'O histórico da conversa deve ser definido na solicitação',
    queryNoBeEmpty: 'A consulta deve ser definida na solicitação',
  },
  variableConfig: {
    'addModalTitle': 'Adicionar Campo de Entrada',
    'editModalTitle': 'Editar Campo de Entrada',
    'description': 'Configuração para a variável {{varName}}',
    'fieldType': 'Tipo de Campo',
    'string': 'Texto Curto',
    'text-input': 'Texto Curto',
    'paragraph': 'Parágrafo',
    'select': 'Selecionar',
    'number': 'Número',
    'notSet': 'Não definido, tente digitar {{input}} no prompt de prefixo',
    'stringTitle': 'Opções da caixa de texto do formulário',
    'maxLength': 'Comprimento Máximo',
    'options': 'Opções',
    'addOption': 'Adicionar opção',
    'apiBasedVar': 'Variável Baseada em API',
    'varName': 'Nome da Variável',
    'labelName': 'Nome do Rótulo',
    'inputPlaceholder': 'Por favor, insira',
    'required': 'Obrigatório',
    'hide': 'Ocultar',
    'errorMsg': {
      labelNameRequired: 'O nome do rótulo é obrigatório',
      varNameCanBeRepeat: 'O nome da variável não pode ser repetido',
      atLeastOneOption: 'Pelo menos uma opção é obrigatória',
      optionRepeat: 'Tem opções repetidas',
    },
    'defaultValue': 'Valor padrão',
    'noDefaultValue': 'Nenhum valor padrão',
    'selectDefaultValue': 'Selecionar valor padrão',
  },
  vision: {
    name: 'Visão',
    description: 'Habilitar a Visão permite que o modelo receba imagens e responda perguntas sobre elas.',
    settings: 'Configurações',
    visionSettings: {
      title: 'Configurações de Visão',
      resolution: 'Resolução',
      resolutionTooltip: `Baixa resolução permitirá que o modelo receba uma versão de baixa resolução de 512 x 512 da imagem e represente a imagem com um orçamento de 65 tokens. Isso permite que a API retorne respostas mais rápidas e consuma menos tokens de entrada para casos de uso que não exigem alta precisão.
                \n
                Alta resolução permitirá que o modelo veja a imagem de baixa resolução e crie recortes detalhados das imagens de entrada como quadrados de 512px com base no tamanho da imagem de entrada. Cada um dos recortes detalhados usa o dobro do orçamento de tokens, totalizando 129 tokens.`,
      high: 'Alta',
      low: 'Baixa',
      uploadMethod: 'Método de Upload',
      both: 'Ambos',
      localUpload: 'Upload Local',
      url: 'URL',
      uploadLimit: 'Limite de Upload',
    },
  },
  voice: {
    name: 'voz',
    defaultDisplay: 'Voz padrão',
    description: 'Texto para configurações de timbre de voz',
    settings: 'As configurações',
    voiceSettings: {
      title: 'voz As configurações',
      language: 'línguas',
      resolutionTooltip: 'Texto para voz timbre suporta idiomas.',
      voice: 'voz',
      autoPlay: 'Reprodução automática',
      autoPlayEnabled: 'ligar',
      autoPlayDisabled: 'fecho',
    },
  },
  openingStatement: {
    title: 'Abertura da Conversa',
    add: 'Adicionar',
    writeOpener: 'Escrever abertura',
    placeholder: 'Escreva sua mensagem de abertura aqui, você pode usar variáveis, tente digitar {{variável}}.',
    openingQuestion: 'Perguntas de Abertura',
    openingQuestionPlaceholder: 'Você pode usar variáveis, tente digitar {{variable}}.',
    noDataPlaceHolder:
      'Iniciar a conversa com o usuário pode ajudar a IA a estabelecer uma conexão mais próxima com eles em aplicativos de conversação.',
    varTip: 'Você pode usar variáveis, tente digitar {{variável}}',
    tooShort: 'São necessárias pelo menos 20 palavras de prompt inicial para gerar observações de abertura para a conversa.',
    notIncludeKey: 'O prompt inicial não inclui a variável: {{key}}. Por favor, adicione-a ao prompt inicial.',
  },
  modelConfig: {
    model: 'Modelo',
    setTone: 'Definir tom das respostas',
    title: 'Modelo e Parâmetros',
    modeType: {
      chat: 'Chat',
      completion: 'Completar',
    },
  },
  inputs: {
    title: 'Depuração e Visualização',
    noPrompt: 'Tente escrever algum prompt na entrada de pré-prompt',
    userInputField: 'Campo de Entrada do Usuário',
    noVar: 'Preencha o valor da variável, que será substituída automaticamente na palavra de solicitação sempre que uma nova sessão for iniciada.',
    chatVarTip:
      'Preencha o valor da variável, que será substituída automaticamente na palavra de solicitação sempre que uma nova sessão for iniciada',
    completionVarTip:
      'Preencha o valor da variável, que será substituída automaticamente nas palavras de solicitação sempre que uma pergunta for enviada.',
    previewTitle: 'Visualização do Prompt',
    queryTitle: 'Conteúdo da Consulta',
    queryPlaceholder: 'Por favor, insira o texto da solicitação.',
    run: 'EXECUTAR',
  },
  result: 'Texto de Saída',
  datasetConfig: {
    settingTitle: 'Configurações de Recuperação',
    knowledgeTip: 'Clique no botão “+” para adicionar conhecimento',
    retrieveOneWay: {
      title: 'Recuperação N-para-1',
      description: 'Com base na intenção do usuário e nas descrições do Conhecimento, o Agente seleciona autonomamente o melhor Conhecimento para consulta. Melhor para aplicativos com Conhecimento distinto e limitado.',
    },
    retrieveMultiWay: {
      title: 'Recuperação Multi-caminho',
      description: 'Com base na intenção do usuário, consulta todos os Conhecimentos, recupera texto relevante de várias fontes e seleciona os melhores resultados que correspondem à consulta do usuário após a reclassificação. É necessária a configuração da API do modelo de reclassificação.',
    },
    rerankModelRequired: 'Modelo de reclassificação é necessário',
    params: 'Parâmetros',
    top_k: 'Top K',
    top_kTip: 'Usado para filtrar os trechos mais semelhantes às perguntas do usuário. O sistema também ajustará dinamicamente o valor de Top K, de acordo com max_tokens do modelo selecionado.',
    score_threshold: 'Limiar de Pontuação',
    score_thresholdTip: 'Usado para definir o limiar de similaridade para filtragem de trechos.',
    retrieveChangeTip: 'Modificar o modo de índice e o modo de recuperação pode afetar os aplicativos associados a este Conhecimento.',
  },
  assistantType: {
    name: 'Tipo de Assistente',
    chatAssistant: {
      name: 'Assistente Básico',
      description: 'Construa um assistente baseado em chat usando um Modelo de Linguagem Grande',
    },
    agentAssistant: {
      name: 'Assistente de Agente',
      description: 'Construa um Agente inteligente que pode escolher autonomamente ferramentas para concluir as tarefas',
    },
  },
  agent: {
    agentMode: 'Modo do Agente',
    agentModeDes: 'Defina o tipo de modo de inferência para o agente',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Chamada de Função',
    },
    setting: {
      name: 'Configurações do Agente',
      description: 'As configurações do Assistente de Agente permitem definir o modo do agente e recursos avançados como prompts incorporados, disponíveis apenas no tipo de Agente.',
      maximumIterations: {
        name: 'Número Máximo de Iterações',
        description: 'Limite o número de iterações que um assistente de agente pode executar',
      },
    },
    buildInPrompt: 'Prompt Incorporado',
    firstPrompt: 'Primeiro Prompt',
    nextIteration: 'Próxima Iteração',
    promptPlaceholder: 'Escreva seu prompt aqui',
    tools: {
      name: 'Ferramentas',
      description: 'O uso de ferramentas pode ampliar as capacidades do LLM, como pesquisar na internet ou realizar cálculos científicos',
      enabled: 'Habilitado',
    },
  },
}

export default translation
