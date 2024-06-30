<template>
    <div
        v-on="$listeners"
        class="p-6 w-full flex items-center justify-center bg-gray-800 border rounded-md border-white/10 hover:border-purple-600/70 transition-colors cursor-pointer"
        draggable="true"
        @dragstart="startDragging"
    >
        <span>{{ card.name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card } from '~/data/cards/cards.types';

export default defineComponent({
    props: {
        card: {
            type: Object as PropType<Card>,
            required: true,
        },
    },
    methods: {
        startDragging() {
            this.$store.commit('updateDraggedCardId', this.card.id);
            this.$store.commit('updateCurrentColumn', this.card.status);
        },
    },
});
</script>

<style scoped></style>
