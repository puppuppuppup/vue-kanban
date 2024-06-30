<template>
    <div>
        <div v-if="cards.length > 0" class="grid grid-cols-3 gap-4">
            <LayoutCardsColumn :cards="todoCards" status="todo" color="#005480" name="Входящие" />
            <LayoutCardsColumn
                :cards="inProcessCards"
                status="in-process"
                color="#640066"
                name="В процессе"
            />
            <LayoutCardsColumn :cards="readyCards" status="ready" color="#026600" name="Готово" />
        </div>
        <div v-else class="w-full text-center pt-10">No cards yet</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card, CardStatus } from '~/data/cards/cards.types';

export default defineComponent({
    data: () => ({
        currentColumn: 'todo' as CardStatus,
        draggedCardId: '',
    }),
    props: {
        cards: {
            type: Array as PropType<Card[]>,
            required: true,
        },
    },
    computed: {
        todoCards(): Card[] {
            return this.cards.filter(card => card.status === 'todo');
        },
        inProcessCards(): Card[] {
            return this.cards.filter(card => card.status === 'in-process');
        },
        readyCards(): Card[] {
            return this.cards.filter(card => card.status === 'ready');
        },
    },
    methods: {
        updateCard() {
            this.$store.commit('updateStatus', {
                id: this.draggedCardId,
                newStatus: this.currentColumn,
            });
        },
        updateCurrentStatus(status: CardStatus) {
            this.currentColumn = status;
        },
    },
});
</script>

<style scoped></style>
