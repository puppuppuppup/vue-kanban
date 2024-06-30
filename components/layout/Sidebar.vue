<template>
    <aside class="flex flex-col px-6 py-4 bg-blue-950/30 h-[100vh] gap-10 w-fit">
        <NuxtLink to="/" class="w-[60%] max-w-[100px] mx-auto">
            <img src="/logo.svg" alt="Logo" />
        </NuxtLink>
        <div class="flex flex-col gap-4">
            <UiLink v-for="link in NAV_ITEMS" :key="link.name" :to="link.url" :icon="link.icon">
                {{ link.name }}
            </UiLink>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NAV_ITEMS } from '~/components/layout/nav.data';

export default defineComponent({
    computed: {
        NAV_ITEMS() {
            return NAV_ITEMS;
        },
    },
});
</script>

<style scoped></style>
