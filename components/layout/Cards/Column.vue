<template>
    <div
        @dragover="updateCurrentColumn"
        @drop="handleDrop"
        class="flex flex-col items-stretch gap-4 p-4 border border-white/10 rounded-md"
    >
        <div class="p-2 flex justify-center items-center rounded-md" :style="'background:' + color">
            <span>{{ name }}</span>
        </div>
        <LayoutCardsCard v-for="card in cards" :key="card.id" :card="card" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card, CardStatus } from '~/data/cards/cards.types';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        status: {
            type: String as PropType<CardStatus>,
            required: true,
        },
        cards: {
            type: Array as PropType<Card[]>,
            required: true,
        },
    },
    methods: {
        updateCurrentColumn(e: DragEvent) {
            e.preventDefault();
            this.$store.commit('updateCurrentColumn', this.status);
        },
        handleDrop() {
            console.log('dropped');
            this.$store.commit('updateStatus');
        },
    },
});
</script>

<style scoped></style>
