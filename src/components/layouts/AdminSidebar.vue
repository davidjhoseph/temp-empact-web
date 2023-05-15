 <template>
    <div class="h-full flex w-full">
       <!-- <PrimarySidebar  :collapse="collapse"/>
       <SecondarySidebar /> -->
       <PrimarySidebar />
    </div>
 </template>
 <script setup lang="ts">
 import PrimarySidebar from '../layouts/nav/sidebar/PrimarySidebar.vue'
//  import SecondarySidebar from '../layouts/nav/sidebar/SecondarySidebar.vue'
import { ref } from 'vue';
 const collapse = ref(true);
</script>