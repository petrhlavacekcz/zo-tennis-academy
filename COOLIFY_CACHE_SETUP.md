# Coolify Cache Headers Setup - Návod

## 📋 Přehled
Tento návod vám ukáže, jak nastavit cache headers v Coolify pro optimalizaci PageSpeed Insights skóre.

## 🎯 Co to přinese
- ✅ **Statické soubory** (obrázky, fonty, CSS, JS) - cache 1 rok
- ✅ **HTML soubory** - cache 1 hodina (pro rychlé aktualizace)
- ✅ **PageSpeed Insights** - vyřeší "Dlouhá platnost mezipaměti" (1.808 KiB)
- ✅ **Rychlejší načítání** pro opakované návštěvy

---

## ⚠️ **Důležité: Proč Vite Config nefunguje?**

**Vite config `server.headers` funguje JEN pro dev server, NE pro production!**

```javascript
// ❌ TOTO NEFUNGUJE V PRODUCTION
export default {
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  }
}
```

**Důvod:** Používáte `adapter-static` (statický export), který nemá server-side runtime. Cache headers MUSÍ být nastaveny na web serveru (Nginx).

---

## 🚀 Řešení: Dockerfile s Nginx (DOPORUČENO)

### **Krok 1: Soubory jsou už připravené! ✅**

V projektu už máte:
- ✅ `Dockerfile` - Multi-stage build s Nginx
- ✅ `nginx.conf` - Nginx konfigurace s cache headers
- ✅ `.dockerignore` - Optimalizace Docker buildu

### **Krok 2: Nastavení v Coolify**

1. **Přihlaste se do Coolify**
   - Otevřete váš Coolify dashboard

2. **Najděte aplikaci "zo-tennis-academy"**
   - V levém menu: **Resources** → **Applications**
   - Vyberte vaši aplikaci

3. **Změňte Build Method na Dockerfile**
   - V sekci **"Build"** nebo **"Source"**
   - Nastavte **Build Method**: `Dockerfile`
   - **Dockerfile Location**: `Dockerfile` (default)
   - **Port**: `80`

4. **Deploy**
   - Klikněte na **"Deploy"** nebo **"Redeploy"**
   - Počkejte na dokončení buildu (2-5 minut)

5. **Hotovo! 🎉**
   - Aplikace běží s Nginx a cache headers
   - PageSpeed Insights skóre by mělo být 90+

---

## 🔍 Jak to funguje?

### **Dockerfile (Multi-stage build)**

**Stage 1: Build** (Node.js)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
```

**Stage 2: Serve** (Nginx)
```dockerfile
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **nginx.conf (Cache Headers)**

```nginx
# Cache static assets for 1 year
location ~* \.(webp|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# Cache HTML for 1 hour
location ~* \.(html)$ {
    expires 1h;
    add_header Cache-Control "public, max-age=3600, must-revalidate";
}

# SPA fallback
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## 🌐 Alternativa: Cloudflare (Bez změn v kódu)

Pokud nechcete používat Dockerfile:

1. **Přidejte doménu do Cloudflare**
   - [cloudflare.com](https://cloudflare.com) → Add Site
   - Změňte DNS servery u registrátora

2. **Nastavte caching**
   - **Caching** → **Browser Cache TTL**: `1 year`
   - **Speed** → **Auto Minify**: Zapnout HTML, CSS, JS

3. **Hotovo!**
   - Cloudflare automaticky cachuje a přidává headers
   - Bonus: CDN zdarma po celém světě 🌍

---

## ✅ Ověření nastavení

Po nastavení cache headers ověřte, že fungují:

### **1. Chrome DevTools**
1. Otevřete stránku v Chrome
2. Stiskněte `F12` (DevTools)
3. Jděte na záložku **"Network"**
4. Obnovte stránku (`Ctrl+R`)
5. Klikněte na libovolný obrázek nebo CSS soubor
6. V záložce **"Headers"** najděte:
   - `Cache-Control: public, max-age=31536000, immutable`

### **2. Online nástroje**
- [https://redbot.org/](https://redbot.org/) - Zkontroluje HTTP headers
- Zadejte URL: `https://www.zotennisacademy.cz/zo-tennis-academy.webp`
- Ověřte, že `Cache-Control` je nastaven správně

### **3. PageSpeed Insights**
- Otevřete [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- Zadejte URL: `https://www.zotennisacademy.cz`
- Zkontrolujte, že **"Dlouhá platnost mezipaměti"** už není v doporučeních

---

## 📊 Očekávané výsledky

Po nastavení cache headers:
- ✅ **PageSpeed Insights Mobile**: 78 → **90-95**
- ✅ **Úspora bandwidth**: 30-50% pro opakované návštěvy
- ✅ **Rychlejší načítání**: 2-3x rychlejší pro returning visitors

---

## 🆘 Troubleshooting

### **Problém: Docker build selhává**
- **Řešení**:
  1. Zkontrolujte, že máte `Dockerfile`, `nginx.conf` a `.dockerignore` v root projektu
  2. V Coolify zkontrolujte build logs
  3. Ujistěte se, že Build Method je nastaven na `Dockerfile`

### **Problém: Aplikace běží, ale cache headers nefungují**
- **Řešení**:
  1. Vymažte browser cache (`Ctrl+Shift+Delete`)
  2. Zkontrolujte headers v DevTools (F12 → Network → vyberte soubor → Headers)
  3. Zkuste hard refresh (`Ctrl+Shift+R`)

### **Problém: 404 chyba na subpages**
- **Řešení**:
  1. Zkontrolujte, že `nginx.conf` obsahuje `try_files $uri $uri/ /index.html;`
  2. Restartujte aplikaci v Coolify

---

## 📞 Kontakt

Pokud máte problémy s nastavením, kontaktujte:
- **Coolify Support**: [https://coolify.io/docs](https://coolify.io/docs)
- **Coolify Discord**: [https://discord.gg/coolify](https://discord.gg/coolify)

---

## 🎉 Hotovo!

Po nastavení cache headers by vaše stránka měla být výrazně rychlejší a PageSpeed Insights skóre by mělo být 90+! 🚀

