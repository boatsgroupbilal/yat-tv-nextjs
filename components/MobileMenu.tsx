'use client';
import {useState,useEffect} from 'react';
import type {CSSProperties} from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';

const items = [
  {name:'Haber',slug:'haber',color:'#9d2144'},
  {name:'Tekne',slug:'tekne',color:'#145c9a'},
  {name:'Gulet',slug:'gulet',color:'#0b776c'},
  {name:'Yelkenli',slug:'yelkenli',color:'#297349'},
  {name:'Motoryat',slug:'motoryat',color:'#993a31'},
  {name:'Katamaran',slug:'katamaran',color:'#753c95'},
  {name:'Şişme Bot',slug:'sisme-bot',color:'#8c540f'},
  {name:'Deniz Motoru',slug:'deniz-motoru',color:'#84701b'},
  {name:'Tekne Yat Malzemeleri',slug:'tekneyat-malzemeleri',color:'#666056'},
];

export default function MobileMenu(){
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    function onKey(e:KeyboardEvent){if(e.key==='Escape')setOpen(false)}
    document.addEventListener('keydown',onKey);
    return ()=>document.removeEventListener('keydown',onKey);
  },[]);
  useEffect(()=>{
    if(!open)return;
    const previous = document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{document.body.style.overflow=previous};
  },[open]);
  return <>
    <button type="button" className="mobileMenuToggle" aria-label="Kategorileri aç" aria-expanded={open} aria-controls="yat-tv-mobile-menu" onClick={()=>setOpen(true)}><Menu size={27}/></button>
    {open&&<>
      <button type="button" className="mobileMenuBackdrop" aria-label="Menüyü kapat" onClick={()=>setOpen(false)}/>
      <aside className="mobileMenuPanel" id="yat-tv-mobile-menu" aria-label="Mobil menü">
        <div className="mobileMenuHead"><Link className="mobileMenuLogo" href="/" onClick={()=>setOpen(false)}>YAT<span>TV</span><small>DENİZE DAİR HER ŞEY</small></Link><button type="button" aria-label="Menüyü kapat" onClick={()=>setOpen(false)}><X size={27}/></button></div>
        <nav className="mobileMenuList" aria-label="Kategoriler">{items.map(c=><Link key={c.slug} href={'/kategori/'+c.slug} onClick={()=>setOpen(false)} style={{'--category-color':c.color} as CSSProperties}>{c.name}</Link>)}</nav>
        <div className="mobileMenuExtras"><Link href="/videolar" onClick={()=>setOpen(false)}>YAT TV İzle →</Link><a href="https://yat.tv/" target="_blank" rel="noopener noreferrer">Üye Ol →<small>Üyelik bağlantısı eski YAT TV sitesini açar</small></a></div>
      </aside>
    </>}
  </>
}
