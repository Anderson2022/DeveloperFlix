<script setup lang="ts">
import DeviFlixImage from '@/assets/DeviFlix.png';
import DF from '@/assets/DF.png';


</script>

<template>
  <div class="bg-black relative" >
    <nav class=" bg-opacity-70 relative dark:bg-gray-900 h-20 w-full">
      <div class="max-w-full w-full pl-6 flex flex-wrap items-center h-20 mx-auto ">
        <div class="flex items-center ">
            <a href="/Inicio">
          <img :src="DeviFlixImage" class="w-28" alt="DevFlix" />
          </a>
        </div>
        <div class="absolute hidden md:flex space-x-4 right-10 md:order-2">
          <div class="inset-y-0 flex items-center pl-3 pointer-events-none ">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <div class=" inset-y-0 flex items-center pl-3 pointer-events-none mx-8 ">
            <svg class="w-4 h-4" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

              <title>present</title>
              <desc>Created with Sketch Beta.</desc>
              <defs>

              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -775.000000)"
                  fill="#000000">
                  <path
                    d="M129,785 L103,785 C102.448,785 102,784.553 102,784 C102,783.448 102.448,783 103,783 L129,783 C129.552,783 130,783.448 130,784 C130,784.553 129.552,785 129,785 L129,785 Z M117,787 L128,787 L128,795 L117,795 L117,787 Z M128,803 C128,804.104 127.104,805 126,805 L117,805 L117,797 L128,797 L128,803 L128,803 Z M104,787 L115,787 L115,795 L104,795 L104,787 Z M115,805 L106,805 C104.896,805 104,804.104 104,803 L104,797 L115,797 L115,805 L115,805 Z M113,777 C114.104,777 115,777.896 115,779 C115,780.104 114.104,781 113,781 C111.896,781 111,780.104 111,779 C111,777.896 111.896,777 113,777 L113,777 Z M119,777 C120.104,777 121,777.896 121,779 C121,780.104 120.104,781 119,781 C117.896,781 117,780.104 117,779 C117,777.896 117.896,777 119,777 L119,777 Z M130,781 L122.445,781 C122.789,780.41 123,779.732 123,779 C123,776.791 121.209,775 119,775 C117.798,775 116.733,775.541 116,776.38 C115.267,775.541 114.202,775 113,775 C110.791,775 109,776.791 109,779 C109,779.732 109.211,780.41 109.555,781 L102,781 C100.896,781 100,781.896 100,783 L100,785 C100,786.104 100.896,787 102,787 L102,803 C102,805.209 103.791,807 106,807 L126,807 C128.209,807 130,805.209 130,803 L130,787 C131.104,787 132,786.104 132,785 L132,783 C132,781.896 131.104,781 130,781 L130,781 Z"
                    id="present" sketch:type="MSShapeGroup">

                  </path>
                </g>
              </g>
            </svg>
          </div>
          <div class=" inset-y-0 flex items-center pl-3 pointer-events-none ">
            <svg class="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <title />

              <g id="Complete">

                <g id="bell">

                  <g>

                    <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none"
                      stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                    <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke="#000000" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" />

                  </g>

                </g>

              </g>

            </svg>
          </div>
          <div class=" text-white rounded-lg p-2 flex items-center">
            <img class="w-10 h-10 rounded-full mr-2" :src="DF" />
            <h5 class="text-lg">John <i class="fa fa-caret-down ml-1"></i></h5>
          </div>

        </div>


        <div class="flex items-center  justify-between hidden w-full md:flex md:w-auto md:order-1 ml-10"
          id="navbar-search">
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus: bg-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
              placeholder="Search...">
          </div>
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/Inicio"
                class="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white "
                aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="/Videos"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white  md:p-0 md:dark:hover:text-white  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Videos</a>
            </li>
            <li>
              <a href="/Channels"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Canais</a>
            </li>
             <li>
                <a href="/Mais"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tutoriais</a>
              </li>
               <li>
                <a href="/service"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Serviços</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>   
  </div>

   <RouterView />
</template>