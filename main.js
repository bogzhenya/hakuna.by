
function submitHakuna(e){
  e.preventDefault();
  const form=e.target;
  const data=new FormData(form);
  const name=data.get('name')||'';
  alert(`Спасибо, ${name}! Заявка заполнена. На рабочей версии здесь подключим отправку в Telegram/CRM.`);
  form.reset();
  return false;
}
document.querySelector('.menu-btn')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  nav.style.display = nav.style.display==='flex' ? '' : 'flex';
  if(nav.style.display==='flex'){
    nav.style.position='absolute';nav.style.top='68px';nav.style.left='14px';nav.style.right='14px';
    nav.style.background='#fff';nav.style.padding='18px';nav.style.borderRadius='20px';
    nav.style.boxShadow='0 18px 40px rgba(6,55,67,.12)';nav.style.flexDirection='column';nav.style.alignItems='stretch';
  }
});
