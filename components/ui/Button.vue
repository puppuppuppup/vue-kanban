<template>
    <button
        v-on="$listeners"
        class="flex items-center justify-center gap-2 bg-purple-800 py-2 px-4 rounded-xl text-white hover:bg-purple-500 transition-colors"
    >
        <img :src="icon" alt="" class="h-[20px] w-[20px]" />
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped></style>
