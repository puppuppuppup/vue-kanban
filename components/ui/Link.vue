<template>
    <NuxtLink
        :to="to"
        v-on="$listeners"
        class="flex items-center gap-2 bg-transparent py-2 px-4 rounded-xl text-white hover:bg-purple-700/50 transition-colors"
    >
        <img :src="icon" alt="" class="h-[20px] w-[20px]" />
        <slot />
    </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped></style>
