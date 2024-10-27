<script setup lang="ts">
definePageMeta({
  layout: "post",
  name: "Post X",
})
</script><template>
  <h1>Post</h1>
  <ContentDoc>
    <template #not-found>Post not found.</template>
  </ContentDoc>
</template>