<script lang="ts">
import { onMounted, ref } from 'vue'
import brand from '@/assets/Project-Logo.png'
import name from '@/assets/Project-Creator-Name.png'
import backgroundA from '@/assets/Home-BG-1.png'
import backgroundB from '@/assets/Home-BG-2.png'
import carouselA from '@/assets/portfolio-image-1.png'
import carouselB from '@/assets/portfolio-image-2.png'
import router from '@/router'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import {
  EffectCoverflow,
  Keyboard,
  Pagination,
  Navigation,
  Scrollbar,
  Parallax
} from 'swiper/modules'
import {
  ArrowUpRight,
  MoveDown,
  Phone,
  AtSign,
  Linkedin,
  Facebook,
  Instagram,
  MoveRight,
  MoveLeft
} from 'lucide-vue-next'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ArrowUpRight,
    MoveDown,
    Phone,
    AtSign,
    Linkedin,
    Facebook,
    Instagram,
    MoveRight,
    MoveLeft
  },

  setup() {
    const swiperInstance = ref()

    function onSwiper(swiper) {
      swiperInstance.value = swiper
      console.log(swiperInstance.value)
    }
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext()
    }
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev()
    }

    const bgCarouselA = carouselA.slice(1)
    const bgCarouselB = carouselB.slice(1)
    const bgTop = backgroundA
    const bgBottom = backgroundB
    const logo = brand
    const creator = name
    const scrollPosition: any = ref(null)
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
    const projects = [
      {
        id: 1,
        title: 'Travel Fair',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselA
      },
      {
        id: 2,
        title: 'Travel Fair2',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselB
      },
      {
        id: 3,
        title: 'Travel Fair3',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselA
      },
      {
        id: 4,
        title: 'Travel Fair4',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselA
      },
      {
        id: 5,
        title: 'Travel Fair5',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselB
      },
      {
        id: 6,
        title: 'Travel Fair6',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselA
      },
      {
        id: 7,
        title: 'Travel Fair7',
        description: 'Login, Minimum Spend Tracking, and Reward Redemption',
        image: bgCarouselB
      }
    ]

    function goToProduct(id: number) {
      router.push({
        path: '/product'
      })
    }

    function updateScroll() {
      scrollPosition.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScroll)
    })

    return {
      menuBar,
      creator,
      logo,
      bgBottom,
      bgTop,
      projects,
      bgCarouselA,
      scrollPosition,
      updateScroll,
      bgCarouselB,
      goToProduct,
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper,
      modules: [EffectCoverflow, Keyboard, Pagination, Navigation, Scrollbar, Parallax]
    }
  }
}
</script>

<template>
  <div class="relative">
    <div
      class="w-full py-11 pr-32 pl-32 z-50 flex sticky transition-all ease-in-out duration-300 top-0 items-center justify-between"
      :class="{ 'bg-[#1b232d] shadow-lg': scrollPosition > 80 }"
    >
      <img :src="logo" draggable="false" class="h-10 w-10 cursor-pointer" />
      <div class="text-base flex items-center justify-center gap-8 h-full">
        <div v-for="tabs in menuBar" :key="tabs.name" class="cursor-pointer">
          {{ tabs.name }}
        </div>
      </div>
    </div>

    <div class="sm:min-h-[495px] py-8 bg-[#1b232d]">
      <!-- Menu Bar -->

      <img :src="bgTop" class="w-1/3 absolute top-0 left-0" draggable="false" />
      <img :src="bgBottom" class="w-full pl-96 absolute bottom-0 right-0" draggable="false" />
      <div class="px-32 gap-32 min-h-full">
        <div class="flex">
          <div class="w-1/2">
            <img :src="creator" draggable="false" class="max-w-[367px] z-10 relative" />
          </div>
          <div class="w-1/2">
            <h1 class="text-white text-base font-content leading-7">
              Hello I'm Kenneth Paul Cortez and welcome to my portfolio as a Front-End Developer!
            </h1>
            <h1 class="text-subgray text-sm font-content leading-7 mt-3">
              Based in the Philippines, I've been working on websites in collaboration with Software
              Developers and personally exploring my creativity with digital art, web design, and
              traditional art
            </h1>
            <div class="flex gap-8 mt-32">
              <button
                class="border flex base-button-2 text-subgray items-center justify-center border-subgray rounded-full text-center py-3 w-[160px]"
              >
                My Resume
                <ArrowUpRight class="w-4" />
              </button>
              <button
                class="border flex base-button-2 items-center justify-center text-subgray border-subgray rounded-full text-center py-3 w-[160px]"
              >
                See My Projects
                <MoveDown class="w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#222A36] min-h-[798px] py-8">
      <div class="px-32">
        <h1 class="text-white font-bold text-[64px]">Projects</h1>
        <h1 class="text-white mt-16 leading-7">
          This is a compilation of some of my most <br />
          prominent works throughout my career
        </h1>
      </div>
      <!-- <div class="">
        <div class="flex-none">
          <div class="w-full h-full flex items-center justify-start -ml-20">
            <div
              @click="swiperNextSlide"
              class="border hover:w-48 border-[#898D95] cursor-pointer base-button-2 hover:h-48 px-2 hover:px-4 transition-all duration-300 ease-in-out rounded-full w-44 h-44 flex items-center text-[#898D95] justify-end"
            >
              <MoveLeft :size="65" stroke-width="0.5" />
            </div>
          </div>
        </div>
        <div class="mt-8 col-start-1 col-end-7">
          <swiper
            :slidesPerView="4"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1
            }"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :spaceBetween="0"
            :loop="true"
            :keyboard="{
              enabled: true
            }"
            :modules="modules"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="project in projects" :key="project.id" class="max-w-[363px]">
              <button
                @click="goToProduct(project.id)"
                class="w-full base-button-2 h-full relative overflow-hidden"
              >
                <div
                  class="w-[full] h-full bg-[#C3CADB] transition-all duration-500 hover:scale-105 ease-in-out transform bg-no-repeat bg-center bg-cover;"
                >
                  <img :src="project.image" />
                  <div class="w-full h-full bg-gradient-to-t from-black to-none"></div>
                </div>

                <div class="text-white z-10 bottom-0 p-6 absolute text-left">
                  <h1 class="font-bold text-2xl mb-3">{{ project.title }}</h1>
                  <h1 class="mb-6 font-content text-sm">
                    {{ project.description }}
                  </h1>
                  <button
                    class="rounded-full base-button-2 border border-white w-full text-base font-bold font-content p-[10px]"
                  >
                    OPEN
                  </button>
                </div>
              </button>
            </swiper-slide>
          </swiper>
        </div>
        <div class="">
          <div class="w-full h-full flex items-center justify-end ml-20">
            <div
              @click="swiperPrevSlide"
              class="border hover:w-48 border-[#898D95] cursor-pointer base-button-2 hover:h-48 px-2 hover:px-4 transition-all duration-300 ease-in-out rounded-full w-44 h-44 flex items-center text-[#898D95] justify-start"
            >
              <MoveRight :size="65" stroke-width="0.5" />
            </div>
          </div>
        </div>
      </div> -->
      <div class="bg-red-200 w-full h-full mt-8">
        <div></div>
      </div>
    </div>
    <div class="min-h-auto">
      <div class="py-8">
        <div class="px-32">
          <h1 class="text-white font-bold text-[64px]">About Me</h1>
          <div class="w-full mb-24 flex mt-11">
            <div class="text-white w-1/2">
              <h1 class="font-content text-base leading-7">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptates
                molestiae, ullam debitis commodi amet in alias ad natus nisi, dignissimos odit
                quisquam nesciunt iusto illum aperiam inventore, id magnam?
              </h1>
              <div class="text-[#898D95] mt-6 font-content text-sm leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quo rem
                tempora? Tenetur iure non esse ipsum ullam sed enim molestiae, est quidem quae hic,
                reiciendis quos quo architecto quis.
              </div>
            </div>
            <div
              class="flex flex-col items-center justify-center w-1/2 text-center text-white font-bold text-xl"
            >
              <span class="text-[#6F9E23] text-[48px] mb-4">3</span>Years of <br />Experience
            </div>
          </div>
          <div class="mb-28 flex">
            <a href="asd" class="pr-5 cursor-pointer">
              <Phone color="#898D95" />
            </a>
            <a href="sdf" class="px-5 cursor-pointer">
              <AtSign color="#898D95" />
            </a>

            <a href="sdf" class="px-5 cursor-pointer">
              <Linkedin color="#898D95" />
            </a>
            <a href="sdf" class="px-5 cursor-pointer">
              <Facebook color="#898D95" />
            </a>
            <a href="sdf" class="px-5 cursor-pointer">
              <Instagram color="#898D95" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .swiper-slide {
  width: 363px;
  height: 508px;
} */
</style>
