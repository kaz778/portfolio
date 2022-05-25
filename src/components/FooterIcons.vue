<template>
  <footer class="footer">
    <p></p>
    <small class="footer-line">&copy; 2022 Kazuki Hara All Rights Reserved.</small>
    <a href="https://github.com/kaz778" class="link-icon"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
  </footer>
</template>

<style lang="sass">
.footer
  display: flex
  justify-content: space-between
  align-items: center

.link-icon
  margin-right: 15px
  color: #333
  font-size: 40px

  &:hover
    color: #999
</style>

<!--
<template>
  <div class="footer-icons">
    <div class="link">
			<a href="https://github.com/ta8i2chi8" class="link-icon"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
			<a href="https://twitter.com/taichimorimoto0" class="link-icon"><font-awesome-icon :icon="['fab','twitter']" class="web-icon twitter"/></a>
			<a href="https://www.instagram.com/moribook4/" class="link-icon"><font-awesome-icon :icon="['fab','instagram']" class="web-icon instagram"/></a>
		</div>
  </div>
</template>

<style lang="sass" scoped>
.link-icon
  margin-right: 15px
  color: #daf6ff
  font-size: 20px

  &:hover
    color: rgba(256, 256, 256, 1)
</style>
-->