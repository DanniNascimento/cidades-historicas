let cidadesHistoricas = [
// Ouro Preto
{
    titulo: "Ouro Preto",
    descricao: "Ouro Preto localiza-se em uma das principais áreas do ciclo do ouro. O município chegou a ser uma das cidades mais populosas das Américas, contando com cerca de 40 mil pessoas em 1730 e, décadas após, 80 mil. Foi o primeiro sítio brasileiro considerado Patrimônio Mundial pela UNESCO, título recebido em 1980. Ouro Preto destaca-se também pela arquitetura barroca e suas igrejas, como a Igreja de São Francisco de Assis, projetada por Aleijadinho.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Ouro_Preto",
    tags: "ouro preto, ciclo do ouro, villa rica, vila rica, sitio brasileiro, 1933, 1938, ouro preto, ciclo do ouro, vila rica, unesco, barroco, aleijadinho, minas gerais",
    imagem: "https://lh5.googleusercontent.com/p/AF1QipNOxi8iMX4uOJVUCqFtIdMAhZ0N9q7Taezzduun=w540-h312-n-k-no"
},
// Olinda
{
    titulo: "Olinda",
    descricao: "Olinda é uma cidade brasileira localizada no estado de Pernambuco, conhecida por seu centro histórico colonial e suas famosas ladeiras. O carnaval de Olinda é um dos mais famosos do Brasil, com desfiles de bonecos gigantes e frevo. Seu centro histórico é tombado como Patrimônio da Humanidade pela UNESCO desde 1982, com casarões coloridos e igrejas barrocas, como a Igreja da Sé.",
    localizacao: "Pernambuco",
    link: "https://pt.wikipedia.org/wiki/Olinda",
    tags: "olinda, centro histórico, unesco, carnaval, bonecos gigantes, frevo, pernambuco",
    imagem: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ6fMvHsgbYlvNR8gHX4iZ4n1iv7Hx-xbelGLCOz5VOy-aRDGGAZFHmYPA-5S2dCcoIAjWUtwDOfTV47UjX-wbxoEpTiHuaZ6DPGIWbAQ"
},
// Salvador
{
    titulo: "Salvador",
    descricao: "Salvador é a capital da Bahia, conhecida por sua importância histórica como a primeira capital do Brasil. Fundada em 1549, a cidade preserva seu Pelourinho, com ruas de paralelepípedos e edifícios coloniais. O Elevador Lacerda e o Mercado Modelo são alguns dos pontos turísticos mais icônicos da cidade, além de suas festas populares, como o Carnaval e a Lavagem do Bonfim.",
    localizacao: "Bahia",
    link: "https://pt.wikipedia.org/wiki/Salvador",
    tags: "salvador, pelourinho, elevador lacerda, carnaval, primeira capital, bahia",
    imagem: "https://lh5.googleusercontent.com/p/AF1QipPfqdGnLMHb89INeovKWJGEY7scxzqBYWowTAat=w540-h312-n-k-no"
},
// Tiradentes
{
    titulo: "Tiradentes",
    descricao: "Tiradentes é uma das cidades históricas mais bem preservadas do Brasil. Suas ruas de pedra e igrejas barrocas, como a Matriz de Santo Antônio, atraem turistas de todo o país. A cidade também é famosa por seus festivais culturais, como o Festival de Cinema de Tiradentes. Seu nome é uma homenagem ao mártir da Inconfidência Mineira, Joaquim José da Silva Xavier, o Tiradentes.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Tiradentes",
    tags: "tiradentes, inconfidência mineira, barroco, festival de cinema, minas gerais",
    imagem: "https://www.fuiserviajante.com/wp-content/uploads/2018/01/o-que-fazer-em-tiradentes-minas-gerais-19-min.jpg"
},
// São Luís
{
    titulo: "São Luís",
    descricao: "São Luís, capital do Maranhão, é uma das poucas cidades brasileiras fundadas por franceses. Seu centro histórico é famoso por suas ruas estreitas e casarões com fachadas de azulejos portugueses. Fundada em 1612, é também reconhecida como Patrimônio Cultural da Humanidade pela UNESCO. São Luís é conhecida por sua cultura vibrante, incluindo o bumba meu boi e o tambor de crioula.",
    localizacao: "Maranhão",
    link: "https://pt.wikipedia.org/wiki/São_Luís",
    tags: "são luís, unesco, azulejos portugueses, bumba meu boi, tambor de crioula, maranhão",
    imagem: "https://rotasdasemocoes.com.br/wp-content/uploads/2022/04/26-930x620.png"
},
// São Miguel das Missões
{
    titulo: "São Miguel das Missões",
    descricao: "São Miguel das Missões é uma cidade localizada no Rio Grande do Sul, famosa por suas ruínas de uma missão jesuítica, parte do patrimônio da UNESCO. Fundada no século XVII pelos jesuítas, as ruínas da Igreja de São Miguel Arcanjo são um dos pontos turísticos mais visitados, representando um importante capítulo da história da colonização europeia e da evangelização indígena no sul do Brasil.",
    localizacao: "Rio Grande do Sul",
    link: "https://pt.wikipedia.org/wiki/São_Miguel_das_Missões",
    tags: "são miguel das missões, jesuítas, ruínas, unesco, rio grande do sul, colonização",
    imagem: "https://tenonde.com.br/wp-content/uploads/2020/02/tenonde-park-hotel-destino-missoes-red.jpg"
},
// São Cristóvão
{
    titulo: "São Cristóvão",
    descricao: "São Cristóvão, localizada em Sergipe, é a quarta cidade mais antiga do Brasil. Fundada em 1590, seu centro histórico é Patrimônio Cultural da Humanidade pela UNESCO. A Praça de São Francisco é um dos destaques da cidade, cercada por importantes construções coloniais, como a Igreja de São Francisco e o Museu de Arte Sacra.",
    localizacao: "Sergipe",
    link: "https://pt.wikipedia.org/wiki/São_Cristóvão",
    tags: "são cristóvão, unesco, praça de são francisco, museu de arte sacra, sergipe",
    imagem: "https://www.ufs.br/uploads/body_image/gist/134639/conhecendo_s_o_crist_v_o_-_pra_a.jpg"
},
// Bananal
{
    titulo: "Bananal",
    descricao: "Bananal, localizada no Vale do Paraíba, São Paulo, é uma das cidades históricas mais antigas do estado, conhecida por sua arquitetura colonial e pela produção de café durante o século XIX. A cidade preserva várias fazendas históricas, que retratam a época áurea do ciclo do café no Brasil.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Bananal",
    tags: "bananal, vale do paraíba, fazendas históricas, ciclo do café, são paulo",
    imagem: "https://abcdoabc.com.br/wp-content/uploads/bananal-sp_a6170cd1-525x350.jpg"
},
// Cachoeira
{
    titulo: "Cachoeira",
    descricao: "Cachoeira, localizada na Bahia, é uma cidade histórica que teve grande importância durante o ciclo do açúcar no Brasil. Seu centro histórico é tombado como Patrimônio Nacional, com construções que datam do século XVIII. A cidade é também conhecida por suas festas religiosas e pela influência da cultura afro-brasileira.",
    localizacao: "Bahia",
    link: "https://pt.wikipedia.org/wiki/Cachoeira",
    tags: "cachoeira, ciclo do açúcar, patrimônio nacional, cultura afro-brasileira, bahia",
    imagem: "https://nabahia.com.br/fotos/noticias/1121/mg/cachoeira%20convento%20cred%20reproducao%20instagram%20gustavogoesfotos.jpg"
},
// Morretes
{
    titulo: "Morretes",
    descricao: "Morretes, localizada no Paraná, é uma cidade histórica que se destaca pela sua arquitetura colonial e por ser ponto de partida do famoso passeio de trem pela Serra do Mar. A cidade é também conhecida pelo prato típico barreado, que atrai turistas de diversas regiões.",
    localizacao: "Paraná",
    link: "https://pt.wikipedia.org/wiki/Morretes",
    tags: "morretes, serra do mar, barreado, arquitetura colonial, paraná",
    imagem: "https://www.crviagenseturismo.com.br/uploads/images/2024/06/80-reveillon-ilha-do-mel-morretes-curitiba-pr-27122024-1718992535.jpg"
},
// Rio de Contas
{
    titulo: "Rio de Contas",
    descricao: "Rio de Contas, localizada na Chapada Diamantina, Bahia, é conhecida por suas belezas naturais e seu centro histórico bem preservado, com casarões coloniais e igrejas barrocas. A cidade também sedia o famoso Festival de Inverno da Chapada Diamantina, que atrai turistas e artistas de todo o Brasil.",
    localizacao: "Bahia",
    link: "https://pt.wikipedia.org/wiki/Rio_de_Contas",
    tags: "rio de contas, chapada diamantina, festival de inverno, barroco, bahia",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Igreja_de_Senhora_Santana%2C_Rio_de_Contas%2C_Bahia%2C_setembro_de_2007_%281%29.jpg/800px-Igreja_de_Senhora_Santana%2C_Rio_de_Contas%2C_Bahia%2C_setembro_de_2007_%281%29.jpg"
},
// Belém
{
    titulo: "Belém",
    descricao: "Belém, capital do Pará, é conhecida como a porta de entrada para a Amazônia. Fundada em 1616, Belém preserva seu centro histórico com casarões coloniais e igrejas barrocas. A cidade também é famosa pelo Círio de Nazaré, uma das maiores manifestações religiosas do Brasil.",
    localizacao: "Pará",
    link: "https://pt.wikipedia.org/wiki/Belém",
    tags: "belém, amazônia, círio de nazaré, arquitetura colonial, pará",
    imagem: "https://vemparaalter.com.br/wp-content/uploads/2021/10/turismo-em-belem-basilica-de-nossa-senhora-de-nazare.jpg"
},
// Diamantina
{
    titulo: "Diamantina",
    descricao: "Diamantina é uma cidade localizada em Minas Gerais, famosa pela mineração de diamantes no século XVIII. Seu centro histórico é Patrimônio Mundial da UNESCO, com destaque para igrejas barrocas e a Casa de Juscelino Kubitschek.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Diamantina",
    tags: "diamantina, mineração, barroco, unesco, minas gerais, juscelino kubitschek",
    imagem: "https://vidaboaturismo.com.br/wp-content/uploads/2020/02/diamantina-MG-As.-do-turismo.jpg"
},
// Paraty
{
    titulo: "Paraty",
    descricao: "Paraty é uma cidade colonial localizada no Rio de Janeiro, fundada no século XVII. Conhecida por suas ruas de pedra e preservação arquitetônica, foi um importante porto para escoamento do ouro. Seu centro histórico é Patrimônio Mundial da UNESCO e a cidade é famosa por seu festival literário, a FLIP.",
    localizacao: "Rio de Janeiro",
    link: "https://pt.wikipedia.org/wiki/Paraty",
    tags: "paraty, porto, unesco, FLIP, rio de janeiro",
    imagem: "https://turismodenatureza.com.br/wp-content/uploads/2020/02/paraty-15-destinos-de-ecoturismo.jpg"
},
// Mariana
{
    titulo: "Mariana",
    descricao: "Mariana é uma cidade histórica de Minas Gerais, conhecida por seu centro colonial bem preservado e por sua importância durante o ciclo do ouro. A cidade abriga a primeira catedral de Minas Gerais, a Catedral da Sé, e o Museu da Inconfidência, que conta a história da Inconfidência Mineira.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Mariana",
    tags: "mariana, catedral da sé, museu da inconfidência, minas gerais",
    imagem: "https://destinosnotaveis.com.br/wp-content/uploads/2023/05/Mariana-MG.jpg"
},
// Penedo
{
    titulo: "Penedo",
    descricao: "Penedo é uma cidade localizada em Alagoas, conhecida por seu centro histórico com influências portuguesas e holandesas. Fundada no século XVI, Penedo é um importante local para o estudo da arquitetura colonial e da história do Brasil.",
    localizacao: "Alagoas",
    link: "https://pt.wikipedia.org/wiki/Penedo_(Alagoas)",
    tags: "penedo, arquitetura colonial, história, alagoas",
    imagem: "https://culturaeviagem.wordpress.com/wp-content/uploads/2013/03/igreja-penedo.jpg"
},
// Parnaíba
{
    titulo: "Parnaíba",
    descricao: "Parnaíba, localizada no Piauí, é conhecida por seu centro histórico com construções do período colonial e pelo Delta do Parnaíba. A cidade tem uma rica história ligada ao comércio de escravos e à economia do açúcar.",
    localizacao: "Piauí",
    link: "https://pt.wikipedia.org/wiki/Parnaíba",
    tags: "parnaíba, delta do parnaíba, arquitetura colonial, piauí",
    imagem: "https://deltarioparnaiba.com.br/wp-content/uploads/2014/01/porto_das_barcas.jpg"
},
// Vitória
{
    titulo: "Vitória",
    descricao: "Vitória, capital do Espírito Santo, é uma cidade com forte influência colonial. Fundada no século XVI, a cidade possui um centro histórico preservado e é conhecida por suas igrejas e casarões, além de seu porto histórico.",
    localizacao: "Espírito Santo",
    link: "https://pt.wikipedia.org/wiki/Vitória_(Espírito_Santo)",
    tags: "vitória, arquitetura colonial, porto histórico, espírito santo",
    imagem: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/02/lugares-turisticos-vitoria-conhecendo-espirito-santo.jpg"
},
// Santa Teresa
{
    titulo: "Santa Teresa",
    descricao: "Santa Teresa é uma cidade histórica do estado do Espírito Santo, conhecida por seu charme colonial e arquitetura de influência portuguesa. A cidade é um destino popular para quem aprecia turismo cultural e histórico.",
    localizacao: "Espírito Santo",
    link: "https://pt.wikipedia.org/wiki/Santa_Teresa_(Espírito_Santo)",
    tags: "santa teresa, charme colonial, turismo cultural, espírito santo",
    imagem: "https://stories.agazeta.com.br/turismo/lugares-para-conhecer-em-santa-teresa-1022/assets/11.webp"
},
// Cunha
{
    titulo: "Cunha",
    descricao: "Cunha, localizada no interior de São Paulo, é uma cidade histórica famosa por sua produção de cerâmica e arquitetura colonial. A cidade preserva construções do período imperial e é conhecida pelo seu Festival Nacional de Cerâmica.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Cunha_(São_Paulo)",
    tags: "cunha, cerâmica, arquitetura colonial, festival nacional de cerâmica, são paulo",
    imagem: "https://rotadeviagem.com/wp-content/uploads/2022/08/lavandario-de-cunha-sp.png"
},
// São João Nepomuceno
{
    titulo: "São João Nepomuceno",
    descricao: "São João Nepomuceno é uma cidade histórica localizada em Minas Gerais, com arquitetura colonial bem preservada e importância histórica no ciclo do ouro. A cidade tem uma rica tradição cultural e arquitetônica, com destaque para suas igrejas e casarões antigos.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/São_João_Nepomuceno",
    tags: "são joão nepomuceno, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://diocesedacampanha.org.br/wp-content/uploads/2024/05/745513cd443fc7a6d2eef04abb18d2d7WhatsApp_Image_2022-09-09_at_15.13.41.jpeg"
},
// São Sebastião do Paraíso
{
    titulo: "São Sebastião do Paraíso",
    descricao: "São Sebastião do Paraíso, localizada em Minas Gerais, é conhecida por seu patrimônio histórico e cultural, com destaque para sua arquitetura colonial e tradições locais. A cidade é um importante centro cultural da região.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/São_Sebastião_do_Paraíso",
    tags: "são sebastião do paraíso, patrimônio histórico, arquitetura colonial, minas gerais",
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/15/41/42/6e/casa-da-manteiga-aviacao.jpg"
},
// Guaratinguetá
{
    titulo: "Guaratinguetá",
    descricao: "Guaratinguetá, localizada em São Paulo, é conhecida por sua história ligada ao ciclo do café e por seu centro histórico bem preservado. A cidade tem importância histórica devido à sua arquitetura colonial e igrejas.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Guaratinguetá",
    tags: "guaratinguetá, ciclo do café, arquitetura colonial, são paulo",
    imagem: "https://memorialdaresistenciasp.org.br/wp-content/uploads/tainacan-items/1041/11271/EA20GUARA20OUTROS20PREDIOS.jpg"
},
// Pirenópolis
{
    titulo: "Pirenópolis",
    descricao: "Pirenópolis, localizada em Goiás, é uma cidade histórica famosa por sua arquitetura colonial e preservação cultural. A cidade é conhecida por suas festas tradicionais, como a Festa do Divino Espírito Santo, e por suas construções do período imperial.",
    localizacao: "Goiás",
    link: "https://pt.wikipedia.org/wiki/Pirenópolis",
    tags: "pirenópolis, arquitetura colonial, festa do divino, goiás",
    imagem: "https://www.segueviagem.com.br/wp-content/uploads/2021/07/Cachoeira-do-Rosario-Pirenopolis-Goias-Credito-editorial-Wagner-Santos-de-Almeida-shutterstock_1684044160.jpg"
},
// Rio de Janeiro
{
    titulo: "Rio de Janeiro",
    descricao: "Rio de Janeiro, conhecida por sua importância histórica como capital do Brasil durante o Império, possui diversos marcos históricos e culturais. A cidade é famosa pelo centro histórico de Santa Teresa, o bairro da Lapa, e pelo Teatro Municipal, além das suas paisagens naturais icônicas.",
    localizacao: "Rio de Janeiro",
    link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
    tags: "rio de janeiro, capital do império, santa teresa, teatro municipal, lapa",
    imagem: "https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h720/2018/09/FEA/57819_shutterstock-106217651-1.jpg"
},
// Recife
{
    titulo: "Recife",
    descricao: "Recife, capital de Pernambuco, é conhecida por seu centro histórico com influências coloniais e seu papel crucial durante o período colonial e imperial. A cidade é famosa pelo bairro do Recife Antigo e pelo seu carnaval vibrante.",
    localizacao: "Pernambuco",
    link: "https://pt.wikipedia.org/wiki/Recife",
    tags: "recife, pernambuco, recife antigo, carnaval, influências coloniais",
    imagem: "https://media.staticontent.com/media/pictures/7c099ab2-7f78-4322-b3ce-64f5d4d6f30f"
},
// Búzios
{
    titulo: "Búzios",
    descricao: "Búzios, localizada no estado do Rio de Janeiro, é uma cidade histórica e turística conhecida por suas praias e seu charme colonial. O centro histórico da cidade possui várias construções que remetem ao período colonial, além de ser um importante destino turístico.",
    localizacao: "Rio de Janeiro",
    link: "https://pt.wikipedia.org/wiki/Búzios",
    tags: "búzios, praias, charme colonial, rio de janeiro",
    imagem: "https://avozdacidade.com/wp/wp-content/uploads/2024/03/Arma%C3%A7%C3%A3o-dos-B%C3%BAzios-Orla-Brigitte-Bardot-Cr%C3%A9dito-Ronald-Pantoja.jpeg"
},
// Santo Amaro
{
    titulo: "Santo Amaro",
    descricao: "Santo Amaro, localizada na Bahia, possui um centro histórico com construções coloniais e igrejas importantes. A cidade tem uma rica história ligada ao ciclo do açúcar e à colonização portuguesa.",
    localizacao: "Bahia",
    link: "https://pt.wikipedia.org/wiki/Santo_Amaro",
    tags: "santo amaro, ciclo do açúcar, arquitetura colonial, bahia",
    imagem: "https://www.guiadoturismobrasil.com/up/img/1434216176.jpg"
},
// Caruaru
{
    titulo: "Caruaru",
    descricao: "Caruaru, situada em Pernambuco, é uma cidade histórica famosa por seu mercado e festas tradicionais, como o São João. A cidade possui um centro histórico que reflete sua rica herança cultural e econômica.",
    localizacao: "Pernambuco",
    link: "https://pt.wikipedia.org/wiki/Caruaru",
    tags: "caruaru, mercado, são joão, herança cultural, pernambuco",
    imagem: "https://imagens.ne10.uol.com.br/img/imagens/2021/02/09/cb37db2a65_design-sem-nome-1.jpg"
},
// Pouso Alegre
{
    titulo: "Pouso Alegre",
    descricao: "Pouso Alegre é uma cidade histórica em Minas Gerais, conhecida por seu papel no ciclo do café e por seu centro histórico bem preservado. A cidade mantém várias construções coloniais e tem uma rica tradição cultural.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Pouso_Alegre",
    tags: "pouso alegre, ciclo do café, arquitetura colonial, minas gerais",
    imagem: "https://imgmd.net/images/v1/guia/1702545/pontos-turisticos-de-campos-do-jordao.jpg"
},
// Itapira
{
    titulo: "Itapira",
    descricao: "Itapira, localizada no interior de São Paulo, é conhecida por seu patrimônio histórico e cultural, com destaque para sua arquitetura colonial e eventos tradicionais que atraem visitantes de diversas regiões.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Itapira",
    tags: "itapira, patrimônio histórico, arquitetura colonial, são paulo",
    imagem: "https://www.itapiranews.com.br/wp-content/uploads/2017/10/A-Gruta-do-Anjo-em-Socorro-em-imagem-registrada-por-Lucas-Aldi-Reprodu%C3%A7%C3%A3o.jpg"
},
// Castro
{
    titulo: "Castro",
    descricao: "Castro, situada no Paraná, é uma cidade histórica com influência da imigração europeia e arquitetura colonial. O centro da cidade preserva edifícios antigos e tem uma rica herança cultural.",
    localizacao: "Paraná",
    link: "https://pt.wikipedia.org/wiki/Castro_(Paraná)",
    tags: "castro, imigração europeia, arquitetura colonial, paraná",
    imagem: "https://turistandopeloparana.com/wp-content/uploads/2017/02/moinho_holandes_em_castrolanda.jpg"
},
// Bragança Paulista
{
    titulo: "Bragança Paulista",
    descricao: "Bragança Paulista, localizada em São Paulo, é uma cidade com rica herança colonial e centro histórico bem preservado. A cidade é conhecida por suas construções antigas e eventos culturais que celebram sua história.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Bragança_Paulista",
    tags: "bragança paulista, herança colonial, centro histórico, são paulo, braganca paulista",
    imagem: "https://melhoresdestinosdobrasil.com.br/wp-content/uploads/2016/10/paisagens-de-braganca-paulista.jpg"
},

// Campos do Jordão
{
    titulo: "Campos do Jordão",
    descricao: "Campos do Jordão, situada em São Paulo, é uma cidade conhecida por seu charme europeu e arquitetura de influência germânica. A cidade, que se destaca por suas construções em estilo alpino, é um popular destino turístico durante o inverno.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Campos_do_Jordão",
    tags: "campos do jordão, charme europeu, arquitetura germânica, são paulo",
    imagem: "https://www.elasviajando.com.br/wp-content/uploads/2019/11/Campos-do-Jord%C3%A3o-S%C3%A3o-Paulo-natal-1.jpg"
},

// Goiás
{
    titulo: "Goiás",
    descricao: "Goiás, antiga capital do estado de Goiás, é conhecida por seu centro histórico colonial bem preservado. A cidade possui diversas construções do período imperial, como igrejas e casarões, e é um importante exemplo da arquitetura colonial brasileira.",
    localizacao: "Goiás",
    link: "https://pt.wikipedia.org/wiki/Goiás_(cidade)",
    tags: "goiás, arquitetura colonial, centro histórico, goiás",
    imagem: "https://www.visiteobrasil.com.br/galerias//326-123053-goias-turismogr.jpg"
},

// Sabará
{
    titulo: "Sabará",
    descricao: "Sabará, localizada em Minas Gerais, é uma cidade histórica famosa por suas igrejas barrocas e seu centro colonial bem preservado. A cidade teve importância no ciclo do ouro e é um exemplo notável da arquitetura colonial mineira.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Sabará",
    tags: "sabará, barroco, ciclo do ouro, arquitetura colonial, minas gerais",
    imagem: "https://www.bahia.ws/wp-content/uploads/2023/10/Cidade-de-Sabara-MG.webp"
},

// São Pedro
{
    titulo: "São Pedro",
    descricao: "São Pedro, localizada em São Paulo, é uma cidade com rica herança histórica e cultural. Conhecida por suas construções antigas e sua arquitetura colonial, a cidade é um destino interessante para quem aprecia a história do interior paulista.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_Pedro_(São_Paulo)",
    tags: "são pedro, arquitetura colonial, herança histórica, são paulo",
    imagem: "https://hotelpicadao.com.br/wp-content/uploads/2018/02/Confirmado-para-os-dias-6-e-7-de-agosto-o-segundo-Festival-de-Balonismo-de-Resende.-Os-bal%C3%B5es-ir%C3%A3o-voar-da-Aman-com-previs%C3%A3o-de-pouso-no-Parque-de-Exposi%C3%A7%C3%B5es.-755x350.jpg"
},

// Santa Rita do Sapucaí
{
    titulo: "Santa Rita do Sapucaí",
    descricao: "Santa Rita do Sapucaí, localizada em Minas Gerais, é uma cidade com centro histórico bem preservado e influência da arquitetura colonial. A cidade tem um papel importante na história da região e é conhecida por suas tradições culturais.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Santa_Rita_do_Sapucaí",
    tags: "santa rita do sapucaí, arquitetura colonial, tradições culturais, minas gerais",
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/19/e6/01/getlstd-property-photo.jpg?w=500&h=400&s=1"
},

// São Sebastião
{
    titulo: "São Sebastião",
    descricao: "São Sebastião, localizada em São Paulo, é uma cidade histórica com centro colonial e influência na história do Brasil. A cidade é conhecida por suas praias e seu patrimônio histórico preservado.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_Sebastião_(São_Paulo)",
    tags: "são sebastião, arquitetura colonial, praias, são paulo",
    imagem: "https://cronicasmacaenses.com/wp-content/uploads/2017/10/sao-sebastiao-sp-05.jpg"
},

// São Carlos
{
    titulo: "São Carlos",
    descricao: "São Carlos, localizada em São Paulo, é uma cidade com forte presença histórica e cultural. Conhecida por suas construções coloniais e pelo papel significativo na história do interior paulista.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_Carlos_(São_Paulo)",
    tags: "são carlos, arquitetura colonial, história, são paulo",
    imagem: "https://www.diocesesaocarlos.org.br/wp-content/uploads/2021/10/catedral_sao_carlos-960x540.jpg"
},

// Nova Lima
{
    titulo: "Nova Lima",
    descricao: "Nova Lima, em Minas Gerais, é conhecida por seu centro histórico com influências coloniais e sua importância durante o ciclo do ouro. A cidade preserva várias construções antigas e é um exemplo da arquitetura colonial mineira.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Nova_Lima",
    tags: "nova lima, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/minas-gerais-capa.jpg"
},

// Itabira
{
    titulo: "Itabira",
    descricao: "Itabira, localizada em Minas Gerais, é uma cidade histórica com uma rica herança cultural e arquitetônica. Conhecida por seu papel durante o ciclo do ouro e por suas construções coloniais bem preservadas.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Itabira",
    tags: "itabira, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://urbay-marketplace.s3.amazonaws.com/cidades/itabira-MG-5283.jpg"
},

// João Pessoa
{
    titulo: "João Pessoa",
    descricao: "João Pessoa, capital da Paraíba, é uma cidade com importante patrimônio histórico, incluindo construções coloniais e igrejas. O centro histórico da cidade é bem preservado e é um exemplo da arquitetura colonial no nordeste do Brasil.",
    localizacao: "Paraíba",
    link: "https://pt.wikipedia.org/wiki/João_Pessoa",
    tags: "joão pessoa, patrimônio histórico, arquitetura colonial, paraíba",
    imagem: "https://alelontra.com.br/wp-content/uploads/2023/03/Joao-Pessoa-Paraiba-Brazil.jpg"
},

// Maceió
{
    titulo: "Maceió",
    descricao: "Maceió, capital de Alagoas, possui um centro histórico com influências coloniais e uma rica herança cultural. A cidade é conhecida por suas praias e por suas construções históricas bem preservadas.",
    localizacao: "Alagoas",
    link: "https://pt.wikipedia.org/wiki/Maceió",
    tags: "maceió, arquitetura colonial, praias, alagoas",
    imagem: "https://cdn.blablacar.com/wp-content/uploads/br/2023/12/05102221/maceio-al-gunga-praia.jpg"
},

// Belém de Pará
{
    titulo: "Belém de Pará",
    descricao: "Belém de Pará, conhecida simplesmente como Belém, é a capital do Pará e tem um centro histórico rico em arquitetura colonial. A cidade é famosa pelo Círio de Nazaré e por suas construções históricas.",
    localizacao: "Pará",
    link: "https://pt.wikipedia.org/wiki/Belém",
    tags: "belém de pará, arquitetura colonial, círio de nazaré, pará",
    imagem: "https://www.lavioletera.com.br/modules//smartblog/images/48-single-default.jpg"
},

// Aracaju
{
    titulo: "Aracaju",
    descricao: "Aracaju, capital de Sergipe, possui um centro histórico com influências coloniais e é conhecida por suas praças e edifícios históricos. A cidade tem uma rica herança cultural e é um importante destino turístico no nordeste do Brasil.",
    localizacao: "Sergipe",
    link: "https://pt.wikipedia.org/wiki/Aracaju",
    tags: "aracaju, arquitetura colonial, praças, sergipe",
    imagem: "https://www.viagensecaminhos.com/wp-content/uploads/2024/01/aracaju-largo-da-gente-sergipana.jpg"
},

// Cachoeira do Sul
{
    titulo: "Cachoeira do Sul",
    descricao: "Cachoeira do Sul, localizada no Rio Grande do Sul, é uma cidade com um centro histórico que reflete a arquitetura colonial do Brasil. A cidade tem uma rica história ligada ao ciclo do açúcar e à colonização portuguesa.",
    localizacao: "Rio Grande do Sul",
    link: "https://pt.wikipedia.org/wiki/Cachoeira_do_Sul",
    tags: "cachoeira do sul, arquitetura colonial, ciclo do açúcar, rio grande do sul",
    imagem: "https://www.viagensecaminhos.com/wp-content/uploads/2021/12/igreja-matriz-cachoeira-do-sul-rs.jpg"
},

// São João da Boa Vista
{
    titulo: "São João da Boa Vista",
    descricao: "São João da Boa Vista, localizada em São Paulo, é uma cidade histórica com centro colonial e influência cultural significativa. A cidade preserva diversas construções antigas e tem importância histórica no interior paulista.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_João_da_Boa_Vista",
    tags: "são joão da boa vista, arquitetura colonial, interior paulista, são paulo",
    imagem: "https://www.saojoao.sp.gov.br/turismo/Arquitetura/Imagens/turismo/video.jpg"
},

// Três Corações
{
    titulo: "Três Corações",
    descricao: "Três Corações, em Minas Gerais, é uma cidade histórica conhecida por sua arquitetura colonial e pela importância na história da região. A cidade preserva várias construções antigas e tem um papel significativo na história local.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Três_Corações",
    tags: "três corações, arquitetura colonial, história, minas gerais",
    imagem: "https://s2-g1.glbimg.com/hp-iDTeo6ExxXelqyVN3rCRtdtY=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/l/A/y5xR9BQYSBBqt0Cx7lKg/foto-7.jpg"
},

// Uberaba
{
    titulo: "Uberaba",
    descricao: "Uberaba, localizada em Minas Gerais, é uma cidade com forte presença histórica e cultural. Conhecida por suas construções coloniais e pelo papel significativo na história do interior mineiro.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Uberaba",
    tags: "uberaba, arquitetura colonial, história, minas gerais",
    imagem: "https://destinostopparavisitar.com/wp-content/uploads/2017/03/Uberaba-Turismo-3.webp"
},

// João Pinheiro
{
    titulo: "João Pinheiro",
    descricao: "João Pinheiro, em Minas Gerais, é uma cidade histórica com um centro colonial bem preservado e importância cultural significativa. A cidade é um exemplo da arquitetura colonial mineira e da história local.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/João_Pinheiro",
    tags: "joão pinheiro, arquitetura colonial, história, minas gerais",
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/9e/c8/55/cachoeira-do-garimpo.jpg?w=500&h=-1&s=1"
},

// Sete Lagoas
{
    titulo: "Sete Lagoas",
    descricao: "Sete Lagoas, localizada em Minas Gerais, é uma cidade com rica herança histórica e arquitetônica. Conhecida por suas construções coloniais e sua importância durante o ciclo do ouro.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Sete_Lagoas",
    tags: "sete lagoas, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://elquarto.com/blog/wp-content/uploads/2022/01/Sete-Lagoas-Minas-Gerais.jpg"
},

// Santa Luzia
{
    titulo: "Santa Luzia",
    descricao: "Santa Luzia, em Minas Gerais, possui um centro histórico com influência colonial e rica herança cultural. A cidade é conhecida por suas igrejas e casarões antigos.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Santa_Luzia_(Minas_Gerais)",
    tags: "santa luzia, arquitetura colonial, herança cultural, minas gerais",
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMT_5pKHd3CYUyK8KbdYBTq26I-EWqhzUtwaV7VeWwjuO-5mypC3X3uznThwqrFibCDqhAy-JXGE4GlRl08NcrqHdXWI-ncGKgVctHhxYyCKSW5_etFbRwHilsJeaGZhR1BNEfx45rcSg/s640/igreja+do+ros%25C3%25A1rio.jpg"
},

// Patos de Minas
{
    titulo: "Patos de Minas",
    descricao: "Patos de Minas, localizada em Minas Gerais, é uma cidade histórica conhecida por sua arquitetura colonial e seu papel na história da região. A cidade preserva várias construções antigas e tem um centro histórico bem conservado.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Patos_de_Minas",
    tags: "patos de minas, arquitetura colonial, história, minas gerais",
    imagem: "https://static.wixstatic.com/media/886bda_0b66f94213cc4ab88fb25a2649ff5070~mv2.jpg/v1/fill/w_587,h_440,al_c,q_80,enc_auto/886bda_0b66f94213cc4ab88fb25a2649ff5070~mv2.jpg"
},

// Teófilo Otoni
{
    titulo: "Teófilo Otoni",
    descricao: "Teófilo Otoni, em Minas Gerais, é uma cidade com uma rica herança histórica e cultural. Conhecida por suas construções coloniais e por sua importância durante o ciclo do ouro.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Teófilo_Otoni",
    tags: "teófilo otoni, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://www.guiadoturismobrasil.com/up/img/1444662202.jpg"
},

// Barbacena
{
    titulo: "Barbacena",
    descricao: "Barbacena, em Minas Gerais, é uma cidade histórica com um centro colonial bem preservado. A cidade é conhecida por suas construções antigas e por sua importância durante o ciclo do ouro.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Barbacena",
    tags: "barbacena, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://blog.buser.com.br/wp-content/uploads/2022/07/146157354_3263311247106044_7877972728708971972_n-1024x586.jpg"
},

// Paracatu
{
    titulo: "Paracatu",
    descricao: "Paracatu, localizada em Minas Gerais, é uma cidade histórica com rica herança cultural e arquitetônica. Conhecida por suas construções coloniais e seu papel no ciclo do ouro.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Paracatu",
    tags: "paracatu, arquitetura colonial, ciclo do ouro, minas gerais",
    imagem: "https://imgsapp.em.com.br/app/noticia_127983242361/2021/11/16/1323027/igreja-de-nossa-senhora-do-rosario-dos-pretos-livres_3_109340.jpg"
},

// Conselheiro Lafaiete
{
    titulo: "Conselheiro Lafaiete",
    descricao: "Conselheiro Lafaiete, em Minas Gerais, é uma cidade com centro histórico bem preservado e influência da arquitetura colonial. A cidade tem um papel significativo na história da região.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Conselheiro_Lafaiete",
    tags: "conselheiro lafaiete, arquitetura colonial, história, minas gerais",
    imagem: "https://www.ecoturismonobrasil.com.br/images/destinos-ecoturismo-600.jpg"
},

// Montes Claros
{
    titulo: "Montes Claros",
    descricao: "Montes Claros, localizada em Minas Gerais, é uma cidade com uma rica herança histórica e cultural. Conhecida por suas construções coloniais e sua importância na história da região.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Montes_Claros",
    tags: "montes claros, arquitetura colonial, história, minas gerais",
    imagem: "https://visiteminasgerais.com.br/fotos/cidades/c_470_12.jpg"
},

// São Paulo
{
    titulo: "São Paulo",
    descricao: "São Paulo, a maior cidade do Brasil, possui um centro histórico com várias construções de importância histórica. Embora a cidade tenha se modernizado muito, ainda conserva vários edifícios antigos e áreas de interesse histórico.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_Paulo",
    tags: "são paulo, centro histórico, construções antigas, história",
    imagem: "https://vamosporai.com/wp-content/uploads/2023/07/Sao-Paulo.jpg"
},

// São José dos Campos
{
    titulo: "São José dos Campos",
    descricao: "São José dos Campos, localizada em São Paulo, é uma cidade com histórico significativo e áreas de interesse histórico. A cidade possui algumas construções antigas e é conhecida por seu desenvolvimento ao longo dos anos.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/São_José_dos_Campos",
    tags: "são josé dos campos, histórico, construções antigas, são paulo",
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7e/8e/52/caption.jpg?w=300&h=300&s=1"
},

// Rio Claro
{
    titulo: "Rio Claro",
    descricao: "Rio Claro, em São Paulo, é uma cidade histórica com um centro bem conservado. A cidade tem construções antigas e um papel significativo na história regional.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Rio_Claro_(São_Paulo)",
    tags: "rio claro, arquitetura colonial, história, são paulo",
    imagem: "https://www.guiadoturismobrasil.com/up/img/1442181243.jpg"
},

// Ribeirão Preto
{
    titulo: "Ribeirão Preto",
    descricao: "Ribeirão Preto, em São Paulo, é uma cidade com um centro histórico que reflete a evolução arquitetônica ao longo dos anos. Conhecida por suas construções antigas e sua importância econômica e cultural.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Ribeirão_Preto",
    tags: "ribeirão preto, arquitetura colonial, construções antigas, são paulo",
    imagem: "https://ilovetrip.com.br/wp-content/uploads/o-que-fazer-em-ribeirao-preto-jardim-japones.jpg.webp"
},

// Botucatu
{
    titulo: "Botucatu",
    descricao: "Botucatu, localizada em São Paulo, é uma cidade com histórico significativo e áreas de interesse cultural. Conhecida por suas construções antigas e pela preservação de seu patrimônio histórico.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Botucatu",
    tags: "botucatu, patrimônio histórico, construções antigas, são paulo",
    imagem: "https://s2-g1.glbimg.com/QZTaZZ4fz8etYQwU-OHzNeoIu7o=/0x0:800x421/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/D/9/kpJaZbRYqAqir28BQPwQ/whatsapp-image-2023-08-14-at-15.46.40.jpeg"
},

// Jundiaí
{
    titulo: "Jundiaí",
    descricao: "Jundiaí, localizada em São Paulo, é uma cidade com centro histórico que conserva várias construções antigas. A cidade tem uma rica herança cultural e desempenhou um papel importante na história da região.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Jundiaí",
    tags: "jundiaí, arquitetura colonial, herança cultural, são paulo",
    imagem: "https://tribunadejundiai.com.br/wp-content/uploads/2019/06/prefeitura-de-socorro.jpg"
},

// 1. Fortaleza
{
    titulo: "Fortaleza",
    descricao: "Fortaleza é a capital do Ceará, conhecida por suas belas praias e vida noturna vibrante. É um importante destino turístico no Nordeste do Brasil.",
    localizacao: "Ceará",
    link: "https://pt.wikipedia.org/wiki/Fortaleza",
    tags: "fortaleza, praias, vida noturna, ceará",
    imagem: "https://propriedadescompartilhadas.com/wp-content/uploads/2022/06/lagoa-paraiso-no-cear.-foto-wandering-trader-1024x1024.jpg"
},
// 2. Florianópolis
{
    titulo: "Florianópolis",
    descricao: "Florianópolis, conhecida como 'Ilha da Magia', é famosa por suas praias paradisíacas e pela excelente qualidade de vida. É a capital de Santa Catarina.",
    localizacao: "Santa Catarina",
    link: "https://pt.wikipedia.org/wiki/Florian%C3%B3polis",
    tags: "florianópolis, praias, qualidade de vida, santa catarina",
    imagem: "https://www.carroaluguel.com/blog/wp-content/uploads/2016/03/florianopolis-ponte-carro-aluguel.jpg"
},
// 3. Belo Horizonte
{
    titulo: "Belo Horizonte",
    descricao: "Belo Horizonte, capital de Minas Gerais, é conhecida por sua arquitetura moderna e rica gastronomia. A cidade é um importante centro cultural e econômico.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Belo_Horizonte",
    tags: "belo horizonte, arquitetura moderna, gastronomia, minas gerais",
    imagem: "https://imgmd.net/images/v1/guia/1688013/belo-horizonte-203-c.jpg"
},
// 4. Curitiba
{
    titulo: "Curitiba",
    descricao: "Curitiba, no Paraná, é conhecida por seu planejamento urbano inovador e sistema de transporte eficiente. É um exemplo de cidade sustentável no Brasil.",
    localizacao: "Paraná",
    link: "https://pt.wikipedia.org/wiki/Curitiba",
    tags: "curitiba, planejamento urbano, transporte eficiente, paraná",
    imagem: "https://unicursoscuritiba.com.br/wp-content/uploads/2024/01/18.-Jardim-Botanico-Creditos-SMCS.webp"
},
// 5. Porto Alegre
{
    titulo: "Porto Alegre",
    descricao: "Porto Alegre, a capital do Rio Grande do Sul, é um centro cultural e econômico com uma rica vida artística e eventos históricos significativos.",
    localizacao: "Rio Grande do Sul",
    link: "https://pt.wikipedia.org/wiki/Porto_Alegre",
    tags: "porto alegre, cultura, economia, rio grande do sul",
    imagem: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/02/pontos-turisticos-porto-alegre-dicas.jpg"
},
// 6. São Bernardo do Campo
{
    titulo: "São Bernardo do Campo",
    descricao: "São Bernardo do Campo é uma cidade do estado de São Paulo, conhecida por sua indústria e desenvolvimento econômico, além de ser um importante polo automobilístico.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Bernardo_do_Campo",
    tags: "são bernardo do campo, indústria, desenvolvimento econômico, são paulo",
    imagem: "https://liberal.com.br/wp-content/uploads/2020/03/capa-Rancho-da-Maioridade.jpg"
},
// 7. Campinas
{
    titulo: "Campinas",
    descricao: "Campinas, situada no interior de São Paulo, é um importante polo tecnológico e acadêmico, com diversas universidades e centros de pesquisa.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Campinas",
    tags: "campinas, tecnologia, universidades, são paulo",
    imagem: "https://campinas.com.br/wp-content/uploads/2020/03/33-Lagoa-do-Taquaral-Ponto-de-Encontro-com-a-Sa%C2%A3de-Patr%C2%B0cia-E.-Bonfim-Marchiori-scaled-e1703082273270.jpg"
},
// 8. Santos
{
    titulo: "Santos",
    descricao: "Santos é uma cidade litorânea no estado de São Paulo, famosa pelo seu porto e pelas belas praias. É um destino popular para turistas e possui um rico patrimônio histórico.",
    localizacao: "São Paulo",
    link: "https://pt.wikipedia.org/wiki/Santos",
    tags: "santos, porto, praias, são paulo",
    imagem: "https://www.voltologo.net/wp-content/uploads/2019/07/funicular-santos.jpg"
},
// 10. Niterói
{
    titulo: "Niterói",
    descricao: "Niterói é uma cidade localizada no estado do Rio de Janeiro, famosa pelas suas belas praias e pela arquitetura de Oscar Niemeyer, incluindo o Museu de Arte Contemporânea.",
    localizacao: "Rio de Janeiro",
    link: "https://pt.wikipedia.org/wiki/Niter%C3%B3i",
    tags: "niterói, praias, arquitetura, rio de janeiro",
    imagem: "https://oirio.com.br/wp-content/uploads/2021/12/Principais-pontos-turisticos-de-Niteroi.jpg"
},
// 11. Londrina
{
    titulo: "Londrina",
    descricao: "Londrina, no Paraná, é um importante centro regional com um crescente setor agrícola e uma rica vida cultural, oferecendo diversos eventos e atividades.",
    localizacao: "Paraná",
    link: "https://pt.wikipedia.org/wiki/Londrina",
    tags: "londrina, agricultura, vida cultural, paraná",
    imagem: "https://turistandopeloparana.com/wp-content/uploads/2018/04/img_9538-1.jpg.webp"
},
// 12. Joinville
{
    titulo: "Joinville",
    descricao: "Joinville, também em Santa Catarina, é conhecida por sua forte herança germânica e pelo famoso Festival de Dança, que atrai visitantes de todo o Brasil e do mundo.",
    localizacao: "Santa Catarina",
    link: "https://pt.wikipedia.org/wiki/Joinville",
    tags: "joinville, herança germânica, festival de dança, santa catarina",
    imagem: "https://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"
},
// 13. Teresina
{
    titulo: "Teresina",
    descricao: "Teresina é a capital do Piauí e é conhecida por seu clima quente e seco, além de ser um importante centro econômico e cultural da região Nordeste.",
    localizacao: "Piauí",
    link: "https://pt.wikipedia.org/wiki/Teresina",
    tags: "teresina, clima quente, economia, piauí",
    imagem: "https://confiramais.com.br/wp-content/uploads/2016/03/Pedra-Furada-Piripiri-Pontos-Tur%C3%ADsticos-Teresina-Piau%C3%AD.png"
},
// 14. Campo Grande
{
    titulo: "Campo Grande",
    descricao: "Campo Grande, no Mato Grosso do Sul, é conhecida por suas áreas verdes e vida cultural vibrante, além de ser um centro de comércio e serviços.",
    localizacao: "Mato Grosso do Sul",
    link: "https://pt.wikipedia.org/wiki/Campo_Grande_(Mato_Grosso_do_Sul)",
    tags: "campo grande, áreas verdes, vida cultural, mato grosso do sul",
    imagem: "https://blog.123milhas.com/wp-content/uploads/2022/06/o-que-fazer-campo-grande-praca-das-araras-conexao123.jpg"
},
// 15. Macapá
{
    titulo: "Macapá",
    descricao: "Macapá, a capital do Amapá, é conhecida por estar situada na linha do Equador e por sua rica cultura amazônica e patrimônio histórico.",
    localizacao: "Amapá",
    link: "https://pt.wikipedia.org/wiki/Macap%C3%A1",
    tags: "macapá, linha do equador, cultura amazônica, amapá",
    imagem: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/05/ba/f7/d4/fortaleza-de-sao-jose.jpg"
},
// 16. Boa Vista
{
    titulo: "Boa Vista",
    descricao: "Boa Vista é a capital de Roraima, conhecida por sua localização no extremo norte do Brasil e por seu papel como porta de entrada para a região amazônica.",
    localizacao: "Roraima",
    link: "https://pt.wikipedia.org/wiki/Boa_Vista_(Roraima)",
    tags: "boa vista, região amazônica, roraima, extremo norte",
    imagem: "https://alugueldecarrosboavista.com.br/wp-content/uploads/2020/06/lago-do-robertinho-boa-vista-rr.jpg"
},
// 17. Palmas
{
    titulo: "Palmas",
    descricao: "Palmas é a capital do Tocantins, conhecida por seu planejamento urbano moderno e por ser um importante centro administrativo e cultural da região Norte.",
    localizacao: "Tocantins",
    link: "https://pt.wikipedia.org/wiki/Palmas_(Tocantins)",
    tags: "palmas, planejamento urbano, centro administrativo, tocantins",
    imagem: "https://www.boqnews.com/wp-content/uploads/2015/11/A-Praia-Da-Prata.jpg"
},
// 18. Aracaju
{
    titulo: "Aracaju",
    descricao: "Aracaju, capital de Sergipe, é conhecida por suas belas praias e pela qualidade de vida. A cidade é um importante destino turístico no Nordeste do Brasil.",
    localizacao: "Sergipe",
    link: "https://pt.wikipedia.org/wiki/Aracaju",
    tags: "aracaju, praias, qualidade de vida, sergipe",
    imagem: "https://ajunews.com.br/wp-content/uploads/2020/03/Conhe%C3%A7a-os-encantos-de-pontos-tur%C3%ADsticos-da-regi%C3%A3o-central-de-Aracaju.jpg"
},
// 19. Juiz de Fora
{
    titulo: "Juiz de Fora",
    descricao: "Juiz de Fora é uma cidade em Minas Gerais com forte presença acadêmica e cultural. A cidade tem um papel significativo na economia do estado e oferece várias atrações culturais.",
    localizacao: "Minas Gerais",
    link: "https://pt.wikipedia.org/wiki/Juiz_de_Fora",
    tags: "juiz de fora, acadêmica, cultural, minas gerais",
    imagem: "https://cdn.blablacar.com/wp-content/uploads/br/2023/12/05102904/reparticoes-municipais-juiz-de-fora-mg.webp"
},
// 20. Vitória da Conquista
{
    titulo: "Vitória da Conquista",
    descricao: "Vitória da Conquista é uma cidade no interior da Bahia conhecida por sua rica cultura e tradições. É um centro regional importante para comércio e serviços.",
    localizacao: "Bahia",
    link: "https://pt.wikipedia.org/wiki/Vit%C3%B3ria_da_Conquista",
    tags: "vitória da conquista, cultura, comércio, bahia",
    imagem: "https://www.expressaobahia.com.br/v1/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-23-at-22.06.18.jpeg"
}

];
