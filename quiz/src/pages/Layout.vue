<template>
  <div>
    <div class="ui fixed inverted menu">
      <div class="ui container">
        <router-link to="/" class="header item">
          Intro
        </router-link>
        <router-link :to="{name: 'settings'}" class="header item">
          Settings
        </router-link>
      </div>
    </div>
    <div class="ui text container grid">
      <router-view></router-view>
    </div>
  </div>
</template>
