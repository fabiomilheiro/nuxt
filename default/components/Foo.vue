<script setup lang="ts">
const foo = useFoo();

const onClick = ()=> {
  if (foo.value == "bar") {
    foo.value = "changed";
  }else {
    foo.value = "bar"
  }
}
</script><template>
  <div>Foo = {{foo}} <DefaultButton @click="onClick">Change</DefaultButton></div>
</template>