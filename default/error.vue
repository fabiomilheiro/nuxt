<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

</script><template>
  <NuxtLayout name="default">
    <h1>Ooops</h1>
    <div v-if="error">
      <p>Code: {{error.statusCode}}</p>
      <p>Code: {{error.message}}</p>
      <p>Code: {{error}}</p>
    </div>
  </NuxtLayout>
</template>