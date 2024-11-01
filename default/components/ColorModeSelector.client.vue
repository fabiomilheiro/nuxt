<script setup lang="ts">
// const colorMode = useColorMode();
interface ColorModeOption {
  name: string;
  icon: string;
}

const system: ColorModeOption = {
  name: "system",
  icon: "material-symbols:display-settings-outline",
};

const light : ColorModeOption = {
  name: "light",
  icon: "material-symbols:light-mode",
};

const dark: ColorModeOption = {
  name: "dark",
  icon: "material-symbols:mode-night",
};

const sepia: ColorModeOption = {
  name: "sepia",
  icon: "material-symbols:coffee-rounded",
};

const colorMode = useColorMode();

const setColor = (mode:ColorModeOption) => {
  colorMode.preference = mode.name;
}
</script>
<template>
  <div class="flex gap-2 items-center">
    <div>
      <ul class="flex gap-2 p-0">
        <li>
          <UIcon
              v-if="colorMode.value == light.name"
              @click="setColor(dark)"
              :name="`${light.icon}`"
              :class="[
              'size-5 cursor-pointer',
          ]"/>
          <UIcon
              v-if="colorMode.value == dark.name"
              @click="setColor(light)"
              :name="`${dark.icon}`"
              :class="[
              'size-5 cursor-pointer',
          ]"/>
        </li>
<!--        <li-->
<!--            v-for="color of colorModes"-->
<!--            :key="color.name"-->
<!--            :class="[-->
<!--              'p-1.5 m-0 flex rounded-sm',-->
<!--              !$colorMode.unknown && color.name === $colorMode.preference ? 'text-primary' : '',-->
<!--              !$colorMode.unknown && color.name === $colorMode.value ? 'border-current border-2' : '',-->
<!--            ]"-->
<!--        >-->
<!--          <UIcon-->
<!--                 :name="`${color.icon}`"-->
<!--                 @click="$colorMode.preference = color.name"-->
<!--                 :class="[-->
<!--              'size-5 cursor-pointer',-->
<!--          ]"/>-->
<!--        </li>-->
      </ul>
<!--      <p>-->
<!--        <ColorScheme placeholder="..." tag="span">-->
<!--          Color mode: <b>{{ $colorMode.preference }}</b>-->
<!--          <span v-if="$colorMode.preference === 'system'"-->
<!--          >&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span-->
<!--          >-->
<!--        </ColorScheme>-->
<!--      </p>-->
    </div>
  </div>

</template>