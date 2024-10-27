<script setup lang="ts">

definePageMeta({
  layout: "post",
});

</script><template>
  <em>slug={{$route.params.slug}}</em>
  <ContentDoc>
    <template #not-found>Post not found.</template>
  </ContentDoc>
</template>