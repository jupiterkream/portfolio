<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import brand from '@/assets/Project-Logo.png'
import name from '@/assets/Project-Creator-Name.png'
import backgroundA from '@/assets/Home-BG-1.png'
import backgroundB from '@/assets/Home-BG-2.png'
import {
  ArrowUpRight,
  MoveDown,
  Phone,
  AtSign,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
let ctx: any

onMounted(() => {
  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray('.content .panel')
    const panelsTween = gsap.to('.content', {
      x: () => -window.innerWidth * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=' + 100 * panels.length + '%',
        scrub: true,
        invalidateOnRefresh: true,
        pin: true
        // markers: {
        //   startColor: 'white',
        //   endColor: 'white'
        // }
      }
    })
  })
})

onUnmounted(() => {
  ctx && ctx.revert()
})

const bgTop = backgroundA
const bgBottom = backgroundB
const logo = brand
const creator = name
const menuBar = [
  {
    name: 'Projects'
  },
  {
    name: 'About'
  },
  {
    name: 'Contacts'
  }
]
</script>

<template>
  <div class="relative">
    <div class="sticky top-0 z-50">
      <div class="w-full py-11 pr-32 pl-12 flex z-50 relative items-center justify-between">
        <img :src="logo" draggable="false" class="h-10 w-10 cursor-pointer" />
      </div>
      <div class="bg-red-500 rounded-b- w-auto min-h-[506px] mx-32">s</div>
    </div>

    <div class="sm:min-h-[495px] py-8 bg-[#1b232d]">
      <!-- Menu Bar -->

      <img :src="bgTop" class="w-1/3 absolute top-0 left-0" draggable="false" />
      <img :src="bgBottom" class="w-full pl-96 absolute bottom-0 right-0" draggable="false" />
    </div>
    <div class="min-h-[798px] py-8">
      <div class="px-32">
        <div class="section wrapper">
          <div class="content">
            <div id="#section-green" class="panel center">
              <h1 class="text-white">Panel 1</h1>
            </div>
            <div id="#section-red" class="panel center">
              <h1 class="text-white">Panel 2</h1>
            </div>
            <div id="#section-blue" class="panel center">
              <h1 class="text-white">Panel 3</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  text-align: center;
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
}
nav a {
  color: var(--dark);
  padding-inline: 5px;
  cursor: pointer;
  font-size: 24px;
}
nav a:hover {
  color: var(--color-shockingly-green);
  text-decoration: none;
}
.section {
  width: 300%;
  height: 100vh;
  background-color: none;
}

.wrapper {
  width: 100%;
  background-color: none;
  overflow: hidden;
}

.content {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  flex: 1 0 100vw;
  color: var(--dark);
}
</style>
