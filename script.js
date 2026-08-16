const categories = [
  "كلاسيك كريب","براون كريب","وافل","بان كيك","ميني بان كيك","منتجات خاصة",
  "العصائر الطبيعية","مكس عصير","موهيتو","آيس لاتيه"
];
const deliveryAreas = [{name:"النجف المركز",price:2000},{name:"منطقة ثانية",price:3000}];
const whatsappNumber = "964XXXXXXXXXX";
const defaultProducts = [
["نوتيلا كريب","كلاسيك كريب",3000],["لوتس كريب","كلاسيك كريب",3000],["بستاشيو كريب","كلاسيك كريب",4000],["ستروبيري كريب","كلاسيك كريب",4000],
["نوتيلا كريب رول","كلاسيك كريب",4000],["لوتس كريب رول","كلاسيك كريب",4000],["بستاشيو كريب رول","كلاسيك كريب",4500],["ستروبيري كريب رول","كلاسيك كريب",4500],
["نوتيلا كريب سوشي","كلاسيك كريب",3000],["لوتس كريب سوشي","كلاسيك كريب",3000],["بستاشيو كريب سوشي","كلاسيك كريب",4500],["ستروبيري كريب سوشي","كلاسيك كريب",4500],
["نوتيلا براون كريب","براون كريب",3000],["لوتس براون كريب","براون كريب",3000],["بستاشيو براون كريب","براون كريب",4000],["ستروبيري براون كريب","براون كريب",4000],
["نوتيلا براون كريب رول","براون كريب",4000],["لوتس براون كريب رول","براون كريب",4000],["بستاشيو براون كريب رول","براون كريب",4500],["ستروبيري براون كريب رول","براون كريب",4500],
["نوتيلا براون كريب سوشي","براون كريب",3000],["لوتس براون كريب سوشي","براون كريب",3000],["بستاشيو براون كريب سوشي","براون كريب",4500],["ستروبيري براون كريب سوشي","براون كريب",4500],
["وافل نوتيلا","وافل",4000],["وافل لوتس","وافل",4000],["وافل بستاشيو","وافل",4500],["وافل ستروبيري","وافل",4500],
["نوتيلا بان كيك","بان كيك",4000],["لوتس بان كيك","بان كيك",4000],["بستاشيو بان كيك","بان كيك",4500],["ستروبيري بان كيك","بان كيك",4500],
["ميني بان كيك نوتيلا","ميني بان كيك",3500],["ميني بان كيك لوتس","ميني بان كيك",3500],["ميني بان كيك بستاشيو","ميني بان كيك",4000],["ميني بان كيك ستروبيري","ميني بان كيك",4000],
["كاسة دبي","منتجات خاصة",5000],["ريزو أبو ليان","منتجات خاصة",5000],["قدح الفواكه","منتجات خاصة",3000],
["عصير برتقال","العصائر الطبيعية",3000],["عصير فراولة","العصائر الطبيعية",3000],["عصير موز حليب","العصائر الطبيعية",3000],["عصير بطيخ","العصائر الطبيعية",3000],["عصير ليمون","العصائر الطبيعية",3000],["عصير منكا","العصائر الطبيعية",3500],["عصير أناناس","العصائر الطبيعية",3500],
["موز فراولة","مكس عصير",3500],["موز منكا","مكس عصير",3500],["برتقال أناناس","مكس عصير",3500],["برتقال ليمون","مكس عصير",3500],["ليمون نعناع","مكس عصير",3500],["عصير أبو ليان","مكس عصير",4000],["عصير كوكتيل","مكس عصير",4000],
["موهيتو بلو","موهيتو",3500],["موهيتو روز بيري","موهيتو",3500],["موهيتو باشن فروت","موهيتو",3500],["موهيتو فراولة","موهيتو",3500],["موهيتو علك بوبّي","موهيتو",3500],["موهيتو أبو ليان","موهيتو",4500],["موهيتو ريد بول","موهيتو",4500],
["آيس لاتيه","آيس لاتيه",4000],["آيس لاتيه كراميل","آيس لاتيه",4000],["آيس لاتيه سبانش","آيس لاتيه",4000],["آيس لاتيه توفي","آيس لاتيه",4000],["آيس لاتيه بستاشيو","آيس لاتيه",4000],["آيس لاتيه بستاشيو فراولة","آيس لاتيه",4000],["آيس لاتيه أبو ليان","آيس لاتيه",4000]
].map((x,i)=>({id:i+1,name:x[0],category:x[1],price:x[2],image:"",description:"طعم لذيذ ومحضر بعناية من كريب أبو ليان.",featured:i<4,popular:i===0||i===2,newItem:i===6,offer:i===3,discount:false,oldPrice:0,hidden:false}));

const defaults = {
  products: defaultProducts,
  cart: [],
  ordersOpen: true,
  homeSections:{featured:true,popular:true,newItem:true,offer:true,discount:true},
  sectionOrder:["⭐ المميز","🎁 العروض","🔥 الأكثر طلبًا","🆕 الجديد","🍫 الكريب","🧇 الوافل","🥤 المشروبات"],
  settings:{shopName:"كريب أبو ليان",whatsapp:whatsappNumber,phone:"",instagram:"",address:"النجف",maps:""}
};
const load = (k, fallback) => { try { const v=localStorage.getItem("cbl_"+k); return v?JSON.parse(v):fallback } catch(e){return fallback} };
const save=(k,v)=>localStorage.setItem("cbl_"+k,JSON.stringify(v));
let products=load("products",defaults.products);
let cart=load("cart",defaults.cart);
let ordersOpen=load("ordersOpen",defaults.ordersOpen);
let homeSections=load("homeSections",defaults.homeSections);
let sectionOrder=load("sectionOrder",defaults.sectionOrder);
let settings=load("settings",defaults.settings);

const money=n=>new Intl.NumberFormat("ar-IQ").format(n)+" د.ع";
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const imgHTML=(p,cls="")=>p.image?`<img class="${cls}" src="${esc(p.image)}" alt="${esc(p.name)}" onerror="this.style.display='none';this.parentElement.classList.add('placeholder')">`:`<span class="placeholder">🍰</span>`;
const badge=p=>p.discount?"خصم":p.offer?"🎁 عرض":p.newItem?"🆕 جديد":p.popular?"🔥 الأكثر طلبًا":p.featured?"⭐ مميز":"";

function renderHome(){
  const nav=document.getElementById("categoryNav"); if(!nav)return;
  nav.innerHTML=`<button class="category-btn active" data-cat="all">الكل</button>`+categories.map(c=>`<button class="category-btn" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  nav.onclick=e=>{const b=e.target.closest("[data-cat]");if(!b)return;document.querySelectorAll(".category-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderCatalog(b.dataset.cat);document.getElementById("catalog").scrollIntoView({behavior:"smooth"})};
  renderFeatured(); renderCatalog("all"); renderCart(); renderAreaOptions(); applySettings();
}
function card(p){
  const old=p.discount&&p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:"";
  return `<article class="product-card" data-id="${p.id}">
    <div class="product-img">${imgHTML(p)}${badge(p)?`<span class="badge">${badge(p)}</span>`:""}</div>
    <div class="product-info"><h3>${esc(p.name)}</h3><p>${esc(p.description||"")}</p>
      <div class="price-row"><div class="price">${old}<strong>${money(p.price)}</strong></div><button class="add-btn" data-add="${p.id}">+</button></div>
    </div>
  </article>`;
}
function renderCatalog(cat="all"){
  const grid=document.getElementById("productsGrid");if(!grid)return;
  const q=(document.getElementById("searchInput")?.value||"").trim().toLowerCase();
  const list=products.filter(p=>!p.hidden&&(cat==="all"||p.category===cat)&&(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)));
  grid.innerHTML=list.length?list.map(card).join(""):`<div class="empty-state" style="grid-column:1/-1">ما لقينا منتجات مطابقة 🔎</div>`;
  grid.onclick=e=>{const add=e.target.closest("[data-add]");const item=e.target.closest(".product-card");if(add){addToCart(+add.dataset.add)}else if(item){openProduct(+item.dataset.id)}};
}
function renderFeatured(){
  const area=document.getElementById("featuredArea");if(!area)return;
  const defs=[["featured","⭐ المميز"],["popular","🔥 الأكثر طلبًا"],["newItem","🆕 جديد"],["offer","🎁 العروض"],["discount","🏷️ الخصومات"]];
  area.innerHTML=defs.filter(([key])=>homeSections[key]).map(([key,title])=>{
    const list=products.filter(p=>!p.hidden&&p[key]).slice(0,4);
    return list.length?`<div class="feature-section"><span class="eyebrow">SPECIAL</span><h2>${title}</h2><div class="feature-products">${list.map(card).join("")}</div></div>`:"";
  }).join("");
  area.onclick=e=>{const add=e.target.closest("[data-add]");const item=e.target.closest(".product-card");if(add) addToCart(+add.dataset.add); else if(item)openProduct(+item.dataset.id)};
}
function openProduct(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  const modal=document.getElementById("productModal"), detail=document.getElementById("productDetail");
  detail.innerHTML=`<div class="product-detail"><div class="detail-img">${imgHTML(p)}</div><div><span class="eyebrow">${esc(p.category)}</span><h2>${esc(p.name)}</h2><p>${esc(p.description||"طعم لذيذ ومحضر بعناية.")}</p><div class="price">${p.discount&&p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:""}<strong>${money(p.price)}</strong></div><div class="qty"><button id="detailMinus">−</button><strong id="detailQty">1</strong><button id="detailPlus">+</button></div><button class="primary-btn full" id="detailAdd">أضف للسلة 🛒</button></div></div>`;
  let qty=1;document.getElementById("detailMinus").onclick=()=>{qty=Math.max(1,qty-1);document.getElementById("detailQty").textContent=qty};document.getElementById("detailPlus").onclick=()=>{qty++;document.getElementById("detailQty").textContent=qty};document.getElementById("detailAdd").onclick=()=>{addToCart(id,qty);modal.classList.remove("open")};modal.classList.add("open");
}
function addToCart(id,qty=1){const p=products.find(x=>x.id===id);if(!p)return;const row=cart.find(x=>x.id===id);row?row.qty+=qty:cart.push({id,qty});save("cart",cart);renderCart();openCart();}
function renderCart(){
  const el=document.getElementById("cartItems"), count=document.getElementById("cartCount"), total=document.getElementById("cartTotal");if(!el)return;
  let totalVal=0,countVal=0;
  el.innerHTML=cart.length?cart.map(r=>{const p=products.find(x=>x.id===r.id);if(!p)return"";const line=p.price*r.qty;totalVal+=line;countVal+=r.qty;return `<div class="cart-row"><div class="cart-thumb">${imgHTML(p)}</div><div><h4>${esc(p.name)}</h4><small>${money(line)}</small><div class="mini-qty"><button data-minus="${p.id}">−</button><b>${r.qty}</b><button data-plus="${p.id}">+</button></div></div><button class="delete-btn" data-del="${p.id}">×</button></div>`}).join(""):`<div class="empty-state">السلة فارغة 🍰<br>أضف شي يعجبك من المنيو</div>`;
  count.textContent=countVal;total.textContent=money(totalVal);
  el.onclick=e=>{const m=e.target.closest("[data-minus]"),pl=e.target.closest("[data-plus]"),d=e.target.closest("[data-del]");if(m)changeCart(+m.dataset.minus,-1);if(pl)changeCart(+pl.dataset.plus,1);if(d)removeCart(+d.dataset.del)};
}
function changeCart(id,n){const r=cart.find(x=>x.id===id);if(!r)return;r.qty+=n;if(r.qty<1)cart=cart.filter(x=>x.id!==id);save("cart",cart);renderCart()}
function removeCart(id){cart=cart.filter(x=>x.id!==id);save("cart",cart);renderCart()}
function openCart(){document.getElementById("cartDrawer")?.classList.add("open");document.getElementById("drawerBackdrop")?.classList.add("open")}
function closeCart(){document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("drawerBackdrop")?.classList.remove("open")}
function renderAreaOptions(){const s=document.getElementById("areaSelect");if(s)s.innerHTML=deliveryAreas.map(a=>`<option value="${a.name}">${a.name} — ${money(a.price)}</option>`).join("")}
function updateCheckoutSummary(){
  const el=document.getElementById("checkoutSummary");if(!el)return;let subtotal=cart.reduce((s,r)=>{const p=products.find(x=>x.id===r.id);return s+(p?p.price*r.qty:0)},0),delivery=document.querySelector('input[name="type"]:checked')?.value==="delivery"?Number(deliveryAreas.find(a=>a.name===document.getElementById("areaSelect")?.value)?.price||0):0;
  el.innerHTML=`<div class="summary-line"><span>مجموع المنتجات</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>التوصيل</span><strong>${money(delivery)}</strong></div><hr><div class="summary-line"><span>المجموع النهائي</span><strong>${money(subtotal+delivery)}</strong></div>`;
}
function showCheckout(){if(!cart.length)return alert("السلة فارغة.");if(!ordersOpen)return alert("الطلبات متوقفة حاليًا، يرجى المحاولة لاحقًا.");document.getElementById("checkoutModal").classList.add("open");updateCheckoutSummary()}
function applySettings(){document.title=`${settings.shopName||"كريب أبو ليان"} | CREPE ABU LAYAN`}
function initAdmin(){
  if(!document.getElementById("statProducts"))return;
  document.getElementById("statProducts").textContent=products.length;document.getElementById("statCategories").textContent=new Set(products.map(p=>p.category)).size;document.getElementById("statFeatured").textContent=products.filter(p=>p.featured).length;document.getElementById("statOffers").textContent=products.filter(p=>p.offer).length;document.getElementById("ordersToggle").checked=ordersOpen;
  document.getElementById("ordersToggle").onchange=e=>{ordersOpen=e.target.checked;save("ordersOpen",ordersOpen)};
  const cat=document.getElementById("productCategory");cat.innerHTML=categories.map(c=>`<option>${c}</option>`).join("");
  renderAdminProducts();renderHomeToggles();renderSectionOrder();fillSettings();
  document.getElementById("productForm").onsubmit=saveProduct;
  document.getElementById("cancelEdit").onclick=resetProductForm;
  document.getElementById("adminSearch").oninput=renderAdminProducts;
  document.getElementById("settingsForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);settings=Object.fromEntries(f.entries());save("settings",settings);alert("تم حفظ الإعدادات.");};
}
function renderAdminProducts(){
  const el=document.getElementById("adminProducts"),q=(document.getElementById("adminSearch")?.value||"").toLowerCase();
  el.innerHTML=products.filter(p=>p.name.toLowerCase().includes(q)).map(p=>`<div class="admin-product"><div>${imgHTML(p)}</div><div><h4>${esc(p.name)}</h4><p>${esc(p.category)} • ${money(p.price)} ${p.hidden?"• مخفي":""}</p><p>${p.featured?"⭐":""}${p.popular?" 🔥":""}${p.newItem?" 🆕":""}${p.offer?" 🎁":""}${p.discount?" 🏷️":""}</p></div><div class="admin-actions"><button class="small-btn" data-edit="${p.id}">تعديل</button><button class="small-btn" data-hide="${p.id}">${p.hidden?"إظهار":"إخفاء"}</button><button class="small-btn danger" data-delete="${p.id}">حذف</button></div></div>`).join("");
  el.onclick=e=>{const ed=e.target.closest("[data-edit]"),h=e.target.closest("[data-hide]"),d=e.target.closest("[data-delete]");if(ed)editProduct(+ed.dataset.edit);if(h)toggleHide(+h.dataset.hide);if(d)deleteProduct(+d.dataset.delete)}
}
function saveProduct(e){
  e.preventDefault();const f=e.target,d=new FormData(f),data={id:Number(d.get("id"))||Date.now(),name:d.get("name"),category:d.get("category"),price:Number(d.get("price")||0),image:d.get("image"),description:d.get("description"),oldPrice:Number(d.get("oldPrice")||0),featured:f.featured.checked,popular:f.popular.checked,newItem:f.newItem.checked,offer:f.offer.checked,discount:f.discount.checked,hidden:false};
  const old=products.findIndex(p=>p.id===data.id);if(old>=0){data.hidden=products[old].hidden;products[old]=data}else products.unshift(data);save("products",products);resetProductForm();initAdmin();alert(old>=0?"تم تعديل المنتج.":"تمت إضافة المنتج.");}
function editProduct(id){const p=products.find(x=>x.id===id),f=document.getElementById("productForm");if(!p)return;Object.entries({id:p.id,name:p.name,category:p.category,price:p.price,image:p.image,description:p.description,oldPrice:p.oldPrice}).forEach(([k,v])=>f.elements[k].value=v||"");["featured","popular","newItem","offer","discount"].forEach(k=>f.elements[k].checked=!!p[k]);document.getElementById("saveProductBtn").textContent="حفظ التعديل";document.getElementById("cancelEdit").classList.remove("hidden");f.scrollIntoView({behavior:"smooth"})}
function resetProductForm(){const f=document.getElementById("productForm");f.reset();f.elements.id.value="";document.getElementById("saveProductBtn").textContent="إضافة المنتج";document.getElementById("cancelEdit").classList.add("hidden")}
function deleteProduct(id){if(!confirm("حذف هذا المنتج؟"))return;products=products.filter(p=>p.id!==id);save("products",products);initAdmin()}
function toggleHide(id){const p=products.find(x=>x.id===id);if(p){p.hidden=!p.hidden;save("products",products);initAdmin()}}
function renderHomeToggles(){const defs=[["featured","⭐ المميز"],["popular","🔥 الأكثر طلبًا"],["newItem","🆕 الجديد"],["offer","🎁 العروض"],["discount","🏷️ الخصومات"]];document.getElementById("homeToggles").innerHTML=defs.map(([k,t])=>`<div class="toggle-row"><strong>${t}</strong><label class="switch"><input data-home="${k}" type="checkbox" ${homeSections[k]?"checked":""}><span></span></label></div>`).join("");document.getElementById("homeToggles").onchange=e=>{const k=e.target.dataset.home;if(!k)return;homeSections[k]=e.target.checked;save("homeSections",homeSections)}}
function renderSectionOrder(){const el=document.getElementById("sectionOrder");el.innerHTML=sectionOrder.map((s,i)=>`<div class="order-row"><strong>${s}</strong><div class="move-buttons"><button data-up="${i}" ${i===0?"disabled":""}>↑</button><button data-down="${i}" ${i===sectionOrder.length-1?"disabled":""}>↓</button></div></div>`).join("");el.onclick=e=>{const u=e.target.closest("[data-up]"),d=e.target.closest("[data-down]");if(u){const i=+u.dataset.up;[sectionOrder[i-1],sectionOrder[i]]=[sectionOrder[i],sectionOrder[i-1]];save("sectionOrder",sectionOrder);renderSectionOrder()}if(d){const i=+d.dataset.down;[sectionOrder[i+1],sectionOrder[i]]=[sectionOrder[i],sectionOrder[i+1]];save("sectionOrder",sectionOrder);renderSectionOrder()}}}
function fillSettings(){const f=document.getElementById("settingsForm");Object.entries(settings).forEach(([k,v])=>{if(f.elements[k])f.elements[k].value=v||""})}

document.addEventListener("DOMContentLoaded",()=>{
  renderHome();initAdmin();
  document.getElementById("cartBtn")?.addEventListener("click",openCart);document.getElementById("closeCart")?.addEventListener("click",closeCart);document.getElementById("drawerBackdrop")?.addEventListener("click",closeCart);
  document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("catalog").scrollIntoView({behavior:"smooth"}));
  document.getElementById("searchBtn")?.addEventListener("click",()=>{document.getElementById("searchWrap")?.scrollIntoView({behavior:"smooth"});setTimeout(()=>document.getElementById("searchInput")?.focus(),350)});
  document.getElementById("searchInput")?.addEventListener("input",()=>renderCatalog(document.querySelector(".category-btn.active")?.dataset.cat||"all"));
  document.getElementById("checkoutBtn")?.addEventListener("click",showCheckout);
  document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>b.closest(".modal-backdrop").classList.remove("open")));
  document.querySelectorAll(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
  document.querySelectorAll('input[name="type"]').forEach(r=>r.addEventListener("change",()=>{document.getElementById("deliveryFields").classList.toggle("hidden",r.value!=="delivery"||!r.checked);updateCheckoutSummary()}));
  document.getElementById("areaSelect")?.addEventListener("change",updateCheckoutSummary);
  document.getElementById("checkoutForm")?.addEventListener("submit",e=>{
    e.preventDefault();if(!ordersOpen)return alert("الطلبات متوقفة حاليًا.");
    const f=new FormData(e.target),type=f.get("type"),subtotal=cart.reduce((s,r)=>{const p=products.find(x=>x.id===r.id);return s+(p?p.price*r.qty:0)},0),delivery=type==="delivery"?Number(deliveryAreas.find(a=>a.name===f.get("area"))?.price||0):0;
    let msg=`السلام عليكم 🌹\n\nأريد طلب من ${settings.shopName||"كريب أبو ليان"}:\n\n`;cart.forEach(r=>{const p=products.find(x=>x.id===r.id);if(p)msg+=`🍰 ${p.name} × ${r.qty}\n${money(p.price*r.qty)}\n\n`});msg+=`💰 مجموع المنتجات: ${money(subtotal)}\n🚚 التوصيل: ${money(delivery)}\n💵 المجموع النهائي: ${money(subtotal+delivery)}\n\n👤 الاسم: ${f.get("name")}\n📱 الهاتف: ${f.get("phone")}\n`;if(type==="delivery")msg+=`📍 المنطقة: ${f.get("area")}\n🏠 العنوان: ${f.get("address")}\n📌 أقرب نقطة دالة: ${f.get("landmark")}\n📝 الملاحظات: ${f.get("notes")||"-"}\n`;msg+=`\nشكراً 🤎`;
    const num=(settings.whatsapp||whatsappNumber).replace(/\D/g,"");window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank");
  });
});
