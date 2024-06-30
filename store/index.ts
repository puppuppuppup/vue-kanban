import { MutationTree } from 'vuex';
import { Card, CardStatus } from '~/data/cards/cards.types';
import { v4 as uuid } from 'uuid';

export const state = () => ({
    cards: [] as Card[],
    draggedCardId: '',
    currentColumn: 'todo' as CardStatus,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    updateStatus(state) {
        state.cards = state.cards.map(card => {
            if (card.id === state.draggedCardId) {
                return { ...card, status: state.currentColumn };
            }
            return card;
        });
    },
    updateCurrentColumn(state, newState: CardStatus) {
        state.currentColumn = newState;
    },
    updateDraggedCardId(state, newState: string) {
        state.draggedCardId = newState;
    },
    addCard(state, { name }: { name: string }) {
        const newCard: Card = { id: uuid(), status: 'todo', name };
        state.cards = [...state.cards, newCard];
    },
};
