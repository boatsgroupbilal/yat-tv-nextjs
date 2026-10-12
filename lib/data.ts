export type Story={slug:string,title:string,category:string,tag:string,description:string,theme:string,video?:boolean,source?:string};
export const stories:Story[]=[
{slug:'euro-boat-250-tekne',title:'İlk Gün 250 Tekne Sattı, Bugün Dünyaya İhraç Ediyor',category:'haber',tag:'ÖZEL DOSYA',description:'Euro Boat’un üretim yolculuğu ve dünya pazarlarına açılması.',theme:'sea',source:'https://yat.tv/'},
{slug:'yener-trawler-35',title:'Yener Tekne Trawler 35 Yat TV’de',category:'motoryat',tag:'TEKNE TANITIMI',description:'Uzun menzil hedefiyle geliştirilen Trawler 35 projesi.',theme:'midnight',source:'https://yat.tv/'},
{slug:'grande-mare-gm-42',title:'Grande Mare GM 42 FLY',category:'motoryat',tag:'YENİ MODELLER',description:'Flybridge motoryat dünyasından yeni bir model.',theme:'blue',source:'https://yat.tv/'},
{slug:'eris-pervane',title:'Eriş Pervane Üretim ve Tamirde Yat TV’de',category:'ekipman',tag:'SEKTÖR',description:'Pervane, şaft, dümen ve bakım sistemlerine yakından bakış.',theme:'steel',source:'https://yat.tv/eris-pervane-uretim-ve-tamirde-tekne-haberde/'},
{slug:'efor-yacht-design',title:'Efor Yacht Design: Yat Refit ve Bakım',category:'haber',tag:'TERSANELER',description:'Yat yenileme, tamir, bakım ve marin tasarım dünyası.',theme:'gold',source:'https://yat.tv/'},
{slug:'euro-boat-850cc',title:'Euro Boat 850CC Cabin Cruiser',category:'tekne',tag:'TEKNE TESTLERİ',description:'Cabin cruiser kategorisinden dikkat çeken tasarım.',theme:'sky',source:'https://yat.tv/'},
{slug:'cg-marine-gocek',title:'CG Marine Göcek Tekne Tamiri',category:'ekipman',tag:'TEKNİK SERVİS',description:'Göcek’te tekne ve motor bakım çözümleri.',theme:'dark',source:'https://yat.tv/'},
{slug:'grande-mare-la-sera',title:'Grande Mare LA SERA GM 38',category:'motoryat',tag:'TANITIM',description:'Deniz üzerinde konfor ve performans odaklı bir model.',theme:'teal',source:'https://yat.tv/'}
];
export const menus=[{name:'Ana Sayfa',url:'/'},{name:'Videolar',url:'/videolar'},{name:'Haberler',url:'/haberler'},{name:'Tekne Testleri',url:'/kategori/tekne'},{name:'Motoryat',url:'/kategori/motoryat'},{name:'Markalar',url:'/kategori/haber'}];
export const categories=[{name:'Motoryat',slug:'motoryat'},{name:'Tekne Testleri',slug:'tekne'},{name:'Sektör & Ekipman',slug:'ekipman'},{name:'Haberler',slug:'haber'},{name:'Kiralık',slug:'kiralik'},{name:'Satılık',slug:'satilik'}];
