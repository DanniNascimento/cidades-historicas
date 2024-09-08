const body = document.body;
const imageUrls = [
    'https://comunidadevip.com.br/wp-content/uploads/2021/11/mianmar.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Zhangye_Danxia.JPG',
    'https://institutoconfucio.com.br/wp-content/uploads/2020/07/GUILIN_06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/1200px-Ankor_Wat_temple.jpg',
    'https://michelechristine.wordpress.com/wp-content/uploads/2013/10/parquehitachi_01_thumb.jpg?w=484&h=363',
    'https://www.almadeviajante.com/wp-content/uploads/veneza-grand-canal.jpg',
    'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/bg48nbcjtsluhm6lwsda',
    'https://portalsustentabilidade.com/wp-content/uploads/2023/05/design-destaque-11-1.jpg',
    'https://magazine.zarpo.com.br/wp-content/uploads/2018/09/25-pontos-turisticos-do-brasil-para-conhecer-agora-mesmo-2.jpg',
    'https://todepassagem.clickbus.com.br/wp-content/uploads/2021/04/Cidades-Historicas-do-Brasil-1-scaled-1.jpg',
    'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/aoolphq0q0nyej57ewkp',
    'https://turismoemfoco.com.br/v1/wp-content/uploads/2019/07/unnamed-15.jpg',
    'https://magazine.zarpo.com.br/wp-content/uploads/2021/11/Cidades-Historicas.jpg',
    'https://blog.buser.com.br/wp-content/uploads/2021/03/buser_buser_image_417.jpeg',
    'https://universoludico.com.br/wp-content/uploads/2020/07/CENTRO-HISTORICO-DE-SAO-PAULO.jpg',
    'https://portal.loft.com.br/wp-content/uploads/2023/11/lugares-para-visitar-no-centro-historico-de-porto-alegre.jpg',
    'https://magazine.zarpo.com.br/wp-content/uploads/2018/09/elevador-lacerda_bahia_zarpo.jpg',
    'https://www.temporadalivre.com/uploads/editor/pictures/a2a8ea252571/content_diamantina.jpg',
    'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/02-pontemorretes.jpg?w=1900&h=1266',
    'https://paxpro.com.br/wp-content/uploads/2024/03/DALL·E-2024-03-06-11.47.35-Voce-e-encarregado-de-criar-uma-imagem-para-promover-a-experiencia-de-Explorando-as-Cidades-Historicas-de-Minas-Gerais_-Uma-Viagem-Cultural.-Desenvo.webp',
    'https://uploads.grupodicas.com/2024/04/letreiro-olinda.jpeg',
    'https://quantocustaviajar.com/blog/wp-content/uploads/2023/03/wallpaperflare.com_wallpaper-1-1024x576.jpg',
    'https://portalopiaui.com/hf-conteudo/uploads/posts/2022/08/7327_oeiras-governo-png.png',
    'https://aquelemato.org/wp-content/uploads/2018/03/thumb-monumentos-1.jpg',
    'https://magazine.zarpo.com.br/wp-content/uploads/2020/04/sao-luis_palacio-leoes_zarpo.jpg',
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];
    body.style.backgroundImage = `url(${randomImage})`;
}
window.onload = changeBackground; {
    changeBackground();
};