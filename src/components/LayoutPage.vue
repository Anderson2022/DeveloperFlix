<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const searchOpen = ref(false)

const links = [
  { label: 'Início', to: '/' },
  { label: 'Vídeos', to: '/Videos' },
  { label: 'Canais', to: '/Channels' },
  { label: 'Minha lista', to: '/Service' },
]
</script>

<template>
  <header class="topbar">
    <nav class="nav-shell" aria-label="Navegação principal">
      <RouterLink to="/" class="brand" aria-label="DeveloperFlix - início">
        <span class="brand-mark">D</span>
        <span>DEVELOPER<span class="brand-accent">FLIX</span></span>
      </RouterLink>

      <div class="desktop-nav">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: route.path === link.to }"
        >{{ link.label }}</RouterLink>
      </div>

      <div class="nav-actions">
        <label class="search" :class="{ expanded: searchOpen }">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m2.35-5.15A7.5 7.5 0 1 1 4 11.5a7.5 7.5 0 0 1 15 0Z" /></svg>
          <input v-if="searchOpen" autofocus placeholder="Busque por tecnologia..." aria-label="Buscar" />
          <button v-else type="button" aria-label="Abrir busca" @click="searchOpen = true"></button>
        </label>
        <button class="notification" aria-label="Notificações">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></svg>
          <span></span>
        </button>
        <RouterLink to="/Login" class="avatar" aria-label="Acessar perfil">DF</RouterLink>
        <button class="menu-button" type="button" aria-label="Abrir menu" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div v-if="menuOpen" class="mobile-nav">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="menuOpen = false">{{ link.label }}</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.topbar{position:fixed;inset:0 0 auto;z-index:50;background:linear-gradient(180deg,rgba(5,7,12,.96),rgba(5,7,12,.72) 65%,transparent);backdrop-filter:blur(8px)}
.nav-shell{height:76px;max-width:1500px;margin:auto;padding:0 4vw;display:flex;align-items:center;gap:44px}
.brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-size:18px;font-weight:900;letter-spacing:-.6px;white-space:nowrap}.brand-mark{display:grid;place-items:center;width:31px;height:38px;background:#ef233c;border-radius:5px 10px 5px 10px;box-shadow:0 0 26px rgba(239,35,60,.35);font-size:23px;font-style:italic}.brand-accent{color:#ef233c}
.desktop-nav{display:flex;align-items:center;gap:28px}.nav-link{position:relative;padding:27px 0;color:#a9adb8;text-decoration:none;font-size:14px;font-weight:600;transition:.2s}.nav-link:hover,.nav-link.active{color:#fff}.nav-link.active:after{content:'';position:absolute;bottom:16px;left:50%;width:5px;height:5px;border-radius:50%;background:#ef233c;transform:translateX(-50%)}
.nav-actions{margin-left:auto;display:flex;align-items:center;gap:18px}.search{height:38px;display:flex;align-items:center;position:relative;color:#fff}.search svg,.notification svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.8}.search button{position:absolute;inset:0;background:none;border:0;cursor:pointer}.search.expanded{width:230px;padding:0 12px;gap:9px;background:rgba(20,23,31,.9);border:1px solid #343844;border-radius:9px}.search input{min-width:0;width:100%;border:0;outline:0;background:transparent;color:#fff;font-size:13px}.notification{position:relative;padding:6px;background:none;border:0;color:#fff;cursor:pointer}.notification span{position:absolute;right:4px;top:3px;width:6px;height:6px;border-radius:50%;background:#ef233c;box-shadow:0 0 0 2px #090b10}.avatar{display:grid;place-items:center;width:35px;height:35px;border-radius:10px;background:linear-gradient(135deg,#ef233c,#8d1020);color:white;text-decoration:none;font-size:11px;font-weight:800}.menu-button{display:none;width:28px;background:none;border:0}.menu-button span{display:block;height:2px;margin:5px 0;background:#fff}.mobile-nav{display:none}
@media(max-width:850px){.nav-shell{height:68px;padding:0 20px}.desktop-nav{display:none}.brand{font-size:15px}.nav-actions{gap:12px}.notification{display:none}.menu-button{display:block}.search.expanded{position:absolute;left:20px;right:70px;top:15px;width:auto;background:#11141b}.mobile-nav{display:flex;flex-direction:column;padding:8px 20px 20px;background:rgba(8,10,15,.98);border-top:1px solid rgba(255,255,255,.08)}.mobile-nav a{padding:12px 4px;color:#d8d9de;text-decoration:none;font-weight:600}}
</style>
