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
  <div>Foo = {{foo}} <Button @click="onClick">Change</Button></div>
</template>