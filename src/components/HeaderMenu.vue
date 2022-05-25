<template>
  <div class="header-menu">
    <h1 class="header_h">
      <router-link to="/" class="menu-btn_h">Kazuki's Portfolio</router-link>
    </h1>
    <nav class="header_nav">
      <ul class="header_navlist">
        <li class="header_navitems">
          <router-link to="/about" class="menu-btn">About</router-link>
        </li>
        <li class="header_navitems">
          <router-link to="/research" class="menu-btn">Reseach</router-link>
        </li>
        <li class="header_navitems">
          <router-link to="/skill" class="menu-btn">Skill</router-link>
        </li>
      </ul>
    </nav>
    <!-- 
    <router-link to="/about" class="menu-btn">About</router-link>
    <router-link to="/research" class="menu-btn">Reseach</router-link>
    <router-link to="/skill" class="menu-btn">Skill</router-link>
    <router-link to="/work" class="menu-btn">Works</router-link> 
    -->
  </div>
</template>

<style lang="sass">
.header-menu
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 15px
  position: fixed
  z-index: 10
  top: 0
  left: 0
  color: #333
  text-decoration: none
  font-weight: bold

.header_h
  margin: 0

  router-link
    display: block

.header_nav
  margin: 0 15px

.header_navlist
  margin: 0
  list-style: none
  display: flex
  justify-content: space-between
  align-items: center

.menu-btn
  display: block
  padding: 10px
  color: #333
  text-decoration: none
  font-weight: bold
  border-bottom: 2px solid transparent
  transition: border-color .25s

  &:hover
    border-bottom: 2px solid #333

.menu-btn_h
  display: block
  padding: 10px
  color: #333
  text-decoration: none
  font-weight: bold
  border-bottom: 2px solid transparent
  transition: border-color .25s

  &:hover
    border-bottom: 2px solid #333
</style>

<!--
<style lang="sass" scoped>
.header-menu
  padding: 15px

  .menu-btn
    margin: 0px 10px
    font-weight: bold
    font-size: 20px
    color: #daf6ff

    &:hover
      color: rgba(256, 256, 256, 1)
</style>
-->