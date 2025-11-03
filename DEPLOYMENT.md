# 🚀 Deployment Guide - ZO Tennis Academy

## 📋 Quick Start

### **Local Development**
```bash
npm install
npm run dev
```

### **Production Build**
```bash
npm run build
npm run preview
```

---

## 🐳 Docker Deployment (Coolify)

### **Prerequisites**
- ✅ Coolify instance running
- ✅ Git repository connected
- ✅ Domain configured

### **Setup Steps**

1. **Push code to Git**
   ```bash
   git add .
   git commit -m "Add Docker deployment"
   git push
   ```

2. **Configure Coolify**
   - Go to your application in Coolify
   - Set **Build Method**: `Dockerfile`
   - Set **Port**: `80`
   - Click **Deploy**

3. **Done! 🎉**
   - Application runs with Nginx
   - Cache headers configured
   - Gzip compression enabled

---

## 📁 Deployment Files

### **Dockerfile**
Multi-stage build:
- **Stage 1**: Build SvelteKit app with Node.js
- **Stage 2**: Serve with Nginx

### **nginx.conf**
Nginx configuration with:
- ✅ Cache headers (1 year for static, 1 hour for HTML)
- ✅ Gzip compression
- ✅ Security headers
- ✅ SPA fallback routing
- ✅ Health check endpoint

### **.dockerignore**
Optimizes Docker build by excluding:
- `node_modules`
- `.git`
- Build artifacts
- IDE files

---

## 🔧 Configuration

### **Environment Variables**
No environment variables needed for basic deployment.

### **Custom Domain**
In Coolify:
1. Go to **Domains**
2. Add your domain: `www.zotennisacademy.cz`
3. Configure DNS A record to point to Coolify server IP

### **SSL Certificate**
Coolify automatically provisions Let's Encrypt SSL certificates.

---

## 📊 Performance

### **Expected Metrics**
- **PageSpeed Insights Mobile**: 90-95
- **LCP**: 1.5-2.0s
- **FCP**: <1.0s
- **CLS**: <0.1

### **Optimizations Included**
- ✅ WebP images
- ✅ Async font loading with subsetting
- ✅ Critical CSS inlining
- ✅ Lazy loading for images and widgets
- ✅ Cache headers (1 year for static assets)
- ✅ Gzip compression
- ✅ Security headers

---

## 🌍 Internationalization

### **Supported Languages**
- 🇨🇿 Czech (default at `/`)
- 🇬🇧 English (`/en`)
- 🇩🇪 German (`/de`)
- 🇵🇱 Polish (`/pl`)

### **URL Structure**
- Czech: `https://www.zotennisacademy.cz/`
- English: `https://www.zotennisacademy.cz/en/`
- German: `https://www.zotennisacademy.cz/de/`
- Polish: `https://www.zotennisacademy.cz/pl/`

---

## 🔍 Monitoring

### **Health Check**
Nginx provides a health check endpoint:
```bash
curl https://www.zotennisacademy.cz/health
# Response: OK
```

### **Logs**
View logs in Coolify:
1. Go to your application
2. Click **Logs**
3. View real-time Nginx access and error logs

---

## 🆘 Troubleshooting

### **Build Fails**
- Check Coolify build logs
- Verify `Dockerfile`, `nginx.conf`, `.dockerignore` exist
- Ensure `npm run build` works locally

### **404 on Subpages**
- Verify `nginx.conf` has `try_files $uri $uri/ /index.html;`
- Restart application in Coolify

### **Cache Headers Not Working**
- Clear browser cache (`Ctrl+Shift+Delete`)
- Check headers in DevTools (F12 → Network)
- Hard refresh (`Ctrl+Shift+R`)

---

## 📚 Additional Resources

- **Coolify Docs**: [https://coolify.io/docs](https://coolify.io/docs)
- **SvelteKit Docs**: [https://kit.svelte.dev](https://kit.svelte.dev)
- **Nginx Docs**: [https://nginx.org/en/docs/](https://nginx.org/en/docs/)
- **PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)

---

## 🎯 Next Steps

1. ✅ Deploy to Coolify
2. ✅ Configure custom domain
3. ✅ Test PageSpeed Insights
4. ✅ Monitor performance
5. ✅ Set up error tracking (optional)

---

**Happy Deploying! 🎾**

